# What a definition looks like

<div class="def-split">

<div class="def-code">

<div class="def-file">tenant-a/workflows/goods-receipt.rfwtxt</div>

```txt
import core.widgets;
import local.widgets;

widget Step0 = ActivityContainer(
  child: ListView(
    children: [
      ActivityHeader(step: 1, title: "Goods Receipt — Acme Corp"),
      TextInput(
        label: "Order number",
        onChanged: event "setOrderNumber" { },
      ),
      QuantityStepper(
        label: "Received quantity",
        value: data.workflow.quantity,
        onIncrement: event "incrementQuantity" { },
      ),
      ConfirmButton(
        text: "Continue",
        require: true,
        requiredValue: data.workflow.orderNumber,
        onPressed: event "next" { },
      ),
    ]
  )
);
```

</div>


</div>

<!--
1:00 — Nagel will das sehen, also einmal ruhig durchgehen.

Echte Datei aus dem Repo, tenant-a/workflows/goods-receipt.rfwtxt, Schritt 1.
Fuer die Folie gekuerzt: SizedBox-Abstaende, ProductDetail, PhotoButton und
ImagePreview sind raus. Beim Zeigen dazusagen, dass es ein Ausschnitt ist.

Bewusst ohne Syntaxfarben. Erstens ist es .rfwtxt und kein Dart, zweitens
haette der Dracula-Codeblock vier Farben eingebracht, die im Deck sonst nicht
vorkommen. Keine Anmerkungen auf der Folie — nur anhand des Codes erklaeren,
mit dem Cursor auf drei Stellen deuten: local.widgets in Zeile 2, die
Datenbindung bei value, das Event bei onIncrement.

Der Vergleich zu Tenant B ist die Pointe, falls Zeit bleibt: gleiche Widgets,
andere Zusammensetzung. Acme hat 3 Screens mit Zustandsfoto in Schritt 1,
SDUI Industries hat 4 Screens und prueft separat. Dieselbe App, andere Datei.

Der Punkt bei onIncrement ist wichtig fuer spaeter: RFW schickt nur ein Event,
was danach passiert steht im App-Code. Das ist der Trade-off aus Kap. 8-2, den
Stac anders loest. Wenn ich es hier selbst sage, ist die Frage vorweggenommen.

TODO Pruefen ob der Ausschnitt auf dem Beamer lesbar ist — notfalls weniger
Zeilen statt kleinerer Schrift.
-->
