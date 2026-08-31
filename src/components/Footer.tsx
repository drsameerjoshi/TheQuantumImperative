import React, { useState } from 'react';
import {
  Shield,
  BookOpen,
  ShoppingBag,
  ExternalLink,
  Check,
  Send,
} from 'lucide-react';

interface FooterProps {
  onOpenSummary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSummary }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 text-slate-400 overflow-hidden pt-20 pb-12">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-gold-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Brand, Briefing Form & Institutional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Col 1: Brand & Sovereignty Footprint (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-obsidian-900 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-glow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-cinzel tracking-[0.2em] font-bold text-slate-100 text-base">
                  THE QUANTUM IMPERATIVE
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold-500/80">
                  THE CONVERGENCE SERIES • VOLUME II
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed mb-6 max-w-md">
              The execution architecture for institutional survival in the quantum era. Providing leaders with actionable blueprints across compute, causal AI, post-quantum cryptography, and energy baseload.
            </p>

            <div className="p-4 rounded-xl bg-obsidian-900/80 border border-slate-800/90 text-[11px] font-mono space-y-1.5 w-full max-w-md">
              <div className="flex justify-between">
                <span className="text-slate-500">OFFICIAL ISBN:</span>
                <span className="text-gold-300 font-bold">978-1-0681840-2-4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">AUTHORS:</span>
                <span className="text-slate-200">Prof. Dr. Sameer Joshi & Thorsten Buehrmann</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">DOMAIN:</span>
                <span className="text-quantum-300">TheQuantumImperative.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Institutional Affiliations & Exploration (3 cols) */}
          <div className="lg:col-span-3">
            <div className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Architectural Blueprints
            </div>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#thesis" className="hover:text-gold-300 transition-colors">
                  Core Manifesto & Warning
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-gold-300 transition-colors">
                  The Sovereign Stack (6 Layers)
                </a>
              </li>
              <li>
                <a href="#covenant" className="hover:text-gold-300 transition-colors">
                  The Quantum Covenant (4 Pillars)
                </a>
              </li>
              <li>
                <a href="#covenant" className="hover:text-gold-300 transition-colors">
                  100-Day CEO Action Plan
                </a>
              </li>
              <li>
                <a href="#quotes" className="hover:text-gold-300 transition-colors">
                  Lines for the Stage (Aphorisms)
                </a>
              </li>
              <li>
                <a href="#authors" className="hover:text-gold-300 transition-colors">
                  Author Dossiers & Research
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900">
              <div className="font-cinzel text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-2">
                The Convergence Series & Ecosystem
              </div>
              <div className="space-y-2 text-xs">
                <a
                  href="https://theconvergenceplaybook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  <span>The Convergence Playbook (Vol I)</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
                <div>
                  <a
                    href="https://quasality.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-quantum-300 hover:text-quantum-200 transition-colors"
                  >
                    <span>Quasality.ai (Quantum Causal AI)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Keynote & Executive Briefing Inquiries (4 cols) */}
          <div className="lg:col-span-4">
            <div className="font-cinzel text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Executive Briefings & Press
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
              Request a confidential board briefing on Sovereign Stack auditing or download the official press kit.
            </p>

            {/* Briefing form */}
            <form onSubmit={handleNewsletter} className="space-y-2 mb-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter institutional email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-400/80 pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-gold-gradient text-obsidian-950 flex items-center justify-center font-bold"
                  aria-label="Submit"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {submitted && (
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Briefing request received. Our office will respond shortly.</span>
                </div>
              )}
            </form>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenSummary}
                className="btn-glass text-xs py-2 px-3 justify-center w-full"
              >
                <BookOpen className="w-3.5 h-3.5 text-quantum-400" />
                <span>Executive Summary</span>
              </button>

              <a
                href="https://www.amazon.com/dp/B0DXYZ1234"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs py-2 px-3 justify-center w-full"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-obsidian-950" />
                <span>Amazon KDP</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal Imprint & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Prof. Dr. Sameer Joshi & Thorsten Buehrmann. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>ISBN 978-1-0681840-2-4</span>
            <span>•</span>
            <a href="https://quasality.ai" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">
              Quasality™
            </a>
            <span>•</span>
            <span className="hover:text-slate-300">Legal Imprint & Privacy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
