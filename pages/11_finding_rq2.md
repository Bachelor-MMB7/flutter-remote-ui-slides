# RQ2: 24 hours becomes under half a minute

<p class="criterion"><span class="so">SO2</span> Deployment time at most a tenth of the 24-hour reference value, so the bar is 2.4 hours</p>

<div class="deploy-path">
  <div class="dstation">
    <div class="dot"></div>
    <div class="dvisual"><carbon-cloud-upload class="process-icon" /></div>
    <div class="dlabel">Publish to server</div>
    <div class="dvalue">15.0 s</div>
    <div class="dnote">median of 30 deploys</div>
  </div>
  <div class="dlink"></div>
  <div class="dstation">
    <div class="dot"></div>
    <div class="dvisual"><carbon-mobile class="process-icon" /></div>
    <div class="dlabel">Deliver to device</div>
    <div class="dvalue">358.5 ms</div>
    <div class="dnote">median of 30 fetches, 347 ms of it network</div>
  </div>
</div>

<p class="deploy-out" v-click="1">Deployable during the shift in which the need for it comes up.</p>

<!--
2:00 — Das ist der zentrale Befund des Vortrags. Hier langsam sprechen.

Die 24 h sind ein definiertes Referenzszenario (Abschnitt 2-4), keine Messung.
Das offen sagen, bevor jemand fragt.

Annahme benennen: gemessen ab Start des Server-Deployments bis zum ersten
gerenderten Frame, nachdem der Client die geaenderte Definition angefordert hat.

DIE VOLLE TABELLE, falls nach Streuung gefragt wird (Tab. 7-3):

  Schritt    n    Median     Mittel     Min      Max
  Publish    30   15,0 s     17,7 s     13,4 s   74,2 s
  Delivery   30   358,5 ms   363,3 ms   273 ms   450 ms

ZUM AUSREISSER, proaktiv falls die Tabelle zur Sprache kommt:
Zwei Laeufe waren langsamer, der erste der Reihe mit 38,3 s und einer mit
74,2 s. Deshalb liegt das Mittel ueber dem Median. Die mittlere Haelfte der
Reihe umspannt nur 1,3 Sekunden.

ZUR AUSLIEFERUNG: 347 der 358,5 ms sind das Netz. Was das Geraet danach tut,
also Definition dekodieren, zwischenspeichern und rendern, sind rund 11 ms.
Ein erneuter Abruf in der schon laufenden App liegt bei etwa 77 ms. Berichtet
wird der langsamere Fall, der Kaltstart.

TODO Stichprobengroesse nennen — Begruendung in defense/warum-30-trials-so2.md
-->
