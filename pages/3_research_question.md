# Research question

> How can a generative remote UI system reduce the deployment time for warehouse
> workflow screens in Flutter-based warehouse management applications, while
> preserving interaction performance comparable to a statically compiled Flutter
> implementation and ensuring their availability under intermittent warehouse
> connectivity?

<div class="rq-list">
  <div class="rq">
    <div class="rq-key">RQ1</div>
    <div class="rq-text">Rendering, composition, availability without a server</div>
    <div class="rq-so">SO1 — met when both variants render from server definitions with no application code change and a screen still renders when the server is unreachable</div>
  </div>
  <div class="rq">
    <div class="rq-key">RQ2</div>
    <div class="rq-text">Deployment time against the app store release path</div>
    <div class="rq-so">SO2 — met when deployment takes at most a tenth of the reference value</div>
  </div>
  <div class="rq">
    <div class="rq-key">RQ3</div>
    <div class="rq-text">Response times against a statically compiled implementation</div>
    <div class="rq-so">SO3 — met when median and 95th percentile stay below the 100 ms reference in both implementations, and the difference in median render time stays below one frame period</div>
  </div>
</div>

<!--
0:45 — Die Hauptfrage nicht vorlesen, nur die drei Teilfragen benennen.
Diese Folie ist der Fahrplan: die drei RQs sind die naechsten drei Befundfolien.

Die Kriterien stehen hier qualitativ, die konkreten Zahlen erst bei den
Ergebnissen auf den Folien 5 bis 7. Grund: eine Schwelle ohne ihr Ergebnis
merkt sich niemand, und der Raum weiss hier noch nicht, warum 2,4 Stunden oder
16,7 ms zaehlen.

Beim Sprechen einmal betonen, dass diese Kriterien VORHER festgelegt wurden —
das nimmt den Verdacht vorweg, die Latte sei nachtraeglich unter das Ergebnis
gelegt worden.

TODO Die drei RQs visuell als Fahrplan setzen, nicht als Aufzaehlung.
TODO Entscheiden: Hauptfrage als Vollzitat oder gekuerzt.
-->
