# Demonstration

<div class="demo-stage">
  <div class="video-placeholder demo-wide">
    <div class="vp-label">Demo clip</div>
    <div class="vp-meta">40–50 s · iPhone 15 Pro · server on fly.io</div>
  </div>
  <div class="demo-beats">
    <div class="beat"><span class="beat-n">1</span><span class="beat-t">Two tenants, one build</span></div>
    <div class="beat"><span class="beat-n">2</span><span class="beat-t">Edit a definition, publish, reload</span></div>
    <div class="beat"><span class="beat-n">3</span><span class="beat-t">Airplane mode, screens still render</span></div>
  </div>
</div>

<!--
Weder noch. Ein vollständiger Durchlauf wäre zu lang und zu langweilig, „einmal laufen lassen" zu wenig.

Ein kompletter Ablauf hieße: drei Screens für Tenant A, vier für Tenant B, dazwischen Formulare ausfüllen. Realistisch 60–90 Sekunden, und der Großteil davon ist Tippen in Felder. Das belegt nichts, was deine 27 Testfälle nicht besser belegen.

„Nur die App laufen lassen" zeigt dagegen nur, dass eine App existiert — nicht, dass die Screens vom Server kommen oder sich pro Kunde unterscheiden. Damit ist der ganze Punkt weg.

Zeig die Momente, die deine Behauptungen tragen. Konkret als Drehplan:

Was	~Dauer
1	Tenant A, Schritt 1 · Dropdown öffnen · auf Tenant B wechseln · sichtbar anderer Screen	10 s
2	Einmal „Continue" tippen — zeigt, dass es läuft und reagiert	3 s
3	Schnitt zum Editor · Feld in der Definition ändern · veröffentlichen (Zeitraffer, beschriftet) · Tenant weg und zurück · geänderter Screen	15 s
4	Flugmodus an · Screen neu laden · rendert weiter	10 s
Rund 40 Sekunden, passt in dein Budget von 40–50.

Warum genau diese vier: Jeder Beat belegt eine Behauptung, die du auf einer Folie aufstellst — Mehrmandantenfähigkeit, dass es eine echte App ist, Auslieferung ohne Store, Verfügbarkeit ohne Netz. Nichts davon ist Beiwerk.

Ein technischer Hinweis zu Beat 3: Der Wechsel weg und zurück ist nicht Deko — dein Client holt die Definition nur bei initState und beim Tenant-Wechsel neu. Ohne diesen Schritt bliebe der alte Screen stehen, und im Video sähe es aus, als hätte das Deployment nicht gewirkt.
-->
