# Choosing the framework

<div class="pick">
  <div class="pick-step">
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
        <div class="chip-group-label">Screens from a content system</div>
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
    <div class="pick-aside">
      <span class="chip chip-aside">Shorebird</span>
      <span class="aside-text">Code push: every customer gets the same code, so no per-customer variants <Ref n="7" /></span>
    </div>
  </div>
  <div class="pick-arrow" v-click="1">↓</div>
  <div class="pick-step pick-needs" v-click="1">
    <div class="pick-label">What pyck needs</div>
    <div class="reqs">
      <div class="req"><carbon-checkmark class="req-check" /><span>Definitions instead of downloaded code <Ref n="5" /></span></div>
      <div class="req"><carbon-checkmark class="req-check" /><span>Uses the same rendering pipeline as compiled Flutter code</span></div>
      <div class="req"><carbon-checkmark class="req-check" /><span>No required third-party platform (Digia)</span></div>
      <div class="req"><carbon-checkmark class="req-check" /><span>Dependable, Flutter-maintained foundation</span></div>
    </div>
  </div>
  <div class="pick-arrow" v-click="2">↓</div>
  <div class="pick-result" v-click="2">
    <div class="pick-name">Remote Flutter Widgets</div>
  </div>
</div>

<!--
FreeFlow: definitionen und daten kommen hier und nicht so wie bei meinem system auf dem server zusammen.

bei shorebid können wir im nachhinein nach dem app store path code pushen in die mobile app um diesen deployment prozess zu reduzieren.

Die Apple zieht bei nachgeladenem Code eine Grenze. Ich suche deshalb einen Weg, bei dem gar kein Code aufs Gerät geht, sondern nur eine Beschreibung.
-->
