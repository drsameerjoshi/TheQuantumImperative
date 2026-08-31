import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BookOpen,
  ShoppingBag,
  Layers,
  Sparkles,
  CheckCircle2,
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-2xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-obsidian-900 border border-gold-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-800 bg-obsidian-950/80 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-obsidian-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold">
                  EXECUTIVE BRIEF & CHAPTER DIRECTORY
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-slate-100">
                  {EXECUTIVE_SUMMARY.bookTitle}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-obsidian-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
            
            {/* Core Thesis Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-950 to-obsidian-900 border border-gold-500/30">
              <div className="text-xs font-mono uppercase text-gold-400 tracking-wider mb-2">
                Executive Synthesis
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed whitespace-pre-line">
                {EXECUTIVE_SUMMARY.coreThesis}
              </p>
            </div>

            {/* Key Paradigm Shifts */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-quantum-400" />
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

            {/* Complete Chapter Directory */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-gold-400" />
                <h4 className="font-cinzel text-lg font-bold text-slate-100 uppercase">
                  Chapter Directory & Key Takeaways
                </h4>
              </div>

              <div className="space-y-3">
                {EXECUTIVE_SUMMARY.chapters.map((ch) => (
                  <div
                    key={ch.number}
                    className="p-4 rounded-xl bg-obsidian-950 border border-slate-800/80 hover:border-gold-500/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gold-400">
                          CH {ch.number}
                        </span>
                        <h5 className="font-cinzel text-sm font-bold text-slate-100">
                          {ch.title}
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        {ch.subtitle}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-obsidian-900 border border-slate-850 text-xs font-light text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{ch.keyTakeaway}</span>
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
