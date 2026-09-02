/** Design reminder: bilingual legal stub with no invented entity or address. */
import LegalLayout from "@/components/LegalLayout";

const fields = [
  ["Legal person / company", "Rechtliche Person / Unternehmen"],
  ["Address", "Ladungsfähige Anschrift"],
  ["Email", "E-Mail-Adresse"],
  ["Represented by", "Vertreten durch"],
  ["Register / VAT if applicable", "Register / USt.-ID, soweit anwendbar"],
] as const;

export default function Imprint() {
  return (
    <LegalLayout eyebrow="Legal notice · Rechtliche Angaben" title="Imprint / Impressum" updated="Details to follow · Angaben folgen">
      <section lang="en" aria-labelledby="imprint-en">
        <h2 id="imprint-en">English</h2>
        <p>This page has been prepared as a clearly labeled staging stub. The legally required provider information will be inserted before production publication. No address or entity has been invented.</p>
        <dl className="legal-fields">
          {fields.map(([en]) => <div key={en}><dt>{en}</dt><dd>Details to follow</dd></div>)}
        </dl>
        <h3>Editorial responsibility</h3>
        <p>Details to follow. The authors remain responsible for the content of the book. This staging website is not yet intended for public production use.</p>
      </section>

      <section lang="de" aria-labelledby="imprint-de">
        <h2 id="imprint-de">Deutsch</h2>
        <p>Diese Seite ist als eindeutig gekennzeichneter Platzhalter für die Staging-Fassung vorbereitet. Die gesetzlich erforderlichen Anbieterangaben werden vor der Veröffentlichung ergänzt. Es wurden weder eine Anschrift noch eine Rechtseinheit erfunden.</p>
        <dl className="legal-fields">
          {fields.map(([, de]) => <div key={de}><dt>{de}</dt><dd>Angaben folgen</dd></div>)}
        </dl>
        <h3>Redaktionell verantwortlich</h3>
        <p>Angaben folgen. Für die Inhalte des Buches bleiben die Autoren verantwortlich. Diese Staging-Website ist noch nicht für die öffentliche Produktionsnutzung bestimmt.</p>
      </section>
    </LegalLayout>
  );
}

