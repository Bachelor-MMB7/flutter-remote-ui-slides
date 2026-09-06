// Entfernt die Sprechernotizen aus dem oeffentlichen Build.
//
// Gehoert zu presenter: dev im Kopf von slides.md. Der Kommentar steht hier
// und nicht dort, weil der Kopf als Rohtext im Bundle landet.
//
// Grund: presenter: dev nimmt nur die Presenter-Oberflaeche aus dem Build,
// der Notiztext selbst steht danach immer noch als noteHTML im ausgelieferten
// JavaScript und ist ueber die Browser-Suche lesbar. Hier faellt er schon
// beim Parsen weg, also bevor irgendetwas gebaut wird.
//
// Nur im Build. Im Dev-Modus und beim Export bleiben die Notizen erhalten,
// damit der Presenter-Modus beim Ueben vollstaendig ist.
export default function ({ mode }: { mode?: string }) {
  if (mode !== 'build')
    return []

  return [
    {
      name: 'strip-notes-in-build',
      // Leerstring, nicht undefined: der Parser verwirft undefined und
      // behaelt die urspruengliche Notiz.
      transformNote: () => '',
    },
  ]
}
