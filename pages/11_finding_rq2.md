# RQ2: 24 hours becomes half a minute

<p class="criterion"><span class="so">SO2</span> Deployment time at most a tenth of the 24-hour reference value, so the bar is 2.4 hours</p>

**15.0 s** median server deployment
**358.5 ms** median client delivery

Under half a minute once the client requests the updated definition, against a
24-hour reference scenario for the app store release path.

A fix or a new variant can be deployed during the shift in which the need for it
comes up.

<!--
2:00 — Das ist der zentrale Befund des Vortrags. Hier langsam sprechen.
Die 24 h sind ein definiertes Referenzszenario (Abschnitt 2-4), keine Messung.
Das offen sagen, bevor jemand fragt.

Annahme benennen: gemessen ab Start des Server-Deployments bis zum ersten
gerenderten Frame, nachdem der Client die geaenderte Definition angefordert hat.

TODO Visual: Balkenvergleich, logarithmische Achse. 24 h gegen 15,4 s.
TODO Stichprobengroesse nennen — Begruendung in defense/warum-30-trials-so2.md
-->
