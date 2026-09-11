import LegalLayout from "@/components/LegalLayout";

export default function Imprint() {
  return (
    <LegalLayout
      eyebrow="Legal Notice · Rechtliche Angaben gem. § 5 DDG & § 18 MStV"
      title="Imprint / Impressum"
      updated="September 2026"
    >
      {/* ENGLISH SECTION */}
      <section lang="en" aria-labelledby="imprint-en">
        <h2 id="imprint-en">Legal Notice (English)</h2>
        <p>
          Information pursuant to Section 5 of the German Digital Services Act (DDG) and Section 18(2) of the State Media Treaty (MStV).
        </p>

        <dl className="legal-fields">
          <div>
            <dt>Service Provider / Publication</dt>
            <dd>The Quantum Imperative (The Convergence Series · Volume II)</dd>
          </div>
          <div>
            <dt>Authors & Publishers</dt>
            <dd>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</dd>
          </div>
          <div>
            <dt>Affiliation</dt>
            <dd>Quasality (Singapore) · The Convergence Series</dd>
          </div>
          <div>
            <dt>Electronic Contact</dt>
            <dd>contact@thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>https://www.thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Book Identifier</dt>
            <dd>ISBN 978-1-0681840-2-4</dd>
          </div>
        </dl>

        <h3>Editorial Responsibility</h3>
        <p>
          Responsible for the editorial content of this website pursuant to Section 18(2) of the State Media Treaty (MStV):
          <br />
          <strong>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</strong>
          <br />
          c/o Quasality Pte. Ltd.
        </p>

        <h3>Disclaimer — Content &amp; External Links</h3>
        <p>
          The contents of this website have been compiled with the highest degree of diligence. However, the authors assume no liability for the accuracy, completeness, or timeliness of the information provided.
        </p>
        <p>
          This website contains external links to third-party websites (including Amazon.com and affiliated platforms). We have no influence over the current and future design or contents of linked external pages. The respective provider or operator of the pages is always responsible for the content of the linked pages.
        </p>

        <h3>Copyright &amp; Intellectual Property</h3>
        <p>
          The content, layout, designs, and typography published on this website are governed by applicable copyright and intellectual property laws. Any duplication, processing, distribution, or commercial exploitation requires the prior written consent of the authors.
        </p>
      </section>

      {/* GERMAN SECTION */}
      <section lang="de" aria-labelledby="imprint-de">
        <h2 id="imprint-de">Impressum (Deutsch)</h2>
        <p>
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).
        </p>

        <dl className="legal-fields">
          <div>
            <dt>Diensteanbieter / Publikation</dt>
            <dd>The Quantum Imperative (The Convergence Series · Volume II)</dd>
          </div>
          <div>
            <dt>Autoren &amp; Herausgeber</dt>
            <dd>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</dd>
          </div>
          <div>
            <dt>Unternehmung / Zuordnung</dt>
            <dd>Quasality (Singapur) · The Convergence Series</dd>
          </div>
          <div>
            <dt>Elektronische Kontaktaufnahme</dt>
            <dd>contact@thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Online-Präsenz</dt>
            <dd>https://www.thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Buchkennzeichnung</dt>
            <dd>ISBN 978-1-0681840-2-4</dd>
          </div>
        </dl>

        <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
        <p>
          Inhaltlich verantwortlich für journalistisch-redaktionelle Beiträge dieser Webpräsenz:
          <br />
          <strong>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</strong>
          <br />
          c/o Quasality Pte. Ltd.
        </p>

        <h3>Haftung für Inhalte und externe Links</h3>
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter (u.&nbsp;a. Amazon.com für den Bucherwerb), auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte, Texte, visuellen Darstellungen und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autoren.
        </p>
      </section>
    </LegalLayout>
  );
}
