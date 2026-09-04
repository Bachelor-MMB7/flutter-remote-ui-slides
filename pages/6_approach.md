# Approach and setup

<div class="approach-stage">

<div class="approach-diagram">
  <div class="remote-system-boundary"><span>Generative Remote UI System</span></div>

  <div class="approach-card definition-server">
    <div class="approach-card-head">
      <carbon-server-proxy class="approach-icon" />
      <div>
        <div class="approach-kicker">Server</div>
        <div class="approach-title">Definitions</div>
      </div>
    </div>
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
        <div class="approach-kicker">On the smartphones</div>
        <div class="approach-title">One Flutter app</div>
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
  <pre><code>ConfirmButton(
  text: "Continue",
  requiredValue:
    data.workflow.orderNumber,
  onPressed: event "next" { },
)
<span class="snippet-more">… additional widgets</span>
</code></pre>
</div>

</div>

<div class="approach-context">
  <div><span class="context-key">Method</span> Design Science Research</div>
  <div><span class="context-key">Generative</span> Definitions authored from the widget catalog at development time — no generation at runtime</div>
</div>

<!--
1:30 — Die Grafik von links nach rechts erklaeren:

"Der Server hält fuer jeden Kunden — technisch: Tenant — eine eigene Definition. Die mobile App ist
aber fuer alle Kunden dieselbe und bringt elf fest implementierte Warehouse-
Widgets mit. Zur Laufzeit lädt sie die passende Definition und setzt aus diesen
Widgets die kundenspezifische Workflowvariante zusammen. Der Server liefert
dabei weder Dart-Code noch Workflowdaten oder Schrittlogik."

Klick 1: An Customer A die gekuerzte echte Definition aufklappen. ConfirmButton
benennen, dann auf Datenbindung und Event zeigen. Klick 2: zur Gesamtuebersicht
zurueckkehren, bevor die Folie gewechselt wird.

Methodisch folgt die Arbeit Design Science Research: Artefakt entwickeln,
demonstrieren und anhand der drei Forschungsziele evaluieren.

"Generative" wird im Sinne von Czarnecki verwendet: Definitionen werden zur
Entwicklungszeit aus dem Widget-Katalog erstellt — manuell oder mit einem
Sprachmodell. Zur Laufzeit findet keine Generierung statt.

Vorbereitete Antwort liegt in defense/generative-ohne-generator-2026-08-05.md
-->
