# How it was evaluated

<div class="rq-list setup-list">
  <div class="rq rq-1">
    <div class="rq-key">RQ1</div>
    <div class="rq-body">
      <div class="rq-q">Functional testing</div>
      <div class="rq-scope">Requirement traceability matrix, run against the app on the device</div>
    </div>
  </div>
  <div class="rq rq-2" v-click="1">
    <div class="rq-key">RQ2</div>
    <div class="rq-body">
      <div class="rq-q">Informed argument + simulation</div>
      <div class="rq-scope">24-hour reference from published store sources · 30 deploys, 30 deliveries, reported as medians</div>
    </div>
  </div>
  <div class="rq rq-3" v-click="2">
    <div class="rq-key">RQ3</div>
    <div class="rq-body">
      <div class="rq-q">Controlled experiment</div>
      <div class="rq-scope">1002 automated taps per app, remote UI against a compiled baseline · A-B-B-A counterbalanced</div>
    </div>
  </div>
</div>

<div class="setup-bar" v-click="3">
  <div class="sb-item"><span class="sb-key"><carbon-mobile class="sb-icon" />Device</span> iPhone 15 Pro, iOS 26.1, profile mode, display locked to 60 Hz</div>
  <div class="sb-item"><span class="sb-key"><carbon-wifi class="sb-icon" />Network</span> device on Wi-Fi, server on fly.io in Frankfurt, reached over the internet</div>
  <div class="sb-item"><span class="sb-key"><carbon-data-base class="sb-icon" />Data</span> two invented goods receipt variants, artificial data</div>
</div>

<!--
1:00 — Nicht vorlesen. Die drei Methoden benennen, dann auf die Leiste unten
zeigen: alles lief auf einem Aufbau.

Alle drei Methoden stammen aus Hevners Katalog (Kap. 2-2 und 2-4). Das ist der
Punkt fuer Gerlicher: die Methodenwahl ist begruendet, nicht beliebig.

Profile mode betonen, falls gefragt: im Debug-Modus kompiliert die App waehrend
sie laeuft und waere langsamer — das haette die Messung verzerrt (Kap. 7-3).

A-B-B-A erklaeren, falls gefragt: beide Apps laufen auf demselben Geraet, also
nacheinander. Ein Geraet lernt nicht, kann aber waermer werden. Die Reihenfolge
verteilt so eine Drift auf beide. Erster und letzter Block, beide RFW, haben
denselben Median von 9,8 ms — also keine Drift aufgetreten.

TODO Pruefen ob die Folie im Zeitbudget bleibt oder in die Backup-Sektion muss.
-->
