# TQI Relaunch – Informations- und Technikarchitektur

## Technische Grundentscheidung

Der Relaunch wird als **statische React-19-/Vite-/Tailwind-4-Website** auf dem bereits initialisierten Staging-Projekt umgesetzt. Es gibt keine Datenbank, kein Login, keinen Checkout und keine API-Abhängigkeit. Amazon bleibt der externe Kaufkanal. Diese Entscheidung hält Angriffsfläche, Wartung und Laufzeitgewicht klein und vermeidet eine unnötige Commerce-Integration.

Die Produktion wird zunächst ausschließlich im Staging entwickelt. Die bestehende Domain bleibt unangetastet, bis Inhalt, Design, Rechtsseiten, Mobilansicht und Amazon-Pfade abgenommen sind. Für die endgültige Veröffentlichung ist das integrierte Hosting mit benutzerdefinierter Domain vorgesehen; ein Export zurück zu Vercel bleibt technisch möglich, ist aber nicht der bevorzugte Weg und müsste separat validiert werden.

## Routes

| Route | Zweck | Auslieferung |
|---|---|---|
| `/` | Englische Buch-Landingpage | Statische Inhalte mit wenigen interaktiven Inseln |
| `/imprint` | Deutsches/englisches Impressum | Direkter, indexierbarer Inhalt |
| `/privacy` | Deutsch/englische Datenschutzerklärung | Direkter, indexierbarer Inhalt |
| `/404` | Fehlseite mit Rückweg | Markenadäquat, ohne Sackgasse |
| `/robots.txt` | Crawler-Regeln | Kleine statische Datei |
| `/sitemap.xml` | Seitenindex | Kleine statische Datei |

## Seitenarchitektur

| Reihenfolge | Abschnitt | Kerninhalt | Primäre Komponente |
|---:|---|---|---|
| 1 | Header | Serienkennung, Book, Architecture, Authors, Amazon | `SiteHeader` + Mobile Sheet |
| 2 | Hero | Cover, Roman-Fire-Visual, H1, Kauf-CTA, Executive Brief | `BookHero` + `CoverFlip` |
| 3 | Proof strip | 12/4, 6/100, Juni-2026-Fall | `EvidenceStrip` |
| 4 | Film | V13.2 einmalig/Poster, später Sameer-Film | `AuthorFilmFrame` |
| 5 | Instruments | Covenant, Stack, 100-Day Plan | `InstrumentTrio` |
| 6 | Stack | Sechs Layer, Energy als Layer 0 | `StackExplorer` |
| 7 | Covenant | Vier Pillars × zwölf Verpflichtungen | `CovenantExplorer` |
| 8 | Stage lines | Sechs zitierfähige Sätze | `StageLines` + Copy-Control |
| 9 | Foreword / Audience | Exaktes Zitat, Zielgruppen | `ForewordBand` |
| 10 | Authors | Reale Portraits, kurze Vitae | `AuthorsEditorial` |
| 11 | Series | Volumes I–III | `SeriesChronology` |
| 12 | Forum CTA | Nachtforum, Cover, Amazon, ISBN | `ForumFinale` |
| 13 | Footer | Impressum, Datenschutz, Copyright | `SiteFooter` |

Der erwartete mobile Seitenumfang soll unter 12.000 px bleiben. Lange Beschreibungen werden nicht versteckt, sondern redaktionell gekürzt; Accordion und Tabs dienen nur der sinnvollen Layer-/Pillar-Navigation.

## Inhaltsmodell

Alle Buchdaten werden in einer statischen `bookContent.ts` als typisierte Objekte gepflegt. Dazu gehören Titel, Untertitel, ASIN, ISBN, Amazon-URL, Autoren, Instrumente, Stack-Layer, Covenant-Pillars, Stage Lines und Serienbände. Dadurch existiert die Amazon-URL nur einmal als Konstante und kann nicht erneut als falscher Platzhalter divergieren.

Externe Behauptungen werden nicht dynamisch nachgeladen. Die Website verwendet ausschließlich geprüfte Formulierungen aus dem finalen Buch und der Amazon-Seite. Zahlen und politische Ereignisse erhalten sichtbare Source-Notes oder werden als Autorenargument kenntlich gemacht.

## Interaktionsmodell

Es werden nur vier JavaScript-Interaktionen umgesetzt: ein tastatur- und touchfähiger Cover-Flip, Stack-Tabs/Accordion, Covenant-Tabs/Accordion sowie ein Executive-Brief-Dialog beziehungsweise direkter PDF-Link. Stage Lines erhalten ein kleines Copy-Control mit sichtbarem Status. Der Header-Drawwer verwendet die vorhandene zugängliche Sheet-Komponente.

Das vorhandene 17-Sekunden-Opening wird nicht als endloser Hintergrund eingesetzt. Es erhält Poster, sichtbares Play/Pause, `muted` und `playsinline`, startet erst bei Sichtbarkeit beziehungsweise Nutzerinteraktion und bleibt am letzten Frame stehen. Auf Mobile wird standardmäßig nur das Poster geladen. Der spätere 88–90-Sekunden-Sameer-Film kann dieselbe Komponente ohne Layoutänderung ersetzen.

## Medienpipeline

Alle großen Assets bleiben außerhalb des Repositories und werden über projektgebundene, persistente Storage-URLs eingebunden. Die exakten Cover werden in AVIF/WebP/JPEG-Derivaten bereitgestellt; Portraits erhalten responsive Größen und sollen in der typischen Kartenansicht deutlich unter 40 KiB liegen. Unterhalb des Hero werden Bilder lazy geladen. Nur Cover beziehungsweise Hero-Visual erhält `fetchpriority="high"`.

Desktop lädt höchstens ein Video zur selben Zeit. Zielwerte sind unter 1,5 MiB für zehn Sekunden Ambient-Video und unter 3 MiB initiale Seitendaten. Mobile erhält statische Poster und lädt Video erst auf ausdrückliche Aktion. Alle Medien haben feste Maße, Alt-Texte und Reduced-Motion-Fallbacks.

## Performance-Budget

| Budget | Ziel |
|---|---:|
| Mobile Lighthouse Performance | mindestens 90 |
| Desktop Lighthouse Performance | mindestens 95 |
| Mobile LCP | unter 2,0 s im definierten Lab-Test |
| JavaScript gzip | unter 150 KiB für die Startseite |
| Initial geladene Seitendaten | unter 3 MiB |
| Layout Shift | CLS unter 0,05 |
| Touch-Ziele | mindestens 44 × 44 px |

Framer Motion, Streamdown, Charts und Maps werden nicht importiert. Motion wird überwiegend in CSS mit `transform` und `opacity` umgesetzt. Die vorhandenen UI-Komponenten werden nur importiert, wenn sie eine echte Funktion erfüllen, damit Tree-Shaking wirksam bleibt.

## Accessibility

Die Website startet mit Skip-Link, semantischen Landmarks, einer einzigen H1, sichtbaren Fokuszuständen und AA-Kontrasten. Icon-Controls erhalten Namen; Cover-Flip, Dialog, Tabs und Accordion sind vollständig per Tastatur bedienbar. `prefers-reduced-motion` ersetzt Ambient-Motion und Video durch Poster. Video erhält Untertitel beziehungsweise `.vtt`, sobald gesprochenes Material eingebunden wird.

## SEO und strukturierte Daten

Der `<html>`-Knoten verwendet `lang="en"`. Titel und Description nennen das Buch, Volume II und beide Autoren. Open Graph und X Cards verwenden ein 1200×630-Motiv mit exaktem Cover und einer einzigen Stage Line. JSON-LD modelliert `Book`, beide `Person`-Autoren, ISBN, ASIN, englische Sprache, Publisher und Kauf-URL. Canonical, robots.txt und sitemap.xml werden mit der Produktionsdomain erzeugt.

## Analytics und Datenschutz

Die vorhandene cookielose Umami-Integration bleibt aktiv; zusätzliche Tracking-Skripte, Heatmaps, Chat-Widgets und Marketing-Pixel werden nicht eingebaut. Dadurch ist grundsätzlich kein Consent-Banner allein für die Basismessung erforderlich; die finale Datenschutzerklärung muss die tatsächlich konfigurierte Instanz und Rechtsgrundlage dennoch korrekt benennen. Sentry wird nicht in Version 1 aufgenommen, weil es für eine kleine statische Kampagnenseite zusätzlichen Code und Datenschutztext erzeugt.

## Qualitätssicherung

Die Abnahme erfolgt bei 320, 375, 768, 1024, 1440 und 1920 px. Geprüft werden Amazon-Links, Fokusreihenfolge, Drawer-Layering, Cover-Tap, Tabs/Accordion, Copy-Control, Rechtsrouten, 404-Verhalten, OG/JSON-LD, Video-Poster, Reduced Motion und Lighthouse. Externe Links öffnen nicht erzwungen in neuen Tabs; wenn `target="_blank"` verwendet wird, kommt `rel="noopener noreferrer"` hinzu.

## Noch benötigte Inhalte

Vor finaler Veröffentlichung werden eine belastbare Impressumszeile mit ladungsfähiger Anschrift und Kontakt sowie – falls der sekundäre CTA bestehen soll – das finale Executive-Brief-PDF benötigt. Liegt kein Brief vor, wird der sekundäre CTA entfernt statt als Platzhalter ausgeliefert.
