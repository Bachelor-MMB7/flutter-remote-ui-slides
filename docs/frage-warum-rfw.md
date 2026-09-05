# Frage: Warum nicht Stac / FreeFlow / eines der anderen?

> Weil RFW vom Flutter-Team selbst gepflegt wird und ohne fremde Plattform
> auskommt.

Wenn jemand nachbohrt, anhängen:

> Stac hätte vieles auch erfüllt.

Beides sind Gründe **für** RFW aus Kapitel 6-1, keine Ausschlusskriterien.
Nicht sagen: „FreeFlow ist nur ein Prototyp" oder „Swap ist experimentell" —
eine Reifeprüfung habe ich nicht durchgeführt.

## Von den vier Anforderungen trennen nur zwei

| | trennt? |
|---|---|
| Definitions instead of downloaded code | nein — alle erfüllen sie, auch Code Push |
| Renders into the same Flutter pipeline | nein — alle rendern in Widgets auf dem Gerät |
| **No required third-party platform** | **ja** |
| **Dependable, Flutter-maintained foundation** | **ja** |

Falls jemand auf eine der oberen beiden zeigt („Stac rendert doch auch in
Flutter-Widgets"):

> Ja, die anderen rendern auch in Flutter-Widgets. Das war eine Bedingung, die
> der Entwurf erfüllen musste — sie grenzt gegen Webview-Ansätze ab, nicht gegen
> die Kandidaten auf der Folie. Zwischen den sechs gaben die Pflege durch das
> Flutter-Team und der Verzicht auf eine fremde Plattform den Ausschlag.
