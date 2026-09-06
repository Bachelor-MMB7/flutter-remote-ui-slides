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
RQ1 wurde funktional geprüft, mit einer Matrix aus 27 Testfällen am laufenden Client auf dem Gerät

RQ2 hat zwei Teile. Die 24 Stunden für den Store-Weg kommen aus einem informed argument. Mein eigener Deployment Weg ist gemessen, 30 Deploys auf den Server und 30 Auslieferungen aufs Gerät.
also dadurch dass sie keinen festen wert nennen und das varriert habe ich einen festgelegt 

Bei RQ3 ist es ein controlled experiment wo ich pro app 1002 taps mit einem test script hab durchlaufen lassen gegen eine baseline app und dabei counterbalancing angewendet weil das Gerät dabei wärmer werden kann, deshalb A-B-B-A, damit das nicht auf eine der beiden fällt.
-->
