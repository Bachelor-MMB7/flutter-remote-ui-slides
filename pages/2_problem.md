# The release path

<div class="lead">
  <p>Mobile applications support warehouse operators <Ref n="1" /></p>
  <p>Every customer needs its own workflow variant</p>
  <p>Every variant is a new build</p>
</div>

<p class="path-caption" v-click="1">Bound to a multi-step app store release process on both major platforms <Ref n="2" /><Ref n="3" /></p>

<div class="release-path" v-click="1">
  <div class="station origin">
    <div class="dot"></div>
    <div class="label">One changed<br />component</div>
  </div>
  <div class="link"></div>
  <div class="station">
    <div class="dot"></div>
    <div class="label">Build &amp;<br />upload</div>
  </div>
  <div class="link"></div>
  <div class="station">
    <div class="dot"></div>
    <div class="label">Store<br />review</div>
    <div class="note">hours to 7 days <Ref n="4" /></div>
  </div>
  <div class="link"></div>
  <div class="station">
    <div class="dot"></div>
    <div class="label">Release</div>
    <div class="note">+24 h to all storefronts <Ref n="5" /></div>
  </div>
  <div class="link"></div>
  <div class="station end">
    <div class="dot"></div>
    <div class="label">On the<br />warehouse floor</div>
    <div class="note">only half enabled automatic updates<br />in a 2016 user survey <Ref n="6" /></div>
  </div>
</div>

<div class="cadence">
  <div class="item" v-click="2">
    <div class="value web">multiple times per day</div>
    <div class="tag">Web applications</div>
  </div>
  <div class="item" v-click="2">
    <div class="value">once every two weeks</div>
    <div class="tag">Mobile apps at Facebook and Netflix <Ref n="6" /></div>
  </div>
</div>

<!--
2:00 — Die drei Zeilen sind Stichworte, den Rest erzaehle ich. Wortlaut aus
der Thesis, damit die Belege sitzen:

Zeile 1 — "Particularly in warehouse environments, mobile-based applications play
a crucial role in supporting operators with task-relevant information for
activities such as order picking." (Kap. 1-1)

Zeile 2 und 3 — "At pyck, each customer-specific workflow variant had to be
implemented in the app and shipped as a new build. This affected variations such
as different field orders or workflow sequences, which only reached operators
with the next planned mobile release, even when the underlying process change
could be applied immediately." (Kap. 1-2)

Ueberleitung zur Grafik — "the mobile applications that drive these operations
remain bound to a multi-step app store release process on both major platforms"
(Kap. 1-1)

Drei Klicks: die ganze Kette auf einmal, dann Web, dann Mobile. Beim Aufbau sprechen, nicht die Notizen vorlesen.

Der Taktungsvergleich ist die Pointe der Folie — Web zuerst als Referenzpunkt,
dann Mobile dagegen. Erst dadurch sind zwei Wochen ein Faktor und keine Zahl. Der Punkt ist die
Kette: ein einzelner Button loest den ganzen Weg aus.

Letzte Station: automatische Updates heissen, die App aktualisiert sich ohne
Zutun. Wer die Einstellung aus hat, bleibt auf der alten Version. Wichtig
"surveyed" mitsprechen — Stichprobenbefund aus Nayebi et al. S. 558, keine
Allaussage. Wortlaut Kap. 1-1: "Propagation to end users is further delayed by
individual update adoption, with only half of surveyed users enabling automatic
updates."

Der Taktungs-Vergleich ist die Antwort auf "Stunden klingt doch kurz".
Wortlaut Thesis Kap. 1-1: "Whereas web applications can be deployed multiple
times per day, the vetting process of app stores forces even resource-rich
organizations such as Facebook or Netflix to release their mobile apps only once
every two weeks." (Nayebi et al. S. 552)
Pointe beim Sprechen: nicht Dauer, sondern Taktung. Und es liegt nicht an
fehlenden Ressourcen — Facebook hat sie.

WENN GEFRAGT WIRD — "Apple sagt doch, 90 Prozent sind in unter einem Tag durch":
Stimmt, steht so in meiner Arbeit (Kap. 3-2-1, Apple App Review). Drei Punkte:
1. Die 7 Tage sind Googles Angabe, nicht Apples.
2. Apples 24 Stunden bis auf alle Storefronts kommen NACH der Freigabe obendrauf.
3. Ein Durchschnitt hilft nicht, wenn ein einzelner Rejection-Zyklus den Termin
   reisst. Ueber 40 Prozent der offenen Beanstandungen betreffen laut Apple die
   Richtlinie zur App-Vollstaendigkeit.

WEITERE STATIONEN, bewusst NICHT auf der Folie (bei Bedarf muendlich):
- Rejection-Schleife: abgelehnte Einreichung geht zurueck an den Anfang. Macht
  aus einer planbaren Wartezeit eine unplanbare. Staerkstes Zusatzargument.
- Phased Release: Apple rollt ein Update ueber sieben Tage aus, Tag 1 ein
  Prozent der Nutzer mit automatischen Updates, erst Tag 7 alle (Kap. 3-2-1).
- Mindest-Target-API-Level von Google Play erzwingt Builds auch ohne inhaltliche
  Aenderung — gehoert aber auf die Limitationen-Folie, nicht hierher.

Nicht bei Eurostat einsteigen. "Tenant" hier noch nicht sagen, kommt auf der
Approach-Folie.
-->
