import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Calendar, ArrowUpRight, Scale, AlertTriangle } from 'lucide-react';

interface CoreThesisProps {
  onOpenSummary: () => void;
}

export const CoreThesis: React.FC<CoreThesisProps> = ({ onOpenSummary }) => {
  const instruments = [
    {
      number: '01',
      title: 'The Quantum Covenant Architecture',
      tagline: 'Binding Institutional Governance',
      description: 'A 4-pillar, 12-obligation legal and technical covenant designed to eliminate remote kill-switches, mandate white-box algorithmic lineage, and secure sovereign cryptographic root keys.',
      icon: Scale,
      href: '#covenant',
      color: 'gold',
    },
    {
      number: '02',
      title: 'The Sovereign Stack',
      tagline: '6 Physical-to-Cognitive Layers',
      description: 'An actionable capability blueprint spanning Layer 0 (behind-the-meter energy) to Layer 5 (in-house talent), enforced by continuous mathematical sovereign auditability.',
      icon: Layers,
      href: '#stack',
      color: 'quantum',
    },
    {
      number: '03',
      title: 'The 100-Day CEO Action Plan',
      tagline: 'Tactical Execution Timeline',
      description: 'A phased, board-ready roadmap enabling C-suites and state ministries to audit dependency debt, escrow source netlists, deploy dual-stack mirrors, and ratify institutional sovereignty.',
      icon: Calendar,
      href: '#covenant',
      color: 'ember',
    },
  ];

  return (
    <section id="thesis" className="relative py-28 border-t border-slate-900 overflow-hidden">
      {/* Subtle circuit background grid */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Proclamation Banner */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900 border border-gold-500/30 text-gold-300 text-xs font-cinzel tracking-[0.2em] uppercase mb-6 shadow-gold-glow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>The Core Proclamation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel tracking-[0.08em] font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase text-slate-100 leading-tight mb-8"
          >
            "The Next Dependency Will Not Be Territorial.{' '}
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              It Will Determine Who Remains Sovereign.
            </span>"
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Quantum power will belong to those who control the systems on which decisions, infrastructure, and industrial capacity depend. <strong className="text-white font-medium">The Quantum Imperative</strong> provides the execution architecture for leaders navigating quantum, AI, robotics, energy, space, and sovereign power—showing what to own, secure, govern, and build before dependency hardens into irreversible <span className="text-ember-400 font-semibold underline decoration-ember-500/50 underline-offset-4">sovereignty debt</span>.
          </motion.p>
        </div>

        {/* Warning / Paradigm Shift Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2.5 text-ember-400 text-xs font-mono tracking-wider uppercase mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Illusion of Convenience</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl text-slate-100 font-bold mb-3">
                Subscriber Economy vs. Verifiable Sovereign Capability
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Leasing computational intelligence from foreign hyperscaler APIs offers transient convenience while silently siphoning institutional autonomy. When crisis strikes, API endpoints can be terminated, encryption keys revoked, and power rationed. Real sovereignty cannot be purchased as a recurring monthly subscription.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <button
                onClick={onOpenSummary}
                className="btn-gold text-xs py-3 w-full justify-center"
              >
                <span>Read Full Executive Thesis</span>
              </button>
              <a
                href="#stack"
                className="btn-glass text-xs py-3 w-full justify-center text-quantum-300 hover:text-gold-300"
              >
                <span>Explore The 6 Layers</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Three Practical Instruments Grid */}
        <div className="mb-8">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-2">
              Actionable Frameworks & Governance
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold uppercase text-slate-100">
              Three Practical Instruments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {instruments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative p-8 rounded-2xl bg-obsidian-900/80 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between shadow-card-dark hover:shadow-gold-glow-sm"
                >
                  {/* Top header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-gold-400/80 px-2.5 py-1 rounded-md bg-obsidian-950 border border-gold-500/20">
                        INSTRUMENT {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-slate-800 group-hover:border-gold-500/40 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <h4 className="font-cinzel text-lg sm:text-xl font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs font-mono uppercase tracking-wider text-quantum-300/90 mb-4">
                      {item.tagline}
                    </p>

                    <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Anchor link */}
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-cinzel font-bold tracking-wider uppercase text-gold-400 group-hover:text-gold-300 group-hover:translate-x-1 transition-all pt-4 border-t border-slate-800/80"
                  >
                    <span>Inspect Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
