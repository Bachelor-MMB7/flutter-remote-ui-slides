# Breaking down the research question

<div class="rq-list">
  <div class="rq rq-1">
    <div class="rq-key">RQ1</div>
    <div class="rq-body">
      <div class="rq-q">How can it be built?</div>
      <div class="rq-scope">Render definitions, compose customer-specific variants and <span class="scope-cost">stay available when the server is unreachable</span></div>
    </div>
  </div>
  <div class="rq rq-2" v-click="1">
    <div class="rq-key">RQ2</div>
    <div class="rq-body">
      <div class="rq-q">How much deployment time does it save?</div>
      <div class="rq-scope">Deployment time against the app store release path</div>
    </div>
  </div>
  <div class="rq rq-3" v-click="2">
    <div class="rq-key">RQ3</div>
    <div class="rq-body">
      <div class="rq-q">Does it preserve interaction speed?</div>
      <div class="rq-scope">Response times against a statically compiled Flutter implementation</div>
    </div>
  </div>
</div>

<p class="rq-note" v-click="3">Each question has a matching objective with a success criterion, fixed in advance. The criteria appear with their results.</p>

<!--
MERKSATZ: Demo fuehrt vor. RQ1 zeigt, wie es gebaut ist, und belegt, dass es
die vorher festgelegten Anforderungen erfuellt.

0:40 — Der Fahrplan. Diese drei Fragen sind die naechsten drei Befundfolien,
in dieser Reihenfolge.

Merkkette fuer mich: Wie gebaut? → Was spart es? → Was bleibt erhalten?
Nur EINE Fassung laut sagen, nicht beide.

Die Klammer muss ich nicht mehr erklaeren: Der Offline-Teil in RQ1 ist cyan
gesetzt wie auf der Hauptfrage. Der Raum sieht, dass RQ1 den Mechanismus und
die Bedingung umfasst. Hoechstens ein Halbsatz dazu.

Betonen, dass die Kriterien VORHER festgelegt wurden. Nimmt den Verdacht
vorweg, die Latte sei nachtraeglich unter das Ergebnis gelegt worden. Die
Kriterien selbst stehen auf den Befundfolien, direkt neben dem Ergebnis.

RQ1 steht beim Betreten schon da, RQ2 und RQ3 kommen je auf Klick. Kein
Zuklappen — am Ende stehen alle drei, damit der Raum die Zerlegung sieht.
-->
