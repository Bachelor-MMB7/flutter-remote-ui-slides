# Warum keine Webview

## Der technische Unterschied

| | Weg zum Pixel |
|---|---|
| Kompiliert (Baseline) | Dart-Code → Widget-Baum → Flutter-Pipeline → Impeller |
| RFW | Definition → *interpretieren* → Widget-Baum → **dieselbe** Pipeline |
| Webview | HTML/CSS → Browser-Engine → als Platform View in Flutters Szene |

Flutter bringt eine eigene Rendering-Engine mit und zeichnet alle Widgets selbst.
RFW nutzt genau diese — es ist ein Dart-Paket, kein Renderer. Eine Webview
braechte eine **zweite** Engine in eine App, die schon eine hat.

Zwischen Baseline und RFW liegt damit nur **ein zusaetzlicher Schritt vor dem
Widget-Baum**. Danach laeuft beides durch denselben Code. Die 0,3 ms Unterschied
in der Render-Zeit sind genau dieser Schritt.

## Wenn gefragt wird: "Und wenn die Webview schneller waere?"

> Schneller zu sein haette mir nichts gebracht — die Anforderung war, dass der
> Bediener keinen Unterschied merkt, nicht dass es schneller wird. Bei gleicher
> Pipeline laesst sich vorher abschaetzen, dass der Unterschied klein bleibt:
> derselbe Code, nur ein Schritt mehr davor. Bei einer zweiten Engine haette ich
> das nicht abschaetzen koennen.

## Gerätezugriff — Zusatzbemerkung, nicht Hauptargument

Nach Kapitel 3 der Thesis:

> Web-Code laeuft in einer Sandbox und erreicht die tieferen Geraete-APIs nicht
> direkt. Die Browser geben einzelne davon mit der Zeit frei, Geolocation zum
> Beispiel.

> Eine Webview laeuft im Browser, und der gibt nicht alle Geraetefunktionen fuer
> Web-Code frei — Web Bluetooth zum Beispiel gibt es bis heute nicht in allen
> Browsern.



