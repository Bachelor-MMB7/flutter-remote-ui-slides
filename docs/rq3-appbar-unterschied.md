# Frage: Waren die beiden Apps für RQ3 wirklich gleich?

> Ein Unterschied besteht: die RFW-App hat den Tenant-Umschalter in der AppBar,
> die Baseline einen festen Titel. Er liegt außerhalb der aus der Definition
> gerenderten Fläche, aber innerhalb der Messspanne. Er belastet die RFW-Seite,
> der berichtete Unterschied von 0,3 ms ist also eher eine Obergrenze für den
> RFW-Overhead als eine Untertreibung.

## Der Befund im Code

**rfw-client**, `workflow_screen.dart`:

```dart
appBar: AppBar(title: _tenantDropDown()),
```

**baseline-client**, `workflow_screen.dart`:

```dart
appBar: AppBar(title: const Text('Tenant B')),
```

Das `const Text` kann Flutter beim Neubau überspringen. `_tenantDropDown()`
erzeugt bei jedem `build()` ein neues `DropdownButton` und kann es nicht.

## Warum das die Messung berührt

Die Spanne läuft vom Tap bis zur geflushten Rendering-Pipeline und umfasst
Build, Layout und Paint des ganzen Bildschirms, also auch die AppBar. Der
Mehraufwand für das Dropdown fällt damit in die RFW-Seite der Messung.

## Warum es die Aussage nicht kippt

Die Richtung des Fehlers ist bekannt und geht zu Lasten von RFW. Ein
verzerrender Effekt, der die eigene These schwächt statt sie zu stützen, ist
der unproblematische Fall.

**Nicht behaupten:** eine Zahl dafür. Der Anteil wurde nicht isoliert gemessen.

**Sagen:** die Richtung ist bekannt, die Größe nicht, und beides zusammen macht
die 0,3 ms zu einer Obergrenze.

## Wo die Stelle in der Thesis steht

Kapitel 7-4: *"Both apps show the same four-step workflow with the same widgets,
which leaves the delivery of the screen as the only difference between them."*

Der Satz meint die Arbeitsfläche des Workflows und trifft dort zu. Die AppBar
ist davon nicht erfasst. Wer den Code gelesen hat, kann darauf zeigen, deshalb
die Antwort oben parat halten statt sie zu improvisieren.

Verwandt: [[rq3-wait-und-render]]
