import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AMAZON_URL, assets } from "@/content/siteData";

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site-root legal-page">
      <a className="skip-link" href="#legal-content">
        Skip to content
      </a>

      {/* Header matching main page branding */}
      <header className="legal-header">
        <a className="brand" href="/" aria-label="The Quantum Imperative — home">
          <img
            className="brand__seal"
            src={assets.seal.md}
            width="44"
            height="44"
            alt="The Quantum Imperative Seal"
          />
          <span className="brand__text">
            <strong>The Quantum Imperative</strong>
            <small>The Convergence Series · Volume II</small>
          </span>
        </a>
        <a className="legal-back" href="/">
          <ArrowLeft aria-hidden="true" size={16} />
          <span>Back to the book</span>
        </a>
      </header>

      {/* Main Legal Content Container */}
      <main id="legal-content" className="legal-main">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Last Updated · {updated}</p>
        <div className="legal-document">{children}</div>
      </main>

      {/* Ceremonial Roman Seal Divider */}
      <div className="ceremonial-divider" aria-hidden="true">
        <span />
        <img src={assets.seal.md} width="50" height="50" alt="" />
        <span />
      </div>

      {/* Footer exactly matching the main landing page */}
      <footer className="site-footer">
        <div className="section-shell site-footer__top">
          <a className="footer-brand" href="/">
            <img src={assets.seal.sm} width="40" height="40" alt="" />
            <span>
              <strong>The Quantum Imperative</strong>
              <small>The Convergence Series · Volume II</small>
            </span>
          </a>
          <nav aria-label="Footer navigation">
            <a href="/imprint">Imprint / Impressum</a>
            <a href="/privacy">Privacy / Datenschutz</a>
            <a href={AMAZON_URL} rel="noopener noreferrer">
              Amazon <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </nav>
        </div>
        <div className="section-shell site-footer__bottom">
          <p>© 2026 Sameer Joshi &amp; Thorsten Buehrmann. All rights reserved.</p>
          <a href="#legal-content">
            Back to top <ArrowRight aria-hidden="true" size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
