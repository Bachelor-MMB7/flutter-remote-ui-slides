# RQ3: No perceptible cost

<p class="criterion"><span class="so">SO3</span> Median and 95th percentile below 100 ms in both implementations · difference in median render time below one frame period</p>

<div class="perf">
  <div class="perf-row">
    <div class="perf-label"><span class="perf-kicker">Flutter + RFW</span>Remote UI</div>
    <div class="perf-track">
      <div class="perf-bar perf-rfw" style="width: 31.7%"></div>
      <span class="perf-value">5.3 ms</span>
    </div>
  </div>
  <div class="perf-row">
    <div class="perf-label"><span class="perf-kicker">Flutter</span>Compiled baseline</div>
    <div class="perf-track">
      <div class="perf-bar perf-base" style="width: 29.9%"></div>
      <span class="perf-value">5.0 ms</span>
    </div>
  </div>
  <div class="perf-row perf-scale">
    <div class="perf-label"></div>
    <div class="perf-dim">
      <span class="perf-dim-line"></span>
      <span class="perf-tick">16.7 ms, one frame at 60 Hz</span>
      <span class="perf-dim-line"></span>
    </div>
  </div>
</div>

<p class="perf-span">Median render time, measured from the tap arriving in the app to the flushed frame</p>

<p class="perf-out" v-click="1">Median and 95th percentile stay far below 100 ms in both implementations. The slowest single tap was 20.4 ms.</p>

<p class="perf-src" v-click="1">100 ms is Nielsen's limit for a system that feels instantaneous, used here as a reference <Ref n="8" /></p>

<!--
Geflusht heißt: aus Sicht der App ist das Rendern fertig und die Szene ist an die Flutter Engine übergeben. Die rastert sie danach und macht sie für den Bildschirm bereit.


Die 100 Millisekunden sind für uns ein Richtwert, unter dem wir bleiben wollen. In der gemessenen Spanne haben wir das bei Weitem geschafft, der langsamste einzelne Tap lag bei 20,4 Millisekunden.





Frage Flushed und bei Schwelle wegen rastern: 
Bei der Schwelle („warum nicht für die 100 ms?"): weil du bei einem Fünftel liegst und die fehlenden Teile das Vierfache deiner Spanne beitragen müssten.

-->
