# Frage: Warum kein Code Push (Shorebird)?

> Bei Code Push gibt es den Definitionen-Ansatz nicht, um mehrere Kunden zu
> bedienen. Bei jedem Code Push empfängt jeder Kunde denselben Code. Es gibt
> keine Kundenvarianten.

## Falls nachgehakt wird: wie oft kann man patchen?

Nach einem Release beliebig oft. Nacheinander, ohne dazwischen einen neuen
Store-Release zu brauchen.

```
Store-Release 1.0
   ├─ Patch A   → alle auf 1.0 bekommen A
   ├─ Patch B   → alle auf 1.0 bekommen jetzt B statt A
   └─ Patch C   → alle auf 1.0 bekommen jetzt C
Store-Release 1.1
   └─ Patch A'  → Patches von 1.0 gelten hier nicht
```

„Only one of them can be active at any time" heißt: zu jedem Zeitpunkt ist einer
der aktuelle, nicht „du bekommst nur einen". Jeder neue Patch löst den vorherigen
ab — wie eine Datei, die man immer wieder überschreibt.

Die Einschränkung ist also nicht die Anzahl, sondern die Zielgruppe: Alle
bekommen dasselbe. Zehnmal patchen geht, zwei Stände parallel für zwei Kunden
nicht.

## Warum nicht shorebid?
„Wie Shorebird das mit 2.5.2 in Einklang bringt, ist deren eigene Auslegung, ich habe sie nicht nachgeprüft. Für meine Entscheidung war es auch nicht ausschlaggebend, weil Code Push schon an den Kundenvarianten scheitert. Denn bei Shorebid gibt es nur einen aktiven Patch je Release"

----
heisst dadurch dass nur einer active ist werden alle anderen überschrieben und kunde A würde seinen patch verlieren?
Ja, im Ergebnis genau das. Genauer gesagt: es gibt „Kunde A's Patch" gar nicht erst.

Ein Patch hängt am Release, nicht an einem Kunden. Alle Geräte, die diesen Release installiert haben, holen sich den Patch, der gerade aktiv ist. Schiebst du danach einen zweiten nach, weil Kunde B etwas anderes braucht, ist der jetzt der aktive, und Kunde A bekommt ihn genauso.


Shorebird bewegt sich an dieser Grenze und begründet mit dem Interpreter, warum es zulässig ist. Ich brauche diese Begründung nicht, weil bei mir gar kein Code ankommt."