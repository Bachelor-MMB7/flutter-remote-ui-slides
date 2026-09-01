# The release path

Every workflow variant is a new build — and every build goes through the stores.

- Apple reviews every submission, up to 24 h until it is on all storefronts
- Google Play: hours to seven days, one week recommended between handing in and release
- Only half of users have automatic updates enabled

At pyck, each customer-specific workflow variant had to be implemented in the app
and shipped as a build. A field order change reached the warehouse floor with the
next planned release.

**The idea:** the screen no longer ships in the binary. It comes from the server
as a definition, and the app renders it at runtime.

<!--
2:00 — Nicht bei der EU-Logistikbranche einsteigen, direkt bei pyck.
Erst der Schmerz (Variante = Build = Store), dann die Idee als Absprung.
Der letzte Satz macht RQ1 auf der naechsten Folie lesbar.

TODO Visual: Zeitstrahl Store-Release (24 h / 7 Tage) gegen Schichtlaenge.
TODO Quellen als Kurzbeleg einblenden (Apple, Google Play, Nayebi et al. 2016).
-->
