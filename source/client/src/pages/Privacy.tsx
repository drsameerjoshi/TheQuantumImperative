import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Data Protection Notice · Datenschutzerklärung gem. DSGVO / GDPR"
      title="Privacy Policy / Datenschutz"
      updated="September 2026"
    >
      {/* ENGLISH SECTION */}
      <section lang="en" aria-labelledby="privacy-en">
        <h2 id="privacy-en">Privacy Policy (English)</h2>
        <p>
          We take the protection of your personal data very seriously. This privacy policy informs you about the nature, scope, and purpose of the processing of personal data on our website in accordance with the General Data Protection Regulation (GDPR / DSGVO).
        </p>

        <dl className="legal-fields">
          <div>
            <dt>Data Controller</dt>
            <dd>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</dd>
          </div>
          <div>
            <dt>Contact Email</dt>
            <dd>privacy@thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Publication</dt>
            <dd>The Quantum Imperative (The Convergence Series)</dd>
          </div>
          <div>
            <dt>Tracking / Advertising Cookies</dt>
            <dd>None (0 cookies / No tracking)</dd>
          </div>
          <div>
            <dt>External Data Transfer</dt>
            <dd>Only when activating external links (Amazon / Quasality)</dd>
          </div>
        </dl>

        <h3>1. Data Processing on This Website</h3>
        <p>
          This website is designed as a privacy-first informational portal for the book <em>The Quantum Imperative</em>. We do not use advertising trackers, marketing cookies, analytics pixels, or user account databases.
        </p>

        <h3>2. Server Log Files &amp; Hosting</h3>
        <p>
          When you visit our website, our hosting provider (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) automatically collects and stores technical connection data in server log files. This data includes:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "#b3aea5", fontSize: "0.95rem", lineHeight: "1.7" }}>
          <li>Browser type, browser version, and operating system used</li>
          <li>Referrer URL (the previously visited page)</li>
          <li>Hostname of the accessing terminal device (IP address, anonymized where applicable)</li>
          <li>Date and time of server request</li>
        </ul>
        <p>
          The legal basis for this processing is Art. 6(1)(f) GDPR (legitimate interest in the secure, stable, and performant delivery of our website).
        </p>

        <h3>3. External Outbound Links (Amazon &amp; Quasality)</h3>
        <p>
          Our website contains external outbound links to Amazon.com (and international Amazon storefronts) for ordering the book, as well as to Quasality.ai and TheConvergencePlaybook.com.
        </p>
        <p>
          Data is only transmitted to these external providers if and when you actively click on the respective link. Once redirected, the privacy policies and terms of service of the respective third-party platforms apply.
        </p>

        <h3>4. SSL/TLS Encryption</h3>
        <p>
          For security reasons and to protect the transmission of data, this website utilizes industry-standard SSL/TLS encryption. You can recognize an encrypted connection by the "https://" prefix and the lock icon in your browser address bar.
        </p>

        <h3>5. Your Rights as a Data Subject</h3>
        <p>
          Under Chapter III of the GDPR, you have the following statutory rights regarding your personal data:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "#b3aea5", fontSize: "0.95rem", lineHeight: "1.7" }}>
          <li><strong>Right of Access (Art. 15 GDPR):</strong> You have the right to obtain confirmation as to whether personal data concerning you is being processed.</li>
          <li><strong>Right to Rectification (Art. 16 GDPR):</strong> You have the right to request the correction of inaccurate data.</li>
          <li><strong>Right to Erasure (Art. 17 GDPR):</strong> You have the right to request the deletion of your personal data ("right to be forgotten").</li>
          <li><strong>Right to Restriction of Processing (Art. 18 GDPR):</strong> You have the right to request the restriction of processing under certain conditions.</li>
          <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your data in a structured, commonly used format.</li>
          <li><strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object at any time to processing based on legitimate interests.</li>
          <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a competent data protection supervisory authority (Art. 77 GDPR).</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us via email at <strong>privacy@thequantumimperative.com</strong>.
        </p>
      </section>

      {/* GERMAN SECTION */}
      <section lang="de" aria-labelledby="privacy-de">
        <h2 id="privacy-de">Datenschutzerklärung (Deutsch)</h2>
        <p>
          Wir legen großen Wert auf den Schutz Ihrer personenbezogenen Daten. Die nachfolgende Erklärung gibt Ihnen einen Überblick darüber, wie wir diesen Schutz gewährleisten und welche Daten zu welchem Zweck verarbeitet werden (gemäß DSGVO / GDPR).
        </p>

        <dl className="legal-fields">
          <div>
            <dt>Verantwortliche Stelle</dt>
            <dd>Prof. Dr. Sameer Joshi &amp; Thorsten Buehrmann</dd>
          </div>
          <div>
            <dt>Kontakt Datenschutz</dt>
            <dd>privacy@thequantumimperative.com</dd>
          </div>
          <div>
            <dt>Publikationsportal</dt>
            <dd>The Quantum Imperative (The Convergence Series)</dd>
          </div>
          <div>
            <dt>Tracking- &amp; Werbe-Cookies</dt>
            <dd>Keine (0 Cookies / Kein User-Tracking)</dd>
          </div>
          <div>
            <dt>Drittlandübermittlung</dt>
            <dd>Ausschließlich bei aktiver Link-Betätigung (Amazon / Quasality)</dd>
          </div>
        </dl>

        <h3>1. Grundsätzliches zur Datenverarbeitung</h3>
        <p>
          Diese Webseite ist als datensparsame Informationsseite zum Buch <em>The Quantum Imperative</em> konzipiert. Wir verzichten vollständig auf den Einsatz von Analyse-Tools, Tracking-Pixeln, Marketing-Cookies oder Benutzerregistrierungen.
        </p>

        <h3>2. Server-Log-Dateien &amp; Hosting</h3>
        <p>
          Beim Aufruf unserer Website erfasst unser Hosting-Dienstleister (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser an uns übermittelt:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "#b3aea5", fontSize: "0.95rem", lineHeight: "1.7" }}>
          <li>Browsertyp und Browserversion sowie verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
          <li>Uhrzeit und Datum der Serveranfrage</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem sicheren, stabilen und fehlerfreien Betrieb unseres Online-Angebots.
        </p>

        <h3>3. Externe Verlinkungen zu Amazon &amp; Partnerseiten</h3>
        <p>
          Auf unserer Webseite befinden sich Links zu Amazon.com (sowie den jeweiligen Länder-Stores) zur Buchbestellung, sowie zu Quasality.ai und TheConvergencePlaybook.com.
        </p>
        <p>
          Eine Datenübertragung an diese Drittanbieter erfolgt erst, wenn Sie einen solchen Link aktiv anklicken. Nach der Weiterleitung gelten die Datenschutzbestimmungen des jeweiligen Plattformbetreibers.
        </p>

        <h3>4. SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h3>5. Ihre Rechte als betroffene Person</h3>
        <p>
          Ihnen stehen nach der Datenschutz-Grundverordnung (DSGVO) folgende gesetzliche Rechte zu:
        </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "24px", color: "#b3aea5", fontSize: "0.95rem", lineHeight: "1.7" }}>
          <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
          <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht auf unverzügliche Berichtigung unrichtiger Daten.</li>
          <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen („Recht auf Vergessenwerden“).</li>
          <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
          <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.</li>
          <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.</li>
          <li><strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
        </ul>
        <p>
          Zur Geltendmachung Ihrer Rechte genügt eine formlose Mitteilung per E-Mail an <strong>privacy@thequantumimperative.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}
