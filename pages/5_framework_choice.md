# Ways to do server-driven UI

<div class="ways">
  <div class="way">
    <div class="way-kind">Rendering library</div>
    <div class="way-desc">Definition text or binary, rendered into native widgets. No service behind it.</div>
    <div class="way-ex">RFW <Ref n="7" /></div>
  </div>
  <div class="way">
    <div class="way-kind">JSON payload + SDK</div>
    <div class="way-desc">Screens as JSON, resolved through a component registry. Hosted cloud optional.</div>
    <div class="way-ex">Stac <Ref n="8" /></div>
  </div>
  <div class="way">
    <div class="way-kind">Low-code platform</div>
    <div class="way-desc">Screens assembled in a visual studio, configuration fetched from the vendor cloud.</div>
    <div class="way-ex">Digia <Ref n="9" /></div>
  </div>
  <div class="way">
    <div class="way-kind">CMS-driven</div>
    <div class="way-desc">Routes, layouts and content blocks come from a headless CMS.</div>
    <div class="way-ex">Vyuh <Ref n="10" /></div>
  </div>
  <div class="way">
    <div class="way-kind">Composed on the server</div>
    <div class="way-desc">Description and data merged server-side, sent as one JSON response.</div>
    <div class="way-ex">FreeFlow <Ref n="11" /></div>
  </div>
  <div class="way">
    <div class="way-kind">Not SDUI: code push</div>
    <div class="way-desc">New Dart code over the air, interpreted at runtime. One patch per release.</div>
    <div class="way-ex">Shorebird <Ref n="12" /></div>
  </div>
</div>

<div class="choice">
  <div class="choice-head">Why RFW</div>
  <ol>
    <li>Maintained by the Flutter team</li>
    <li>Interprets definitions instead of downloading code — satisfies the store policy <Ref n="5" /></li>
    <li>Renders real Flutter widgets, not a web view — same drawing path as compiled code</li>
    <li>A package in the app, definitions on pyck's own server — no hosted third party</li>
  </ol>
</div>

<!--
1:30 — Nicht alle sechs vorstellen. Die Spalte einmal ueberfliegen, um zu zeigen:
es gibt einen Moeglichkeitsraum, ich habe nicht das erstbeste genommen.

Dann die vier Gruende, wortlaut aus Kap. 6-1. Der vierte ist fuer pyck der
entscheidende: das Framework laeuft auch self-hosted, da darf kein fremder
Cloud-Dienst dazwischen.

Shorebird ist bewusst dabei, weil es der naheliegende Einwand ist: "warum nicht
einfach Code Push?" Antwort steht in Kap. 4-3 — Code Push braucht pro Release
genau einen aktiven Patch, ich brauche aber verschiedene Screens fuer
verschiedene Kunden gleichzeitig.

WENN GEFRAGT WIRD, warum nicht Stac: Stac bringt Navigation, Dialoge und
API-Calls als eingebaute Aktionen mit, RFW nicht. Das ist ein echter Nachteil
meiner Wahl und steht so in Kap. 8-2 unter Trade-offs. Nicht wegdiskutieren.

TODO Pruefen, ob 1:30 reicht oder ob die Folie in die Backup-Sektion wandert.
-->
