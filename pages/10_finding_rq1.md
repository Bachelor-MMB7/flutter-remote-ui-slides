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

BEIM ERSTEN AUFTAUCHEN DER SO-ZEILE SAGEN (nur hier, nicht bei RQ2 und RQ3):

> Design Science verlangt, die Ergebnisse gegen die Ziele zu pruefen, die vor
> dem Bau des Systems festgelegt wurden. Genau das steht hier: oben das
> Kriterium, darunter das Ergebnis.
-->
