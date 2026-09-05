# How it was evaluated

<div class="setup-grid">
  <div class="sg-col">
    <div class="sg-rq">RQ1</div>
    <div class="sg-method">Functional testing</div>
    <div class="sg-detail">Requirement traceability matrix, 27 cases in five groups, three of them negative</div>
    <div class="sg-anchor">Every case has to pass</div>
  </div>
  <div class="sg-col">
    <div class="sg-rq">RQ2</div>
    <div class="sg-method">Informed argument + simulation</div>
    <div class="sg-detail">24-hour reference bounded from published store sources · 30 deploys, 30 deliveries, reported as medians</div>
    <div class="sg-anchor">App store release path</div>
  </div>
  <div class="sg-col">
    <div class="sg-rq">RQ3</div>
    <div class="sg-method">Controlled experiment</div>
    <div class="sg-detail">1002 measured taps per implementation, A-B-B-A counterbalanced, first pass dropped as warm-up</div>
    <div class="sg-anchor">Statically compiled Flutter baseline</div>
  </div>
</div>

<div class="setup-bar">
  <div class="sb-item"><span class="sb-key">Device</span> iPhone 15 Pro, iOS 26.1, profile mode, display locked to 60 Hz</div>
  <div class="sb-item"><span class="sb-key">Network</span> device on wireless, server on fly.io in Frankfurt, over the wide area network</div>
  <div class="sb-item"><span class="sb-key">Data</span> two invented goods receipt variants, artificial data</div>
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
