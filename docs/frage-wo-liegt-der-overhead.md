# Frage: Wo in der Pipeline liegt der RFW-Overhead?

> Der Overhead liegt im Build, weil dort die Definition interpretiert wird.
> Danach — Layout, Paint, Composition — ist es derselbe Prozess.

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

- `build_start` — Tap bis **Beginn** des Builds. Das ist der Wait.
- `tap_to_frame` — Tap bis **geflushter Frame**.

Die Render-Spanne ist die Differenz: **vom Beginn des Builds bis zum fertigen
Frame.** Sie beginnt also genau dort, wo RFWs Mehrarbeit sitzt, enthaelt aber
auch Layout, Paint und Composition. 5,3 ms bei RFW gegen 5,0 ms bei der
Baseline.

Der Kommentar im Code sagt es selbst: *"real build time needs to be calculated
afterwards"* — die reine Build-Zeit wurde nicht direkt gemessen.

## Welche Stufen die Messung abdeckt

```
1  User input      Tap kommt an, Stoppuhr startet
2  Animation       Wait endet hier
3  Build         ┐
4  Layout        │  geflusht — die gemessene Render-Spanne
5  Paint         │
6  Composition   ┘  hier endet die Messung
7  Rasterize        GPU, eigener Thread, NICHT enthalten
```

"Flushed" ist keine eigene Stufe, sondern das Wort dafuer, dass die Pipeline
durchgelaufen ist — in Flutter heissen die Schritte woertlich `flushLayout()`
und `flushPaint()`. Der `addPostFrameCallback` feuert, sobald die Ebenen
zusammengesetzt und an die Engine uebergeben sind, und stoppt die Messung.

Dass Stufe 7 und das physische Aufleuchten fehlen, steht bewusst auf der
Limitationen-Folie: *"From the tap arriving in the app to the flushed frame —
not from finger to glass."*

**Nicht sagen:** „Ich habe den Build gemessen." Dann kommt „und Layout und
Paint?".

**Nicht sagen:** „Die 0,3 ms sind die Interpretationszeit." Die Teilschritte
wurden nicht einzeln gemessen.

**Sagen:** Gemessen wurde bauen, layouten und malen. Der Unterschied kommt aus
dem Bauen, weil dort zusätzlich die Definition interpretiert wird.

**Nicht sagen:** „danach ist es wieder gleich" — das „wieder" behauptet auch
etwas ueber die Zeit VOR dem Build, und dort sitzt der Wait, ueber den ich
bewusst nichts aussage.

## Begriffskollision beachten

Die Abbildung in Kap. 3 nennt nur die Stufen 4 bis 6 "rendering phase" — Build
gehoert dort NICHT dazu. Meine Messgroesse "render" in Kap. 7-4 umfasst dagegen
Build plus Layout plus Paint.

Wer Flutter kennt, hoert "render time" und denkt an Stufen 4 bis 6. Deshalb beim
Nennen der Zahl dazusagen:

> Die gemessene Render-Zeit umfasst Bauen, Layouten und Malen. Der Unterschied
> entsteht beim Bauen — Layout und Paint sind identisch.
