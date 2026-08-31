import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Cpu,
  Server,
  BrainCircuit,
  Lock,
  Users,
  ShieldCheck,
  CheckCircle,
  XCircle,
  AlertOctagon,
  Sparkles,
  Gauge,
} from 'lucide-react';
import { SOVEREIGN_STACK_LAYERS, CROSS_CUTTING_AUDITABILITY } from '../data/stackData';

const layerIcons = [Zap, Cpu, Server, BrainCircuit, Lock, Users];

export const SovereignStack: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'owned' | 'subscriber'>('owned');
  
  // Interactive Assessment Quiz State
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [scores, setScores] = useState<Record<number, number>>({
    0: 50,
    1: 40,
    2: 60,
    3: 30,
    4: 45,
    5: 55,
  });

  const activeLayer = SOVEREIGN_STACK_LAYERS[selectedLayerIndex];
  const ActiveIcon = layerIcons[selectedLayerIndex];

  // Calculate overall sovereign readiness percentage
  const totalScore = Math.round(
    Object.values(scores).reduce((acc, curr) => acc + curr, 0) / 6
  );

  const getScoreVerdict = (score: number) => {
    if (score < 40) return { label: "High Sovereignty Debt (Critical Fragility)", color: "text-red-400 border-red-500/40 bg-red-950/40" };
    if (score < 70) return { label: "Transitioning / Hybrid Dependency", color: "text-amber-400 border-amber-500/40 bg-amber-950/40" };
    return { label: "Sovereign Institutional Autonomy", color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40" };
  };

  return (
    <section id="stack" className="relative py-28 border-t border-slate-900 overflow-hidden bg-obsidian-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-quantum-500/40 text-quantum-300 text-xs font-cinzel tracking-[0.2em] uppercase mb-4 shadow-quantum-glow-sm">
            <Cpu className="w-3.5 h-3.5 text-quantum-400" />
            <span>Capability Blueprint</span>
          </div>

          <h2 className="font-cinzel tracking-[0.08em] font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase text-slate-100 mb-6">
            The Sovereign Stack Audit
          </h2>

          <p className="text-slate-300 font-light text-base leading-relaxed">
            True institutional autonomy cannot exist at the software layer alone. Explore the 6 physical-to-cognitive layers required to escape subscription lock-in and establish verifiable sovereignty.
          </p>

          {/* Assessment Trigger Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsAssessmentOpen(!isAssessmentOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/40 text-gold-300 hover:border-gold-400 text-xs font-cinzel tracking-wider uppercase shadow-gold-glow-sm transition-all"
            >
              <Gauge className="w-4 h-4 text-gold-400" />
              <span>{isAssessmentOpen ? 'Hide Sovereign Readiness Calculator' : 'Launch Sovereign Readiness Assessment'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Readiness Assessment Drawer */}
        <AnimatePresence>
          {isAssessmentOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-16 p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-gold-500/40 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-slate-100 mb-1">
                    Institutional Sovereignty Health Scorecard
                  </h3>
                  <p className="text-xs text-slate-400">
                    Adjust your organization's capability level across each layer to calculate your Sovereign Posture.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-obsidian-950 px-5 py-3 rounded-xl border border-slate-800">
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Overall Score</div>
                    <div className="text-2xl font-cinzel font-bold text-gold-400">{totalScore}%</div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg border text-xs font-mono ${getScoreVerdict(totalScore).color}`}>
                    {getScoreVerdict(totalScore).label}
                  </div>
                </div>
              </div>

              {/* Slider grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {SOVEREIGN_STACK_LAYERS.map((layer) => (
                  <div key={layer.id} className="p-4 rounded-xl bg-obsidian-950/70 border border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-cinzel font-bold text-slate-200 truncate max-w-[200px]">
                        L{layer.id}: {layer.name.split(':')[1]}
                      </span>
                      <span className="font-mono text-xs text-quantum-300 font-semibold">{scores[layer.id]}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={scores[layer.id]}
                      onChange={(e) =>
                        setScores({ ...scores, [layer.id]: Number(e.target.value) })
                      }
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                      <span>Rented SaaS</span>
                      <span>Owned Sovereign</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Layer Selection Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {SOVEREIGN_STACK_LAYERS.map((layer, index) => {
            const Icon = layerIcons[index];
            const isSelected = selectedLayerIndex === index;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerIndex(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-obsidian-850 to-obsidian-900 border-gold-400 shadow-gold-glow scale-[1.02]'
                    : 'bg-obsidian-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-obsidian-900'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                    LAYER 0{layer.id}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-slate-400'}`} />
                </div>
                <div className={`font-cinzel text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                  {layer.name.split(':')[1] || layer.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Layer Deep Dive Card */}
        <div className="glass-card p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden">
          
          {/* Top Bar of Card: Layer Title & Perspective Switcher */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-obsidian-950 border border-gold-500/40 flex items-center justify-center shadow-gold-glow-sm">
                <ActiveIcon className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gold-400 font-bold uppercase tracking-widest">
                    LAYER 0{activeLayer.id} • {activeLayer.codename}
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100">
                  {activeLayer.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {activeLayer.tagline}
                </p>
              </div>
            </div>

            {/* Mode Switcher: Subscriber Pitfall vs Owned Capability */}
            <div className="flex items-center p-1.5 rounded-xl bg-obsidian-950 border border-slate-800 w-full sm:w-auto">
              <button
                onClick={() => setViewMode('owned')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'owned'
                    ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-bold shadow-gold-glow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Owned Capability</span>
              </button>

              <button
                onClick={() => setViewMode('subscriber')}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'subscriber'
                    ? 'bg-red-950/80 border border-red-500/50 text-red-300 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <XCircle className="w-3.5 h-3.5 text-red-400" />
                <span>Subscriber Pitfall</span>
              </button>
            </div>
          </div>

          {/* Main Content Area: Contrast Display */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* View Mode Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {viewMode === 'owned' ? (
                  <motion.div
                    key="owned"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-obsidian-900/90 to-obsidian-950 border border-gold-500/30"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400">
                        <CheckCircle className="w-4 h-4 text-gold-400" />
                        <span>Sovereign Architecture Protocol</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[11px] font-mono text-gold-300 font-semibold">
                        {activeLayer.ownedCapability.metric}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-slate-100 mb-3">
                      {activeLayer.ownedCapability.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {activeLayer.ownedCapability.description}
                    </p>

                    <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 mb-6">
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                        Physical / Cryptographic Implementation Architecture
                      </div>
                      <div className="text-xs font-mono text-quantum-300 font-semibold">
                        {activeLayer.ownedCapability.architecture}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                        Key Sovereign Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeLayer.keyTechnologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-obsidian-950 border border-gold-500/20 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="subscriber"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-obsidian-950 border border-red-500/30"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400">
                        <AlertOctagon className="w-4 h-4 text-red-400" />
                        <span>Sovereignty Debt & Exposure</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[11px] font-mono text-red-300 font-semibold">
                        {activeLayer.subscriberPitfall.metric}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-xl font-bold text-slate-100 mb-3">
                      {activeLayer.subscriberPitfall.title}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {activeLayer.subscriberPitfall.description}
                    </p>

                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/20 mb-6">
                      <div className="text-[10px] font-mono uppercase text-red-400 mb-1">
                        Systemic Vulnerability
                      </div>
                      <div className="text-xs text-red-200 font-light">
                        {activeLayer.subscriberPitfall.vulnerability}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800">
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                        Strategic Board Risk
                      </div>
                      <div className="text-xs italic text-slate-300">
                        "{activeLayer.strategicRisk}"
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Sovereign Action Directive */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/30">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Executive Directive</span>
                </div>
                <h5 className="font-cinzel text-sm font-bold text-slate-100 uppercase mb-3">
                  Sovereign Action Mandate
                </h5>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  {activeLayer.sovereignAction}
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Governance Obligation:</span>
                  <span className="text-gold-400 font-bold">OBL-0{activeLayer.id + 1}</span>
                </div>
              </div>

              {/* Navigation between layers */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() =>
                    setSelectedLayerIndex(
                      selectedLayerIndex === 0
                        ? SOVEREIGN_STACK_LAYERS.length - 1
                        : selectedLayerIndex - 1
                    )
                  }
                  className="btn-glass text-xs py-2.5 flex-1 justify-center"
                >
                  <span>← Previous Layer</span>
                </button>
                <button
                  onClick={() =>
                    setSelectedLayerIndex(
                      (selectedLayerIndex + 1) % SOVEREIGN_STACK_LAYERS.length
                    )
                  }
                  className="btn-glass text-xs py-2.5 flex-1 justify-center border-gold-500/30 text-gold-300"
                >
                  <span>Next Layer →</span>
                </button>
              </div>
            </div>

          </div>

          {/* Cross-Cutting Sovereign Auditability Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 bg-obsidian-950/60 p-6 rounded-xl border border-quantum-500/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-quantum-400" />
                <span className="font-cinzel text-sm font-bold text-slate-100 uppercase">
                  {CROSS_CUTTING_AUDITABILITY.title}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-quantum-500/10 text-quantum-300 font-mono text-[10px] uppercase font-bold">
                {CROSS_CUTTING_AUDITABILITY.codename}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light mb-4 leading-relaxed">
              {CROSS_CUTTING_AUDITABILITY.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {CROSS_CUTTING_AUDITABILITY.requirements.map((req: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[11px] font-mono text-slate-300 bg-obsidian-900/90 px-3 py-2 rounded-lg border border-slate-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-quantum-400 shrink-0" />
                  <span className="truncate">{req}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
