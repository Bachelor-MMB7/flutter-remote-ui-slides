# RQ3: No perceptible cost

<p class="criterion"><span class="so">SO3</span> Median and 95th percentile below 100 ms in both implementations · difference in median render time below one frame period (16.7 ms at 60 Hz)</p>

**0.3 ms** difference in median render time, far less than one frame period
(16.7 ms at 60 Hz).

Every measured tap-to-frame span stays below **21 ms** in both implementations,
the slowest at 20.4 ms.

<!--
2:00 — Die Absicherung: der Sprung aus RQ2 kostet nichts an Interaktion.

Ehrlich einordnen, bevor jemand nachbohrt: die gemessene Spanne geht vom
Eintreffen des Taps in der App bis zum geflushten Frame. Der volle Weg vom
Finger zum Glas ist laenger und wurde nicht gemessen.
Die 100-ms-Schwelle nach Nielsen ist deshalb nur Referenz, kein Nachweis.
Vorbereitete Antwort: defense/100ms-schwelle-messspanne.md

TODO Visual A-B-B-A, falls nach dem Verteilungsdiagramm noch Zeit ist:
     Block 1 RFW 9,8 ms | Block 2 Baseline | Block 3 Baseline | Block 4 RFW 9,8 ms
     Zeigt Kontrolle UND Nachweis in einem Bild: erster und letzter Block sind
     beide RFW und haben denselben Median, also keine thermische Drift.
     Gehoert hierher und nicht ins Setup — die 9,8 gegen 9,8 sind ein Befund.

TODO Visual: Verteilung tap-to-frame beider Implementierungen, mit
Frame-Perioden-Linie bei 16,7 ms.
-->
