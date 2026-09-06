# RQ3: Wait und Render

## Ablauf eines gemessenen Taps

```
  Testskript loest den Tap aus            ← NICHT aufgezeichnet
  Tap kommt in der App an                 ← Stoppuhr startet
  setState, Flutter meldet einen Frame an
  naechster Vsync, Build beginnt          ← build_start, hier endet der Wait
  Build, Layout, Paint
  Frame geflusht                          ← tap_to_frame, Messung endet

  └──────────── gemessene Spanne ────────────┘
```

Der Wait ist die Zeit vom Eintreffen des Taps bis zum naechsten Display-Takt.
Er liegt **innerhalb** der Spanne und ist gemessen. Danach laeuft der Render.

## Zahlen (Median, 1002 Taps je Implementierung)

| | gesamt | Wait | Render |
|---|---|---|---|
| RFW | 9,8 ms | 4,4 ms | 5,3 ms |
| Baseline | 12,1 ms | 6,8 ms | 5,0 ms |

Die 9,8 gegen 12,1 ms sind kein Vorsprung der RFW-Variante. Der Unterschied
steckt fast vollstaendig im Wait, 2,4 von 2,3 ms Abstand. Im Render ist RFW die
langsamere von beiden.

## Der entscheidende Unterschied: Folge gemessen, Ursache nicht

**Gemessen ist der Wait selbst.** 4,4 und 6,8 ms stehen in Tabelle 7-4.

**Nicht aufgezeichnet ist die Phase.** Also der Zeitpunkt, an dem das Testskript
getippt hat, und wo das Display in seinem 16,7-ms-Zyklus gerade stand. Aus
dieser Beziehung ergibt sich der Wait, aber sie steht in keinem Log.

Deshalb: ich weiss, **wie gross** der Wait war und **wodurch** er entsteht, aber
nicht, **warum** er in den beiden Laeufen unterschiedlich ausfiel.

So steht es auch in der Thesis, Kapitel 8: *"Why they differ was not measured."*

## Wie ich es mir gemerkt habe (meine Worte)

> Ich kann nicht sagen, warum die Taps bei den beiden Implementierungen frueher
> oder spaeter landen, weil diese Zeit bei der Messung wegfaellt. Anders kann
> der Wait gar nicht zustande gekommen sein, der bei RFW kleiner ist und
> dadurch die Gesamtspanne schmaelert.

Das trifft die Sache, mit einer Praezisierung: es faellt nicht *der Wait* weg,
sondern *die Phase davor*. Beim Sprechen also nicht "die Zeit ist nicht
gemessen" sagen, sondern "die Phase ist nicht aufgezeichnet". Der Wait selbst
steht in der Tabelle, und wer sie aufschlaegt, sieht ihn.

## Die genaue Fassung fuer das Kolloquium

> Der Wait ist gemessen, 4,4 gegen 6,8 Millisekunden. Er entsteht daraus, wo
> der Tap in die Bildperiode von 16,7 Millisekunden faellt. Wann genau das
> Testskript getippt hat und in welcher Phase das Display dabei war, zeichnet
> die Messung nicht auf. Ich kann also sagen, wie gross der Wait war und
> wodurch er entsteht, aber nicht, warum er in den beiden Laeufen
> unterschiedlich ausfiel. Fuer den Vergleich ist das ohne Belang, weil der
> Mechanismus in beiden Apps derselbe ist. Deshalb ist die Renderzeit die
> Vergleichsgroesse.

## Warum das die Antwort nicht beruehrt

- Die Renderdifferenz von 0,3 ms enthaelt den Wait nicht.
- Die Gesamtspannen bleiben, was sie sind, beide weit unter der 100-ms-Referenz,
  die langsamste bei 20,4 ms.
- Der Wait-Mechanismus ist in beiden Apps derselbe, er ist keine Eigenschaft
  einer der beiden Architekturen.


Verwandt: [[rq3-appbar-unterschied]], [[frage-wo-liegt-der-overhead]]
