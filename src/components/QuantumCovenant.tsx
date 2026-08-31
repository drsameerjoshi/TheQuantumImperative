import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Gavel,
} from 'lucide-react';
import {
  COVENANT_PILLARS,
  ENFORCEMENT_INSTRUMENTS,
  CEO_100_DAY_PLAN,
} from '../data/covenantData';

export const QuantumCovenant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'instruments' | 'playbook'>('pillars');
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);
  const [expandedInstrumentId, setExpandedInstrumentId] = useState<number | null>(1);
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);

  const activePillar = COVENANT_PILLARS[selectedPillarIndex];
  const activePhase = CEO_100_DAY_PLAN[selectedPhaseIndex];

  return (
    <section id="covenant" className="relative py-28 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-gold-500/40 text-gold-300 text-xs font-cinzel tracking-[0.2em] uppercase mb-4 shadow-gold-glow-sm">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Governance & Legal Architecture</span>
          </div>

          <h2 className="font-cinzel tracking-[0.08em] font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase text-slate-100 mb-6">
            The Quantum Covenant
          </h2>

          <p className="text-slate-300 font-light text-base leading-relaxed">
            A binding institutional governance engine replacing toothless policy declarations with 12 verifiable obligations, 6 enforcement instruments, and a 100-day tactical CEO execution roadmap.
          </p>

          {/* Tab Navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-obsidian-900 border border-slate-800 max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-cinzel tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pillars'
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-gold-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>4 Pillars & 12 Obligations</span>
            </button>

            <button
              onClick={() => setActiveTab('instruments')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-cinzel tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                activeTab === 'instruments'
                  ? 'bg-quantum-gradient text-obsidian-950 font-bold shadow-quantum-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Gavel className="w-4 h-4" />
              <span>6 Enforcement Tools</span>
            </button>

            <button
              onClick={() => setActiveTab('playbook')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-cinzel tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                activeTab === 'playbook'
                  ? 'bg-gradient-to-r from-ember-500 to-gold-500 text-obsidian-950 font-bold shadow-ember-glow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>100-Day CEO Plan</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 4 PILLARS & 12 OBLIGATIONS */}
        {activeTab === 'pillars' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Pillar Selector Column */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {COVENANT_PILLARS.map((pillar, index) => {
                const isSelected = selectedPillarIndex === index;
                return (
                  <button
                    key={pillar.number}
                    onClick={() => setSelectedPillarIndex(index)}
                    className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-obsidian-850 border-gold-400 shadow-gold-glow scale-[1.02]'
                        : 'bg-obsidian-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold tracking-widest ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                        PILLAR {pillar.number}
                      </span>
                      <span className="text-[10px] font-mono italic text-slate-500">
                        {pillar.latinName}
                      </span>
                    </div>
                    <div className={`font-cinzel text-base font-bold ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                      {pillar.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Details & Obligations */}
            <div className="lg:col-span-8 glass-card p-6 sm:p-8 border border-gold-500/30">
              <div className="pb-6 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-gold-400 tracking-wider mb-1">
                  <span>PILLAR {activePillar.number} • {activePillar.latinName}</span>
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-slate-100 mb-2">
                  {activePillar.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {activePillar.summary}
                </p>
              </div>

              {/* 3 Obligations under this Pillar */}
              <div className="flex flex-col gap-4">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-widest mb-1">
                  Institutional Obligations & Audit Protocols
                </div>

                {activePillar.obligations.map((obl) => (
                  <div
                    key={obl.code}
                    className="p-5 rounded-xl bg-obsidian-950/80 border border-slate-800/90 hover:border-gold-500/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-xs font-bold">
                          {obl.code}
                        </span>
                        <h4 className="font-cinzel text-sm sm:text-base font-bold text-slate-100">
                          {obl.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                      {obl.requirement}
                    </p>

                    <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-800 text-[11px] font-mono text-quantum-300 flex items-center gap-2">
                      <span className="text-slate-500 uppercase">Audit:</span>
                      <span>{obl.auditMechanism}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: 6 PROPOSED ENFORCEMENT INSTRUMENTS */}
        {activeTab === 'instruments' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ENFORCEMENT_INSTRUMENTS.map((inst) => {
              const isExpanded = expandedInstrumentId === inst.id;
              return (
                <div
                  key={inst.id}
                  onClick={() => setExpandedInstrumentId(isExpanded ? null : inst.id)}
                  className={`p-6 rounded-2xl bg-obsidian-900 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isExpanded
                      ? 'border-quantum-400 shadow-quantum-glow bg-obsidian-850'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-quantum-400 px-2 py-0.5 rounded bg-quantum-500/10 border border-quantum-500/30">
                        {inst.category} Instrument
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        #0{inst.id}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-base font-bold text-slate-100 mb-3">
                      {inst.name}
                    </h4>

                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                      {inst.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                      Enforcement Trigger
                    </div>
                    <div className="text-xs font-mono text-gold-300/90 leading-tight mb-3">
                      {inst.mechanism}
                    </div>

                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                      Institutional Impact
                    </div>
                    <div className="text-xs text-slate-400 font-light leading-tight">
                      {inst.institutionalImpact}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 3: 100-DAY CEO PLAYBOOK */}
        {activeTab === 'playbook' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-10 border border-gold-500/30"
          >
            {/* Phase Selector Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {CEO_100_DAY_PLAN.map((phase, index) => {
                const isSelected = selectedPhaseIndex === index;
                return (
                  <button
                    key={phase.phase}
                    onClick={() => setSelectedPhaseIndex(index)}
                    className={`p-4 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-obsidian-950 border-gold-400 shadow-gold-glow'
                        : 'bg-obsidian-950/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-gold-400 font-bold uppercase mb-1">
                      {phase.phase} • {phase.days}
                    </div>
                    <div className="font-cinzel text-xs sm:text-sm font-bold text-slate-200 truncate">
                      {phase.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Details */}
            <div className="p-6 rounded-2xl bg-obsidian-950 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
                <div>
                  <div className="text-xs font-mono text-gold-400 uppercase tracking-widest mb-1">
                    {activePhase.phase} ({activePhase.days})
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100">
                    {activePhase.title}
                  </h3>
                </div>

                <div className="px-4 py-2 rounded-xl bg-obsidian-900 border border-gold-500/30 text-right">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Target Deliverable</div>
                  <div className="text-xs font-cinzel font-bold text-gold-300">{activePhase.deliverable}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                  Executive Strategic Focus
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {activePhase.focus}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Mandatory Execution Milestones
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activePhase.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-obsidian-900/90 border border-slate-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-light leading-relaxed">
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
