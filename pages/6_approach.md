# Approach and setup

<div class="approach-stage">

<div class="approach-diagram">
  <div class="remote-system-boundary"><span>Generative Remote UI System</span></div>

  <div class="approach-card definition-server">
    <div class="approach-card-head">
      <carbon-server-proxy class="approach-icon" />
      <div>
        <div class="approach-kicker">Dart</div>
        <div class="approach-title">Server</div>
      </div>
    </div>
    <div class="app-section-label server-section-label">Definitions</div>
    <div class="tenant-definitions">
      <div class="tenant-definition tenant-a">
        <span class="tenant-label">Customer A</span>
        <span class="definition-lines"><i></i><i></i><i></i></span>
      </div>
      <div class="tenant-definition tenant-b">
        <span class="tenant-label">Customer B</span>
        <span class="definition-lines"><i></i><i></i><i></i></span>
      </div>
    </div>
  </div>

  <div class="definition-transfer">
    <div class="transfer-route request-route">
      <span class="route-label">request</span>
      <carbon-arrow-left class="route-arrow" />
    </div>
    <div class="transfer-route definition-route">
      <span class="route-label">definition</span>
      <carbon-arrow-right class="route-arrow" />
    </div>
  </div>

  <div class="approach-card app-runtime">
    <div class="approach-card-head">
      <carbon-mobile class="approach-icon" />
      <div>
        <div class="approach-kicker">Flutter</div>
        <div class="approach-title">Mobile app</div>
      </div>
    </div>
    <div class="app-runtime-body">
      <div class="catalog-group">
        <div class="app-section-label">Available widgets</div>
        <div class="widget-catalog">
          <span v-for="n in 11" :key="n" class="widget-tile"></span>
        </div>
        <div class="catalog-label">11 registered widgets</div>
      </div>
      <div class="compose-step">
        <span class="compose-label">rendered<br />at runtime</span>
        <carbon-arrow-right class="compose-arrow" />
      </div>
      <div class="screens-group">
        <div class="app-section-label">Rendered screens</div>
        <div class="rendered-variants">
          <div class="variant-item">
            <div class="approach-phone tenant-a-phone">
              <span class="screen-title"></span><span class="screen-field"></span><span class="screen-field"></span><span class="screen-action"></span>
            </div>
            <span>Customer A</span>
          </div>
          <div class="variant-item">
            <div class="approach-phone tenant-b-phone">
              <span class="screen-title"></span><span class="screen-field"></span><span class="screen-field short accent"></span><span class="screen-field"></span><span class="screen-action"></span>
            </div>
            <span>Customer B</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="definition-dropdown" v-click="[1, 2]">
  <div class="dropdown-connector"></div>
  <div class="snippet-file"><carbon-document class="snippet-file-icon" /> goods-receipt.rfwtxt</div>
  <pre><code>QuantityStepper(
  label: "Received quantity",
  value: data.workflow.quantity,
  onIncrement: event "incrementQuantity" { },
  onDecrement: event "decrementQuantity" { },
)
<span class="snippet-more">… additional widgets</span>
</code></pre>
</div>

<div class="data-dropdown" v-click="[1, 2]">
  <div class="dropdown-connector"></div>
  <div class="snippet-file"><carbon-mobile class="snippet-file-icon" /> in the app</div>
  <pre><code>data.workflow
  quantity: <span class="data-val">"3"</span>
  orderNumber: <span class="data-val">"A11643"</span>
  <span class="snippet-more">… more keys</span></code></pre>
</div>
</div>

<div class="approach-context" v-click="2">
  <div class="context-block method-context">
    <div class="context-key">Method</div>
    <div class="context-title">Design Science Research</div>
    <div class="context-flow">
      <span>Build</span><carbon-arrow-right class="context-flow-arrow" />
      <span>Demonstrate</span><carbon-arrow-right class="context-flow-arrow" />
      <span>Evaluate</span>
    </div>
  </div>
  <div class="context-block generative-context">
    <div class="context-key">Generative</div>
    <div class="context-title">Definitions created at development time</div>
    <div class="context-detail">No generation at runtime</div>
  </div>
</div>

<!--
> „Das Remote-UI-System besteht aus einem Dart-Server und einer mobilen Flutter-App.
>
> Auf dem Server liegt für jeden Kunden eine Definition. Sie beschreibt, wie aus den vorhandenen Widgets der App ein kundenspezifischer Screen zusammengesetzt wird.
>
> Die App fragt abhängig vom Kunden die passende Definition an, und der Server liefert sie aus.
>
> Hier wird der bereits in der App vorhandene `QuantityStepper` verwendet. Die Definition legt seine Beschriftung fest, bestimmt, welchen in der App gespeicherten Wert er anzeigt, und welche Ereignisse beim Erhöhen oder Verringern ausgelöst werden.
>
> Die Definition bestimmt also die kundenspezifische Auswahl, Konfiguration und Anordnung. Die Widgets selbst bringt die App mit – ihr Aussehen und ihre Funktionalität sind einkompiliert. Definition und Daten kommen erst zur Laufzeit auf dem Gerät zusammen.
>
> So rendert dieselbe App zur Laufzeit für jeden Kunden eine eigene Screenvariante.
>
> Damit ist die grundsätzliche Architektur klar. Für die technische Umsetzung brauche ich nun ein Framework, das solche Definitionen interpretieren und als native Flutter-Widgets rendern kann.“

##############
Die Definitions sind nur Beschreibungen das ist kein code der funktional ist und nachgeladen wird in die app

Definition und Daten kommen erst zur Laufzeit auf dem Gerät zusammen

Links steht, welcher Wert angezeigt wird. Rechts steht, wo dieser Wert liegt, im Gerät,
###############

ZU METHOD:

> „Methodisch folgt die Arbeit Design Science Research. Der Beitrag ist ein gebautes Artefakt und genau dafür ist dieses
> Paradigma da.
>
> Dabei geht es nicht darum, ein bisher ungelöstes Problem zu lösen, sondern eine
> bestehende Lösung effizienter zu machen. Wie bekomme ich also einen
> geänderten Workflow-Screen zum Lagermitarbeiter und die bestehende Lösung
> dafür ist der Release-Pfad über den App Store und genau den soll dieses System
> effizienter machen.






FRAGEN DEFENSE:

WENN GEFRAGT WIRD "Sie wenden RFW doch nur an, was ist Ihr Beitrag?" — Hevner
laesst ausdruecklich gelten, bestehendes Wissen auf neue Weise anzuwenden
(Richtlinie 4, Kap. 2-2). Vier konkrete Ergaenzungen, die RFW allein nicht
liefert:
  1. warehouse-spezifische Komponenten statt generischer Widgets
  2. Kompositionsregeln, die ihre Kombination einschraenken
  3. Multi-Tenant-Auslieferung aus einem gemeinsamen Backend
  4. geraeteseitiges Caching der Definitionen fuer unterbrochene Verbindung
Formal ist der Beitrag eine "novel instantiation" — nicht mehr behaupten.

WENN GEFRAGT WIRD "Ist das produktionsreif?" — Nein, Forschungsprototyp. Hevner
schreibt, Artefakte seien hier typischerweise Innovationen und keine ausgereiften
Systeme im Praxiseinsatz (Kap. 2-2, Richtlinie 1).
-->
