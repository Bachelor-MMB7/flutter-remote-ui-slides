# The release path

<div class="lead">
  <p>Mobile applications support warehouse operators <Ref n="1" /></p>
  <p>Every customer needs its own workflow variant</p>
  <p>Every workflow-screen change requires a new build</p>
</div>

<div class="path-stage">

<div class="path-panel change-panel" v-click="[1, 2]">
  <p class="path-caption">From a workflow-screen change to a new app build</p>

  <div class="change-rail">
    <div class="change-station">
      <div class="dot"></div>
      <div class="change-visual">
        <div class="phone"><span class="ph-title"></span><span class="ph-field"></span><span class="ph-field"></span><span class="ph-field"></span></div>
      </div>
      <div class="label">Current screen</div>
    </div>
    <div class="link"></div>
    <div class="change-station">
      <div class="dot"></div>
      <div class="change-visual code-mark">&lt;/&gt;</div>
      <div class="label">Change app code</div>
    </div>
    <div class="link"></div>
    <div class="change-station">
      <div class="dot"></div>
      <div class="change-visual">
        <div class="phone"><span class="ph-title"></span><span class="ph-field"></span><span class="ph-field"></span><span class="ph-field"></span><span class="ph-field ph-new"></span></div>
      </div>
      <div class="label">Changed screen</div>
    </div>
    <div class="link"></div>
    <div class="change-station build-station">
      <div class="dot"></div>
      <div class="change-visual build-mark"><carbon-cube class="process-icon" /></div>
      <div class="label">New app build</div>
    </div>
  </div>
</div>

<div class="path-panel store-panel" v-click="2">
  <p class="path-caption">Multi-step app store release process for iOS and Android <Ref n="2" /><Ref n="3" /></p>

  <div class="release-path">
    <div class="station origin">
      <div class="dot"></div>
      <div class="process-visual build-mark"><carbon-cube class="process-icon" /></div>
      <div class="label">New app<br />build</div>
    </div>
    <div class="link"></div>
    <div class="station">
      <div class="dot"></div>
      <div class="process-visual"><carbon-cloud-upload class="process-icon" /></div>
      <div class="label">Upload to<br />store</div>
    </div>
    <div class="link"></div>
    <div class="station">
      <div class="dot"></div>
      <div class="process-visual"><carbon-task-approved class="process-icon" /></div>
      <div class="label">Store<br />review</div>
      <div class="note">hours to 7 days <Ref n="4" /></div>
    </div>
    <div class="link"></div>
    <div class="station">
      <div class="dot"></div>
      <div class="process-visual"><carbon-rocket class="process-icon" /></div>
      <div class="label">Release</div>
      <div class="note">+24 h to all storefronts <Ref n="5" /></div>
    </div>
    <div class="link"></div>
    <div class="station end">
      <div class="dot"></div>
      <div class="process-visual"><carbon-mobile-check class="process-icon" /></div>
      <div class="label">On the<br />warehouse floor</div>
      <div class="note">only half enabled automatic updates<br />in a 2016 user survey <Ref n="6" /></div>
    </div>
  </div>
</div>

</div>

<div class="cadence">
  <div class="item" v-click="3">
    <div class="value web">multiple times per day</div>
    <div class="tag">Web applications</div>
  </div>
  <div class="item" v-click="3">
    <div class="value">once every two weeks</div>
    <div class="tag">Mobile apps at Facebook and Netflix <Ref n="6" /></div>
  </div>
</div>

<!--
2:00 — Die drei Zeilen sind Stichworte, den Rest erzaehle ich. Einstieg:

"pyck entwickelt eine mobile App, die von mehreren Kunden genutzt werden soll.
Die Lagerprozesse dieser Kunden unterscheiden sich — zum Beispiel ist der
Wareneingang nicht ueberall gleich aufgebaut. In einer klassischen Flutter-App
ist die Struktur dieser Screens fest in die App eingebaut. Möchte man einen kundenspezifischen Screen ändern, muss man die App anpassen und einen neuen Build veröffentlichen über den App Store."

app build ist fertiges artefakt

Weil mein Beitrag ein gebautes und evaluiertes Artefakt ist, kein Erklärungsmodell. Genau dafür ist dieses Paradigma da.
-->
