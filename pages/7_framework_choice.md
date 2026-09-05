# Choosing the framework

<div class="pick">
  <div class="pick-step">
    <div class="pick-label">Options considered</div>
    <div class="chips" :class="{ picked: $clicks >= 2 }">
      <div class="chip-group">
        <div class="chip-group-label">Package, own server</div>
        <div class="chip-row">
          <span class="chip chip-rfw">RFW</span>
          <span class="chip">Swap</span>
          <span class="chip">Stac</span>
        </div>
      </div>
      <div class="chip-group">
        <div class="chip-group-label">External platform</div>
        <div class="chip-row">
          <span class="chip">Digia</span>
          <span class="chip">Vyuh</span>
        </div>
      </div>
      <div class="chip-group">
        <div class="chip-group-label">Composed on the server</div>
        <div class="chip-row"><span class="chip">FreeFlow</span></div>
      </div>
    </div>
    <div class="pick-aside">Code push (Shorebird) — every customer gets the same code, so no per-customer variants <Ref n="12" /></div>
  </div>
  <div class="pick-arrow" v-click="1">↓</div>
  <div class="pick-step" v-click="1">
    <div class="pick-label">What pyck needs</div>
    <div class="reqs">
      <div class="req">Definitions instead of downloaded code <Ref n="5" /></div>
      <div class="req">Renders into the same Flutter pipeline as compiled code</div>
      <div class="req">No required third-party platform</div>
      <div class="req">Dependable, Flutter-maintained foundation</div>
    </div>
  </div>
  <div class="pick-arrow" v-click="2">↓</div>
  <div class="pick-result" v-click="2">
    <div class="pick-name">Remote Flutter Widgets</div>
  </div>
</div>

<!--
Zu "External platform": Screens werden dort in einem fremden System
zusammengestellt. Der Unterschied zwischen den beiden, falls gefragt: Digia ist
deren eigene Cloud im Abo, ohne Self-Hosting. Vyuh nutzt ein CMS deiner Wahl,
und die Anbindung ist optional.

Zu "Composed on the server": "FreeFlow ist das einzige, das Beschreibung und
Daten auf dem Server zusammenfuehrt — bei allen anderen passiert das auf dem
Geraet."
-->
