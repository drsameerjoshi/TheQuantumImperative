import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Shield,
  ArrowUpRight,
} from 'lucide-react';

export const Authors: React.FC = () => {
  const authors = [
    {
      name: "Prof. Dr. Sameer Joshi",
      title: "Professor, Scientist & Deep-Tech Executive",
      subtitle: "Former Siemens Vice President & Business CEO • Co-Founder Quasality",
      bio: "Prof. Dr. Sameer Joshi is a professor of Business Administration and Artificial Intelligence, deep-tech founder, and former Siemens Vice President and business CEO. With decades bridging high-stakes industrial operations, quantum computing paradigms, and board-level governance, he advises sovereign institutions and industrial leaders on establishing sovereign technology stacks.",
      credentials: [
        { label: "Executive Leadership", value: "Former Siemens VP & Business CEO" },
        { label: "Academic Chair", value: "Professor of Business Admin & AI" },
        { label: "Deep-Tech Venture", value: "Co-Founder & Chief Scientist, Quasality" },
        { label: "Core Focus", value: "Quantum-Causal Systems & Sovereign Strategy" },
      ],
      affiliations: ["Quasality AI", "IU International University", "The Convergence Series"],
    },
    {
      name: "Thorsten Buehrmann",
      title: "Strategist, Systems Architect & Serial Entrepreneur",
      subtitle: "Co-Author & Co-Founder Quasality",
      bio: "Thorsten Buehrmann is a visionary strategist, systems architect, and serial entrepreneur focused on causal artificial intelligence, quantum technologies, operational resilience, and sovereignty. Together with Prof. Dr. Joshi, he co-authors The Convergence Series to equip global leaders with actionable execution architectures before dependency turns into structural debt.",
      credentials: [
        { label: "Systems Architecture", value: "Enterprise Deep-Tech Strategist" },
        { label: "Venture Architecture", value: "Co-Founder, Quasality" },
        { label: "Series Co-Author", value: "The Convergence Series (Vol I & II)" },
        { label: "Core Focus", value: "Causal Graph AI & Sovereign Resilience" },
      ],
      affiliations: ["Quasality AI", "The Convergence Series", "Industrial Intelligence Lab"],
    },
  ];

  return (
    <section id="authors" className="relative py-28 border-t border-slate-900 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-gold-500/40 text-gold-300 text-xs font-cinzel tracking-[0.2em] uppercase mb-4 shadow-gold-glow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
            <span>The Authors & Architects</span>
          </div>

          <h2 className="font-cinzel tracking-[0.08em] font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase text-slate-100 mb-6">
            About the Authors
          </h2>

          <p className="text-slate-300 font-light text-base leading-relaxed">
            Pioneering the convergence of causal artificial intelligence, quantum infrastructure, and institutional sovereignty.
          </p>
        </div>

        {/* Dual Author Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-gold-500/30 hover:border-gold-400/60 shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Author Card Top */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase">
                      AUTHOR DOSSIER
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
                      {author.name}
                    </h3>
                    <p className="text-xs font-mono text-quantum-300 mt-1">
                      {author.subtitle}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-obsidian-950 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-glow-sm">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>

                {/* Biography */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-8">
                  {author.bio}
                </p>

                {/* Structured Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {author.credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-obsidian-950/80 border border-slate-800"
                    >
                      <div className="text-[10px] font-mono uppercase text-slate-500">
                        {cred.label}
                      </div>
                      <div className="text-xs font-semibold text-slate-200 mt-0.5">
                        {cred.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Affiliations & Link */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {author.affiliations.map((aff) => (
                    <span
                      key={aff}
                      className="px-2.5 py-1 rounded-md bg-obsidian-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {aff}
                    </span>
                  ))}
                </div>

                <a
                  href="https://quasality.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider uppercase text-gold-400 hover:text-gold-300 font-bold transition-colors shrink-0"
                >
                  <span>Quasality.ai</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Joint Series Proclamation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/20 text-center flex flex-col items-center justify-center"
        >
          <span className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-2">
            The Convergence Series
          </span>
          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-slate-100 mb-2">
            Volume I & Volume II: Architectural Blueprint for Sovereignty
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
            Authored collaboratively by Prof. Dr. Sameer Joshi and Thorsten Buehrmann to formulate actionable frameworks bridging deep physics, causal AI algorithms, and national sovereignty.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
