/** Design reminder: legal routes remain plain, legible Roman editorial documents—not card dashboards. */
import { ArrowLeft } from "lucide-react";
import { assets } from "@/content/siteData";

export default function LegalLayout({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#legal-content">Skip to content</a>
      <header className="legal-header">
        <a className="brand" href="/" aria-label="The Quantum Imperative — home">
          <img className="brand__seal" src={assets.seal.md} width="44" height="44" alt="" />
          <span className="brand__text"><strong>The Quantum Imperative</strong><small>The Convergence Series · Volume II</small></span>
        </a>
        <a className="legal-back" href="/"><ArrowLeft aria-hidden="true" />Back to the book</a>
      </header>
      <main id="legal-content" className="legal-main">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-updated">Status: {updated}</p>
        <div className="legal-document">{children}</div>
      </main>
      <footer className="legal-footer">Private staging draft · No production publication · © 2026 Sameer Joshi & Thorsten Buehrmann</footer>
    </div>
  );
}

