# Approach and setup

Because a release build is fixed machine code, the executable UI capabilities and
widget implementations available to the app are set when it is compiled. Without a
mechanism for composing them at runtime, changing the structure of a screen means
building and shipping the app again. <Ref n="7" />

**Server-driven UI on Remote Flutter Widgets**
The app carries a fixed set of eleven warehouse widgets. A definition composes
them into customer-specific variants of the same workflow.

**Design Science Research**
Build the artifact, demonstrate it, evaluate it.

**Demonstration setup**
Two invented variants of a goods receipt workflow, two tenants, one app.

**Generative in the sense of Czarnecki**
Definitions are authored at development time from a widget catalog — by hand or
with a language model. No generation happens at runtime.

<!--
1:30 — Das ist die Methode, nicht die Architektur im Detail.
Der letzte Punkt ist wichtig: "generative" ohne Generator muss ich selbst
ansprechen, sonst kommt die Frage aus dem Publikum.
Vorbereitete Antwort liegt in defense/generative-ohne-generator-2026-08-05.md

Der erste Absatz ist die Begruendung, warum es ueberhaupt einen Mechanismus
zur Laufzeit braucht. Stand vorher auf der Problemfolie, ist dort aber zu
technisch fuer den Einstieg.

Hier faellt zum ersten Mal das Wort "tenant" — eine Definition pro Tenant.

TODO Visual: Server -> Definition -> Client -> elf Widgets -> zwei Varianten.
TODO Ein Satz zur Abgrenzung, was NICHT vom Server kommt (Daten, Schrittlogik).
-->
