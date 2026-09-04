# RQ1 — Rendering, composition, offline

<p class="criterion"><span class="so">SO1</span> Two variants composed and rendered from server definitions, no application code change · a screen still renders when the server is unreachable</p>

**The answer is the system.** One build, eleven registered warehouse widgets, one
definition per tenant — the two tenants differ only in their definitions.

<div class="rtm">
  <div class="rtm-item"><div class="rtm-n">9</div><div class="rtm-g">Rendering</div></div>
  <div class="rtm-item"><div class="rtm-n">5</div><div class="rtm-g">Composition</div></div>
  <div class="rtm-item"><div class="rtm-n">5</div><div class="rtm-g">Data binding</div></div>
  <div class="rtm-item"><div class="rtm-n">5</div><div class="rtm-g">Validation</div></div>
  <div class="rtm-item"><div class="rtm-n">3</div><div class="rtm-g">Offline fallback</div></div>
</div>

<p class="rtm-total"><strong>27 of 27 cases pass.</strong> Three are negative — a client that simply always allowed everything and always showed every widget could not pass them.</p>

<!--
MERKSATZ: Demo fuehrt vor. RQ1 zeigt, wie es gebaut ist, und belegt, dass es
die vorher festgelegten Anforderungen erfuellt.

1:30 — Das ist Peffers Aktivitaet 5, die Evaluation. Die Demonstration war die
Folie davor. Beim Uebergang einen Satz dazu sagen, sonst verschwimmt es.

Reihenfolge beim Sprechen: erst die Antwort auf RQ1 (das System), dann der
Beleg (die Matrix). RQ1 ist eine "How can"-Frage, die Antwort ist das Artefakt.
Die 27 Faelle sind nicht die Antwort, sie zeigen, dass die Antwort traegt.

Die fuenf Gruppen nicht vorlesen. Der Punkt ist, dass Data binding und
Validation zusammen 10 Faelle sind: es ist kein vom Server geliefertes Bild,
sondern ein Formular, das auf Eingaben reagiert und Regeln durchsetzt.

Die drei negativen Faelle sind die Antwort auf "Sie haben nur den Happy Path
gezeigt". Continue bleibt gesperrt ohne Bestellnummer und ohne Lagerplatz, die
Bildvorschau bleibt leer ohne Foto. Lieber selbst ansprechen als abwarten.

Wichtig sauber sagen: offline gilt fuer die Screens, nicht fuer die Daten.
Zwei der drei Offline-Faelle: gecachte Definition nach Serverausfall, gebuendelte
Default-Definition beim ersten Start ohne Cache.

RQ1 ist die Voraussetzung fuer RQ2 und RQ3 — ohne Rendering gaebe es nichts,
wovon man Deployment-Zeit oder Tap-Latenz messen koennte.

Die vollstaendige Matrix liegt in Anhang B, falls jemand nachfragt.
-->
