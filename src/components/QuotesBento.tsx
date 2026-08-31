import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Copy, Check } from 'lucide-react';
import { STAGE_QUOTES, QuoteItem } from '../data/quotesData';

export const QuotesBento: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (item: QuoteItem) => {
    const textToCopy = `"${item.quote}" — ${item.author} (The Quantum Imperative)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="quotes" className="relative py-28 border-t border-slate-900 overflow-hidden bg-obsidian-950/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-gold-500/40 text-gold-300 text-xs font-cinzel tracking-[0.2em] uppercase mb-4 shadow-gold-glow-sm">
            <Quote className="w-3.5 h-3.5 text-gold-400" />
            <span>Strategic Aphorisms</span>
          </div>

          <h2 className="font-cinzel tracking-[0.08em] font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase text-slate-100 mb-6">
            Lines for the Stage
          </h2>

          <p className="text-slate-300 font-light text-base leading-relaxed">
            Core aphorisms and strategic maxims from <strong className="text-white font-medium">The Quantum Imperative</strong> that capture the realities of institutional survival, sovereign capability, and the technological frontier.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Large Featured Card - Germany preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-950 border border-gold-500/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-[11px] uppercase font-bold tracking-widest">
                  {STAGE_QUOTES[0].category}
                </span>
                <button
                  onClick={() => handleCopy(STAGE_QUOTES[0])}
                  className="p-2 rounded-lg bg-obsidian-950/80 border border-slate-800 hover:border-gold-500/40 text-slate-400 hover:text-gold-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                  title="Copy quote to clipboard"
                >
                  {copiedId === STAGE_QUOTES[0].id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <blockquote className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide leading-snug text-slate-100 mb-6 drop-shadow-sm">
                "{STAGE_QUOTES[0].quote}"
              </blockquote>

              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
                {STAGE_QUOTES[0].context}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="text-gold-400/90 font-semibold">{STAGE_QUOTES[0].author}</span>
              <span className="italic text-slate-500">{STAGE_QUOTES[0].chapterRef}</span>
            </div>
          </motion.div>

          {/* Card 2: Owning Actuators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 p-8 rounded-3xl bg-obsidian-900 border border-slate-800 hover:border-quantum-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-quantum-500/10 border border-quantum-500/30 text-quantum-300 font-mono text-[11px] uppercase font-bold tracking-widest">
                  {STAGE_QUOTES[1].category}
                </span>
                <button
                  onClick={() => handleCopy(STAGE_QUOTES[1])}
                  className="p-2 rounded-lg bg-obsidian-950/80 border border-slate-800 hover:border-quantum-500/40 text-slate-400 hover:text-quantum-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  {copiedId === STAGE_QUOTES[1].id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <blockquote className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-wide leading-snug text-slate-100 mb-4">
                "{STAGE_QUOTES[1].quote}"
              </blockquote>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                {STAGE_QUOTES[1].context}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              <div className="text-quantum-400 font-semibold">{STAGE_QUOTES[1].chapterRef}</div>
            </div>
          </motion.div>

          {/* Card 3: Rents Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 p-8 rounded-3xl bg-obsidian-900 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-[11px] uppercase font-bold tracking-widest">
                  {STAGE_QUOTES[2].category}
                </span>
                <button
                  onClick={() => handleCopy(STAGE_QUOTES[2])}
                  className="p-2 rounded-lg bg-obsidian-950/80 border border-slate-800 hover:border-gold-500/40 text-slate-400 hover:text-gold-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  {copiedId === STAGE_QUOTES[2].id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <blockquote className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-wide leading-snug text-slate-100 mb-4">
                "{STAGE_QUOTES[2].quote}"
              </blockquote>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                {STAGE_QUOTES[2].context}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              <div className="text-gold-400 font-semibold">{STAGE_QUOTES[2].chapterRef}</div>
            </div>
          </motion.div>

          {/* Card 4: Verify what you own - Large anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-950 border border-quantum-500/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-quantum-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-quantum-500/10 border border-quantum-500/30 text-quantum-300 font-mono text-[11px] uppercase font-bold tracking-widest">
                  {STAGE_QUOTES[3].category}
                </span>
                <button
                  onClick={() => handleCopy(STAGE_QUOTES[3])}
                  className="p-2 rounded-lg bg-obsidian-950/80 border border-slate-800 hover:border-quantum-500/40 text-slate-400 hover:text-quantum-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                >
                  {copiedId === STAGE_QUOTES[3].id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <blockquote className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide leading-snug text-slate-100 mb-6 drop-shadow-sm">
                "{STAGE_QUOTES[3].quote}"
              </blockquote>

              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
                {STAGE_QUOTES[3].context}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="text-quantum-300 font-semibold">{STAGE_QUOTES[3].author}</span>
              <span className="italic text-slate-500">{STAGE_QUOTES[3].chapterRef}</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
