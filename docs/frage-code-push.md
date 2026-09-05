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
