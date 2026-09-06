# Frage: Wo in der Pipeline liegt der RFW-Overhead?

> Der Overhead liegt im Build, weil dort die Definition interpretiert wird.
> Danach, also Layout, Paint und Composition, ist es derselbe Prozess.

## Die Pipeline (Abbildung in Kap. 3)

| | | |
|---|---|---|
| 1 | User input | Reaktion auf Gesten wie einen Tap |
| 2 | Animation | zeitgesteuerte Änderungen |
| **3** | **Build** | **App-Code erzeugt die Widgets ← hier** |
| 4 | Layout | Positionieren und Größe bestimmen |
| 5 | Paint | in eine visuelle Darstellung überführen |
| 6 | Composition | in Zeichenreihenfolge überlagern |
| 7 | Rasterize | an die GPU übergeben |

## Was gemessen wurde

Pro Tap werden zwei Zeitstempel geloggt:

- `build_start`: Tap bis **Beginn** des Builds. Das ist der Wait.
- `tap_to_frame`: Tap bis **geflushter Frame**.

Die Render-Spanne ist die Differenz: **vom Beginn des Builds bis zum fertigen
Frame.** Sie beginnt also genau dort, wo RFWs Mehrarbeit sitzt, enthaelt aber
auch Layout, Paint und Composition. 5,3 ms bei RFW gegen 5,0 ms bei der
Baseline.

Der Kommentar im Code sagt es selbst: *"real build time needs to be calculated
afterwards"*. Die reine Build-Zeit wurde nicht direkt gemessen.

## Welche Stufen die Messung abdeckt

```
1  User input      Tap kommt an, Stoppuhr startet
2  Animation       Wait endet hier
3  Build         ┐
4  Layout        │  geflusht, die gemessene Render-Spanne
5  Paint         │
6  Composition   ┘  hier endet die Messung
7  Rasterize        GPU, eigener Thread, NICHT enthalten
```

"Flushed" ist keine eigene Stufe, sondern das Wort dafuer, dass die Pipeline
durchgelaufen ist. In Flutter heissen die Schritte woertlich `flushLayout()`
und `flushPaint()`. Der `addPostFrameCallback` feuert, sobald die Ebenen
zusammengesetzt und an die Engine uebergeben sind, und stoppt die Messung.

## Wo Framework aufhoert und Engine anfaengt

Meine Frage dazu, und sie trifft es: **die Engine ist nach 6, und alles
darunter ist irgendwo Framework.**

Die Grenze liegt zwischen Stufe 6 und 7:

```
  Glas, Betriebssystem, Embedder     ← draussen
  ┌─────────────────────────────┐
  │ 3 Build                     │
  │ 4 Layout                    │   Framework, Dart, UI-Thread
  │ 5 Paint                     │   ← meine Spanne
  │ 6 Composition               │
  └─────────────────────────────┘
  7 Rasterize                       ← Engine, C++, eigener Thread
  Display                           ← draussen
```

Stufe 3 bis 6 ist Arbeit des Frameworks in Dart auf dem UI-Thread. Am Ende von
6 steht die fertig zusammengesetzte Szene. Stufe 7 nimmt die Engine entgegen
und uebersetzt sie in GPU-Anweisungen, auf einem eigenen Thread.

Stufe 1 und 2 sind nicht sauber Framework: ein Tap kommt vom Glas ueber das
Betriebssystem und den Embedder herein und erreicht das Framework erst danach.
Genau deshalb beginnt die Messung nicht bei der Beruehrung, sondern dort, wo
der Tap **in der App** ankommt. Dieselbe Grenze auf der anderen Seite.

**Was die Engine ist**, in den Worten der Thesis, Kapitel 3: die C++-Schicht
unter dem Dart-Framework, die die Dart-Laufzeitumgebung haelt und die fertig
zusammengesetzte Szene rastert. Darunter sitzt der plattformspezifische
Embedder, der die Anbindung ans Betriebssystem macht.

**Merksatz:** meine Spanne umfasst die Arbeit des Frameworks und endet an der
Uebergabe an die Engine.

## Wenn nach "geflushter Frame" gefragt wird

> Geflushter Frame heisst, die App hat den neuen Schritt fertig gebaut,
> angeordnet und gezeichnet und an die Engine uebergeben. Auf dem Bildschirm
> ist er in diesem Moment noch nicht, das Rastern auf der GPU und der Weg zum
> Display kommen danach. Genau die fehlen in meiner Spanne.

**Nicht sagen:** "an die GPU uebergeben". Das waere Stufe 7 und die ist nicht
enthalten. Es ist die Engine, die danach an die GPU geht.

**Nicht "gerendert" statt "geflusht" sagen.** "Render" ist ohnehin schon
doppelt belegt, siehe Begriffskollision unten. Ein dritter Gebrauch fuer den
Endpunkt macht es schlimmer, und auf der RQ3-Folie stuende dann "Median render
time ... to the rendered frame".

Dass Stufe 7 und das physische Aufleuchten fehlen, steht bewusst auf der
Limitationen-Folie: *"From the tap arriving in the app to the flushed frame,
not from finger to glass."*

**Nicht sagen:** „Ich habe den Build gemessen." Dann kommt „und Layout und
Paint?".

**Nicht sagen:** „Die 0,3 ms sind die Interpretationszeit." Die Teilschritte
wurden nicht einzeln gemessen.

**Sagen:** Gemessen wurde bauen, layouten und malen. Der Unterschied kommt aus
dem Bauen, weil dort zusätzlich die Definition interpretiert wird.

**Nicht sagen:** „danach ist es wieder gleich". Das „wieder" behauptet auch
etwas ueber die Zeit VOR dem Build, und dort sitzt der Wait, ueber den ich
bewusst nichts aussage.

## Frage: Warum haben Sie das Rastern nicht mitgemessen?

Die Frage kann in zwei Varianten kommen, und sie brauchen verschiedene
Antworten.

### Variante 1: fuer den Vergleich

> Verglichen wird die Spanne, in der sich die beiden Architekturen ueberhaupt
> unterscheiden koennen. Der RFW-Mehraufwand steckt im Build, weil dort die
> Definition interpretiert wird. Das Rastern arbeitet in beiden
> Implementierungen auf demselben visuellen Ergebnis, beide zeigen dieselben
> Widgets mit denselben Eigenschaften, das belegen die Testfaelle. Dort kann
> kein Architekturunterschied liegen. Gemessen habe ich es nicht.

**Nicht sagen:** "das Rastern ist identisch". Nicht geprueft. Sagen: dort ist
kein Unterschied zu erwarten, und gemessen wurde es nicht.

**Nicht begruenden mit "es sind ja beides normale Flutter-Apps".** Daraus folgt
nichts. Zwei Flutter-Apps koennen voellig unterschiedlich teuer zu rastern
sein, je nachdem was sie zeichnen. Was traegt, ist: **beide zeichnen dieselben
Screens**, dieselben Widgets mit denselben Eigenschaften, belegt durch die
Testfaelle. Das Rastern arbeitet auf dem, was vorne herauskommt.

### Variante 2: fuer die 100-ms-Schwelle

Die Frage kommt oft in der Form "wenn Sie nah an die 100 ms wollen". Diese
Annahme ist falsch, und sie zu korrigieren **ist** die Antwort: ich bin nicht
nah an der Schwelle, ich bin bei einem Fuenftel.

> Ich bin nicht nah an der Schwelle. Der langsamste einzelne gemessene Tap lag
> bei 20,4 Millisekunden, das ist ein Fuenftel der 100. Damit der volle Weg die
> Schwelle reisst, muessten die fehlenden Teile zusammen rund 80 Millisekunden
> beitragen, also etwa das Vierfache meiner gesamten Messspanne. Das Rastern
> allein haette daran nichts geaendert. Und es haette die Spanne auch nicht
> vollstaendig gemacht, denn der Weg von der Beruehrung zum Handler und der Weg
> vom fertigen Frame zum Display sind von innerhalb der App grundsaetzlich
> nicht sichtbar. Die Schwelle waere also so oder so Bezugswert geblieben und
> kein Nachweis, und genau so berichte ich sie.

Der Kern: **waerst du bei 85 ms, waere die Frage vernichtend.** Bei 20,4 ms ist
sie es nicht. Die Verhaeltniszahl ist die Verteidigung, nicht eine Erklaerung
ueber Threads oder APIs.

Wichtig zu wissen, falls jemand technisch nachbohrt: **das Rastern waere
messbar gewesen.** Flutter liefert ueber `addTimingsCallback` ein `FrameTiming`
mit der Raster-Zeit. Die Begruendung "das sieht eine Stoppuhr in der App nicht"
traegt fuer die beiden aeusseren Stuecke, nicht fuers Rastern. Nicht so tun,
als waere es technisch unmoeglich gewesen.

**Hier nicht das Vergleichsargument bringen.** Ob das Rastern in beiden
Implementierungen gleich ist, aendert nichts daran, dass es in der Spanne
fehlt. An dieser Stelle beantwortet es eine andere Frage als die gestellte und
klingt nach Ausweichen.

**Und die 100 ms nicht wichtiger machen als sie sind.** Der Befund fuer RQ3 ist
der Unterschied von 0,3 ms in der Renderzeit. Die Schwelle ist eine Referenz
aus SO3, mit riesigem Abstand erfuellt. Wer die Frage so beantwortet, als
haenge die Aussage an der Schwelle, macht sie zum Angriffspunkt.

Zum Abschluss, als Reflexion und nicht als Ausrede:

> Rueckblickend haette ich das Rastern mitnehmen koennen. Es haette die Spanne
> verlaengert, an der Aussage aber nichts geaendert, weil die beiden aeusseren
> Stuecke ohnehin fehlen.

**Nicht als Hauptbegruendung sagen:** "ich wollte so viel vom Weg wie moeglich
messen". Das klingt nach einer Absicht, die nicht eingeloest wurde, und die
naechste Frage waere, warum dann nicht.

## Begriffskollision beachten

Die Abbildung in Kap. 3 nennt nur die Stufen 4 bis 6 "rendering phase", Build
gehoert dort NICHT dazu. Meine Messgroesse "render" in Kap. 7-4 umfasst dagegen
Build plus Layout plus Paint.

Wer Flutter kennt, hoert "render time" und denkt an Stufen 4 bis 6. Deshalb beim
Nennen der Zahl dazusagen:

> Die gemessene Render-Zeit umfasst Bauen, Layouten und Malen. Der Unterschied
> entsteht beim Bauen. Layout und Paint sind identisch.
