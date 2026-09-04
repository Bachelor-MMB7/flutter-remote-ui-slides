# RQ3 — Wait und Render

## Ablauf einer Messung

```
Tap ──── Wait ────► Vsync ──── Render ────► Frame fertig
└──────────── gemessene Spanne ────────────┘
```

Der Tap startet die Messung. Der Wait ist die Zeit bis zum nächsten
Display-Takt. Erst dann läuft der Render. Mit dem geflushten Frame endet die
Messung. Danach kommt irgendwann der nächste Tap.

## Zahlen (Median, 1002 Taps je Implementierung)

| | gesamt | Wait | Render |
|---|---|---|---|
| RFW | 9,8 ms | 4,4 ms | 5,3 ms |
| Baseline | 12,1 ms | 6,8 ms | 5,0 ms |

Die 9,8 gegen 12,1 ms sind kein Vorsprung der RFW-Variante — der Unterschied
steckt im Wait. Im Render ist RFW die langsamere von beiden.

## Was ich nicht sagen kann

Warum der Wait bei RFW kürzer ausfällt als bei der Baseline. Wann ein Tap im
Display-Zyklus landet, bestimmt das Testsetup: Die Taps kommen aus einem
Skript, das direkt nach dem fertigen Frame erneut tippt.

So steht es auch in der Thesis, Kapitel 8: *"Why they differ was not measured."*

## Warum das die Antwort nicht berührt

Den Grund zu kennen würde keine der beiden Aussagen ändern:

- Die gemessenen Spannen bleiben, was sie sind — beide weit unter der
  100-ms-Referenz.
- Die Render-Differenz von 0,3 ms enthält den Wait nicht.

## Wenn gefragt wird

> Warum der Wait unterschiedlich ausfällt, habe ich nicht gemessen. An der
> Antwort ändert das nichts: Für den Vergleich zähle ich die Render-Zeiten,
> und die Gesamtspanne liegt bei beiden weit unter der Referenz.

Nicht von selbst ansprechen. Auf der Folie steht der Render-Vergleich, das ist
die saubere Aussage.
