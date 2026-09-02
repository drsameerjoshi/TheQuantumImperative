# TQI Staging – QA-Befunde

## Visuelle Prüfung

Die vollständige Homepage sowie `/imprint` und `/privacy` wurden bei 1440 × 900 px geprüft. Die Homepage folgt der freigegebenen Imperial-Resilience-Editorial-Richtung mit asymmetrischem Cover-Hero, römischer Nachtwelt, Editorial-Zäsuren, Stack-/Covenant-Explorern, realen Portraits und Forum-Finale. Die unabhängige Stilprüfung empfahl eine stärkere Verwendung des TQI-Siegels, mehr steinerne Materialität, klarere Rom-Dramatik und eine stärkere Artefakt-Sprache auf den Legal-Seiten. Diese Punkte wurden in einem zusammenhängenden Revisionspass umgesetzt und in `ideas.md` dokumentiert.

Die vollständige Homepage wurde anschließend bei 375 × 812 px geprüft. Cover und Amazon-CTA sind im ersten Screen sichtbar. Die Seite nutzt auf Mobile Accordions statt Desktop-Tabs, die Autorenblöcke bleiben lesbar, und das Nachtforum schließt die Seite ohne horizontales Überlaufen ab. Die gemessene Dokumenthöhe im Desktop-Browser beträgt rund 10.782 px einschließlich Viewport und liegt damit im vorgesehenen Rahmen von unter 12.000 px.

## Inhalts- und Linkprüfung

Die gerenderte Staging-Seite enthält genau drei sichtbare Amazon-Kaufpfade plus einen Footer-Link; alle führen zu `https://www.amazon.com/dp/B0HHFC6TG6`. Es gibt keinen Executive-Brief-CTA, kein Assessment und keinen `Manifesto`-Begriff. Der Filmblock ist als 17-sekündige, stumme, poster-first Sequenz mit sichtbarem Play-Control und Coming-soon-Hinweis angelegt.

## Offene QA-Schritte

Der Cover-Flip wurde im gerenderten Browser betätigt und wechselte korrekt von Front- zu Backcover; Beschriftung und `aria-label` passten sich auf `Front cover` beziehungsweise `Show front cover` an. Der Film-Play-Button scrollte zum poster-first Filmblock und löste den Ladevorgang aus, ohne Ton zu aktivieren. Die Videodatei bleibt `muted`, `playsInline`, `preload="none"` und ohne Loop.

Der erste direkte Stack-Tab-Klick wurde vom Browser unmittelbar nach dem Event ausgelesen und lieferte deshalb noch den alten React-Zustand. Für Stack und Covenant ist ein verzögerter DOM-Check eingeplant, der erst nach dem Re-Render `aria-selected` und die Panelüberschriften erfasst.

Der verzögerte Zustandscheck ist erfolgreich: Im Stack wechselte `aria-selected` auf `01 Materials & Compute` und die Panelüberschrift auf `Materials & Compute`. Im Covenant wechselte `aria-selected` auf `02 Enterprise E1–E3` und die Panelüberschrift auf `Enterprise obligations`. Der direkte Copy-Klick wurde ausgelöst; seine kurzzeitige `Copied`-Bestätigung wird separat mit verzögertem DOM-Check verifiziert.

Der Copy-Control-Test ist nach Ergänzung eines Clipboard-Fallbacks erfolgreich: Die UI wechselt nach Aktivierung sichtbar auf `Copied`; der Produktionsbuild bleibt fehlerfrei.

Vor Auslieferung folgen die Interaktionsprüfung für Stack, Covenant und Copy-Control, Lighthouse Mobile/Desktop, Accessibility-Checks sowie die Vorbereitung des selbst hostbaren Exportpakets. Automatisierte Content-Checks haben bereits bestätigt: alle Routen `/`, `/imprint`, `/privacy` und `/robots.txt` antworten mit HTTP 200; Noindex/Nofollow und `Disallow: /` sind gesetzt; es existiert nur eine Amazon-ASIN als zentrale Quelle und keiner der ausgeschlossenen Begriffe oder CTAs ist im Frontend vorhanden.

## Finaler Produktionsaudit

Der bereinigte Selbsthosting-Build wurde ohne Manus-Debug- oder Analytics-Runtime lokal ausgeliefert und gemessen. Mobile Lighthouse bei simulierter langsamer Verbindung: Performance 77, Accessibility 100, Best Practices 96, CLS 0, TBT 190 ms, FCP 2,8 s und LCP 4,5 s bei 637 KiB initialem Transfer. Desktop: Performance 99, Accessibility 100, Best Practices 96, CLS 0,002, TBT 30 ms und LCP 1,0 s bei 753 KiB initialem Transfer. Der Mobile-LCP bleibt unter künstlicher Drosselung oberhalb des ambitionierten 2,5-s-Ziels; dafür sind Layoutstabilität, Interaktivität und Transferbudget eingehalten. Das Hero ist prerendert, kritisches CSS inline, Webfonts lokal und optional, das Video nicht vorab geladen und alle bildlichen Erstlasten komprimiert.

SEO wird im Staging absichtlich mit 66 bewertet, weil `noindex`, `nofollow` und die crawlerweite Sperre ausdrücklich gefordert sind. Vor dem Produktions-Cutover müssen diese Sperren erst nach Freigabe der Rechtsseiten entfernt werden.

Das Exportpaket wurde als unabhängige Quelle getestet: Assets wurden lokal vorbereitet, Abhängigkeiten frisch installiert, TypeScript geprüft und ein neuer prerenderter Produktionsbuild erfolgreich erzeugt. Sämtliche 31 lokalen Webmedien wurden dabei in das Build übernommen; keine `/manus-storage/`-Referenz und keine Manus-spezifische Runtime verbleibt im Selbsthosting-Paket.

## Iteration 2

Die neue internationale Filmüberschrift `Rome was the warning. The power to decide is the answer.` ist im gerenderten Staging bestätigt. Der interaktive Standardbrowser bleibt technisch auf einem Desktop-Viewport fixiert; die mobile Overlay-Ansicht wird deshalb zusätzlich über den projektgebundenen 375-px-Screenshot sowie DOM- und Zustandsprüfungen validiert.

Der reproduzierbare 375 × 812-px-Test bestätigt das Fullscreen-Menü: opaker Hintergrund `rgb(8, 10, 13)`, fixe Abdeckung von 76 bis 812 px, Body-Scroll-Lock, Fokus auf dem ersten Navigationsziel, `aria-expanded=true` im offenen Zustand sowie vollständige Rücksetzung und Fokus-Rückgabe per Escape. Die gemessene Dokumenthöhe beträgt nach der moderaten Explorer-Verdichtung 12.322 px. Der dabei sichtbare gold-auf-gold Kontrast des Amazon-Labels wurde anschließend durch eine präzisere Selektorbegrenzung korrigiert.

Nach der Kontrastkorrektur wurde das Overlay erneut bei 375 × 812 px geprüft; Amazon-Label, Navigationsziele und Schließen-Control sind klar lesbar. Die finale mobile und Desktop-Gesamtansicht bestätigt, dass die neue Überschrift, die gestrafften Explorer und die bestehende First-Screen-Konversion ohne visuelle Regression zusammenarbeiten. Twitter Card und `schema.org/Book` sind jeweils genau einmal vorhanden; ISBN und ASIN stimmen, ein unbestätigtes Publisher-Feld wurde nicht ergänzt. Der Noindex-Schutz bleibt aktiv.
