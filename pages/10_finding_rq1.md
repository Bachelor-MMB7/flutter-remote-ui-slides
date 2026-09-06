# RQ1 — One build, two customer workflows

<div class="criterion crit-two">
  <span class="so">SO1</span>
  <div class="crit-line">Two variants render and compose from server definitions, with no change to the app</div>
  <div class="crit-line">A screen still renders when the server cannot be reached</div>
</div>

<div class="rtm">
  <div class="rtm-item">
    <div class="rtm-n">9</div>
    <div class="rtm-g">Rendering</div>
    <div class="rtm-ex" :class="{ shown: $clicks >= 1 }"><div class="rtm-ex-in"><span class="rtm-id">RND-05</span>PhotoButton shows its camera icon and text</div></div>
  </div>
  <div class="rtm-item">
    <div class="rtm-n">5</div>
    <div class="rtm-g">Composition</div>
    <div class="rtm-ex" :class="{ shown: $clicks >= 1 }"><div class="rtm-ex-in"><span class="rtm-id">CMP-03</span>Tenant B gets an extra inspection step, no client change</div></div>
  </div>
  <div class="rtm-item">
    <div class="rtm-n">5</div>
    <div class="rtm-g">Data binding</div>
    <div class="rtm-ex" :class="{ shown: $clicks >= 1 }"><div class="rtm-ex-in"><span class="rtm-id">BND-05</span>The summary shows the entered number, quantity and location</div></div>
  </div>
  <div class="rtm-item">
    <div class="rtm-n">5</div>
    <div class="rtm-g">Validation</div>
    <div class="rtm-ex" :class="{ shown: $clicks >= 1 }"><div class="rtm-ex-in"><span class="rtm-id">VAL-01<span class="rtm-neg">negative case</span></span>Continue stays blocked while the order number is empty</div></div>
  </div>
  <div class="rtm-item">
    <div class="rtm-n">3</div>
    <div class="rtm-g">Offline fallback</div>
    <div class="rtm-ex" :class="{ shown: $clicks >= 1 }"><div class="rtm-ex-in"><span class="rtm-id">OFF-01</span>With no server, the cached definition renders</div></div>
  </div>
</div>

<p class="rtm-total"><strong>27 of 27 cases pass</strong> — three of them negative</p>

<!--
MERKSATZ: Demo fuehrt vor. RQ1 zeigt, wie es gebaut ist, und belegt, dass es
die vorher festgelegten Anforderungen erfuellt.

BEIM ERSTEN AUFTAUCHEN DER SO-ZEILE SAGEN (nur hier, nicht bei RQ2 und RQ3):

> Design Science verlangt, die Ergebnisse gegen die Ziele zu pruefen, die vor
> dem Bau des Systems festgelegt wurden. Oben steht das Ziel, SO1. Geprueft
> habe ich es mit einer Anforderungs-Nachverfolgungsmatrix: 27 Faelle in fuenf
> Gruppen, gegen die laufende App auf dem Geraet.

BEIM KLICK, wenn die Beispiele aufklappen:

> Vier davon haben Sie gerade im Video gesehen.

Fotoknopf, der zusaetzliche Pruefschritt bei Kunde B, der gesperrte Continue-
Knopf und die Screens ohne Netz. Beispiele nicht vorlesen, nur darauf zeigen.

ZUM MARKIERTEN FALL, beim Draufzeigen:

> Der hier ist einer der drei negativen Faelle. Er prueft nicht, dass etwas
> passiert, sondern dass etwas richtig verweigert wird.

DIE DREI NEGATIVEN FAELLE, falls jemand nach den anderen zwei fragt:

  VAL-01  Continue bleibt gesperrt, solange die Bestellnummer leer ist
  VAL-03  Continue bleibt gesperrt, solange kein Lagerplatz gewaehlt ist
  BND-03  die Bildvorschau bleibt leer, solange kein Foto aufgenommen wurde

ZUM PRINZIP DAHINTER, falls gefragt oder wenn Zeit ist:

> Drei Faelle pruefen nicht, dass etwas passiert, sondern dass etwas richtig
> verweigert wird. Ein Client, der einfach immer alles erlaubt und jedes
> Widget anzeigt, koennte sie nicht bestehen.

Das Bild vom gesperrten und dann freigegebenen Knopf steht in Anhang C —
das ist die Antwort auf "woher wissen wir, dass Ihre Tests nicht alles
durchwinken?", nicht Folienmaterial.
-->
