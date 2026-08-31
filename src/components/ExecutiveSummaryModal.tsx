import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BookOpen,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Layers,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { EXECUTIVE_SUMMARY } from '../data/executiveSummaryData';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-obsidian-950/90 backdrop-blur-xl">
        
        {/* Backdrop click to dismiss */}
        <div
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-obsidian-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-obsidian-950 flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-obsidian-900 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-glow-sm shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gold-400">
                    EXECUTIVE DOSSIER & CHAPTER BLUEPRINT
                  </span>
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-100 mt-0.5">
                  {EXECUTIVE_SUMMARY.bookTitle}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {EXECUTIVE_SUMMARY.subtitle} • {EXECUTIVE_SUMMARY.authors}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-obsidian-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
            
            {/* Core Thesis Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-950 to-obsidian-900 border border-gold-500/30">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-mono tracking-wider uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary Manifesto</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed whitespace-pre-line">
                {EXECUTIVE_SUMMARY.coreThesis}
              </p>
            </div>

            {/* 4 Core Paradigm Shifts */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-quantum-400" />
                <h4 className="font-cinzel text-lg font-bold text-slate-100 uppercase">
                  4 Core Paradigm Shifts
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXECUTIVE_SUMMARY.keyParadigmShifts.map((shift, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 flex flex-col justify-between"
                  >
                    <div className="mb-2">
                      <div className="text-[10px] font-mono uppercase text-red-400 line-through">
                        From: {shift.from}
                      </div>
                      <div className="text-xs font-mono uppercase text-gold-300 font-bold mt-0.5">
                        To: {shift.to}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {shift.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete 4-Part, 10-Chapter Directory */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-4 h-4 text-gold-400" />
                <h4 className="font-cinzel text-lg font-bold text-slate-100 uppercase">
                  The Complete 10-Chapter Architecture
                </h4>
              </div>

              <div className="space-y-6">
                {EXECUTIVE_SUMMARY.parts.map((partGroup) => (
                  <div key={partGroup.part} className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span className="font-mono text-xs font-bold text-gold-400">
                        {partGroup.part}:
                      </span>
                      <span className="font-cinzel text-xs font-bold text-slate-200 uppercase tracking-wider">
                        {partGroup.partTitle}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {partGroup.chapters.map((ch) => (
                        <div
                          key={ch.number}
                          className="p-4 rounded-xl bg-obsidian-950 border border-slate-800/80 hover:border-gold-500/30 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-quantum-300">
                                CH {ch.number}
                              </span>
                              <h5 className="font-cinzel text-sm font-bold text-slate-100">
                                {ch.title}
                              </h5>
                            </div>
                          </div>

                          <div className="text-[11px] font-mono text-slate-400 mb-2">
                            {ch.subtitle}
                          </div>

                          <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-850 text-xs font-light text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                            <span>{ch.keyTakeaway}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Metadata Footnote */}
            <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>
                <span>ISBN: </span>
                <strong className="text-slate-200">{EXECUTIVE_SUMMARY.isbn}</strong>
              </div>
              <div>
                <span>Authors: </span>
                <strong className="text-slate-200">{EXECUTIVE_SUMMARY.authors}</strong>
              </div>
              <div>
                <span>Series: </span>
                <strong className="text-gold-400">{EXECUTIVE_SUMMARY.series}</strong>
                <a
                  href="https://theconvergenceplaybook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-quantum-300 hover:text-quantum-200 underline underline-offset-2"
                >
                  (Explore Vol I: The Convergence Playbook ↗)
                </a>
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 border-t border-slate-800 bg-obsidian-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
              Order the unabridged hardcover or Kindle edition for complete formulas & protocols.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="btn-glass text-xs py-3 px-5 flex-1 sm:flex-initial"
              >
                <span>Close Brief</span>
              </button>
              <a
                href="https://www.amazon.com/dp/B0DXYZ1234"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs py-3 px-6 flex-1 sm:flex-initial"
              >
                <ShoppingBag className="w-4 h-4 text-obsidian-950" />
                <span>Order on Amazon</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
