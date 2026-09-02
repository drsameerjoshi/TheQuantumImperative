/** Design reminder: privacy stub states only current staging behavior and flags missing legal details. */
import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout eyebrow="Data protection · Datenschutz" title="Privacy / Datenschutz" updated="Details to follow · Angaben folgen">
      <section lang="en" aria-labelledby="privacy-en">
        <h2 id="privacy-en">English</h2>
        <p>This privacy notice describes the present private staging build. The complete controller details, contact information, hosting details, retention periods, and legal bases will be added before production publication.</p>
        <dl className="legal-fields">
          <div><dt>Controller / legal person</dt><dd>Details to follow</dd></div>
          <div><dt>Address</dt><dd>Details to follow</dd></div>
          <div><dt>Email</dt><dd>Details to follow</dd></div>
          <div><dt>Represented by</dt><dd>Details to follow</dd></div>
          <div><dt>Register / VAT if applicable</dt><dd>Details to follow</dd></div>
        </dl>
        <h3>Current staging behavior</h3>
        <p>The website contains no account, contact form, newsletter, email gate, direct checkout, advertising pixel, or customer review system. A privacy-friendly page-view measurement may be provided by the hosting environment. Its production configuration and legal basis must be verified before launch.</p>
        <h3>External link to Amazon</h3>
        <p>Purchase controls lead to Amazon.com. Data is transferred to Amazon only when a visitor activates such a link. Amazon processes subsequent activity under its own terms and privacy notice.</p>
        <h3>Storage and rights</h3>
        <p>Exact retention periods, recipients, international transfers, and the contact route for access, rectification, deletion, restriction, objection, and data portability will be completed before public launch.</p>
      </section>

      <section lang="de" aria-labelledby="privacy-de">
        <h2 id="privacy-de">Deutsch</h2>
        <p>Dieser Datenschutzhinweis beschreibt die derzeitige private Staging-Fassung. Vollständige Angaben zum Verantwortlichen, Kontakt, Hosting, Speicherdauern und Rechtsgrundlagen werden vor der Produktionsveröffentlichung ergänzt.</p>
        <dl className="legal-fields">
          <div><dt>Verantwortliche Person / Unternehmen</dt><dd>Angaben folgen</dd></div>
          <div><dt>Ladungsfähige Anschrift</dt><dd>Angaben folgen</dd></div>
          <div><dt>E-Mail-Adresse</dt><dd>Angaben folgen</dd></div>
          <div><dt>Vertreten durch</dt><dd>Angaben folgen</dd></div>
          <div><dt>Register / USt.-ID, soweit anwendbar</dt><dd>Angaben folgen</dd></div>
        </dl>
        <h3>Aktuelles Verhalten der Staging-Seite</h3>
        <p>Die Website enthält kein Benutzerkonto, Kontaktformular, Newsletter, E-Mail-Gate, keinen eigenen Checkout, Werbepixel oder Kundenrezensionen. Die Hosting-Umgebung kann eine datenschutzfreundliche Seitenaufrufmessung bereitstellen. Deren Produktionskonfiguration und Rechtsgrundlage sind vor dem Start zu prüfen.</p>
        <h3>Externer Link zu Amazon</h3>
        <p>Kauf-Links führen zu Amazon.com. Daten werden erst an Amazon übertragen, wenn ein Besucher einen solchen Link aktiviert. Die weitere Verarbeitung erfolgt durch Amazon nach dessen eigenen Bedingungen und Datenschutzhinweisen.</p>
        <h3>Speicherung und Betroffenenrechte</h3>
        <p>Konkrete Speicherdauern, Empfänger, internationale Übermittlungen und der Kontaktweg für Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit werden vor dem öffentlichen Start ergänzt.</p>
      </section>
    </LegalLayout>
  );
}

