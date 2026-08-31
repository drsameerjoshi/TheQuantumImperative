import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ShoppingBag,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  RotateCw,
  Cpu,
  Flame,
  Pause,
  Play,
} from 'lucide-react';

interface HeroProps {
  onOpenSummary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSummary }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Soft Auto-Flip Timer (Every 7.5 seconds, pauses when user hovers or manually toggles)
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 7500);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered]);

  // Mouse tilt interaction physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateYOffset = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const toggleManualFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting effects matching cover */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gold-500/10 via-quantum-500/10 to-ember-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Volume & Series Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/40 shadow-gold-glow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span className="font-cinzel text-[11px] font-bold tracking-[0.2em] text-gold-300 uppercase">
                  The Convergence Series • Volume II
                </span>
              </div>

              <a
                href="https://theconvergenceplaybook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-900/80 border border-slate-700 hover:border-gold-400/60 text-[10px] font-mono text-slate-300 hover:text-gold-300 transition-all backdrop-blur-md group"
              >
                <BookOpen className="w-3 h-3 text-gold-400" />
                <span>Vol I: The Convergence Playbook</span>
                <ArrowRight className="w-3 h-3 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cinzel tracking-[0.08em] font-extrabold text-3xl sm:text-5xl xl:text-6xl uppercase leading-[1.15] text-slate-50 mb-6"
            >
              The Architecture of{' '}
              <span className="text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm">
                Sovereign Survival
              </span>{' '}
              in the Quantum Era
            </motion.h1>

            {/* Subtitle & Core Thesis */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-4 max-w-2xl"
            >
              Moving beyond aspirational declarations to verifiable institutional capabilities across <strong className="text-quantum-300 font-semibold">compute</strong>, <strong className="text-gold-300 font-semibold">causal AI</strong>, <strong className="text-quantum-300 font-semibold">cryptography</strong>, and <strong className="text-ember-400 font-semibold">energy baseload</strong>.
            </motion.p>

            {/* Author Attribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex items-center gap-3 text-sm text-gold-400/90 font-cinzel tracking-wider uppercase mb-8"
            >
              <span>By Prof. Dr. Sameer Joshi</span>
              <span className="text-slate-600">•</span>
              <span>Thorsten Buehrmann</span>
            </motion.div>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8"
            >
              <div className="p-3 rounded-xl bg-obsidian-900/60 border border-gold-500/20 backdrop-blur-md flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-200">The Covenant</div>
                  <div className="text-[10px] text-slate-400">12 Sovereign Obligations</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/60 border border-quantum-500/20 backdrop-blur-md flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-quantum-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-200">Sovereign Stack</div>
                  <div className="text-[10px] text-slate-400">6 Capability Layers</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-900/60 border border-ember-500/20 backdrop-blur-md flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Flame className="w-4 h-4 text-ember-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-slate-200">100-Day CEO Plan</div>
                  <div className="text-[10px] text-slate-400">Execution Timeline</div>
                </div>
              </div>
            </motion.div>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://www.amazon.com/dp/B0DXYZ1234"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto px-7 py-4 text-sm"
              >
                <ShoppingBag className="w-4 h-4 text-obsidian-950" />
                <span>Order on Amazon</span>
                <ArrowRight className="w-4 h-4 text-obsidian-950" />
              </a>

              <button
                onClick={onOpenSummary}
                className="btn-glass w-full sm:w-auto px-6 py-4 text-sm hover:border-gold-400/60"
              >
                <BookOpen className="w-4 h-4 text-quantum-400" />
                <span>Read Executive Brief</span>
              </button>

              <a
                href="#stack"
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-400 hover:text-gold-300 transition-colors py-2 px-1"
              >
                <span>Audit Your Sovereign Stack</span>
                <span>↓</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive & Soft Auto-Flipping Floating Book */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* 3D Perspective Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="perspective-1000 w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.5] relative cursor-pointer group"
              onClick={toggleManualFlip}
              title="Click to flip or hover to inspect"
            >
              {/* Outer Glowing Quantum Circuit Aura with subtle pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: isFlipped ? [0.7, 0.9, 0.7] : [0.75, 0.95, 0.75],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 via-quantum-500/25 to-ember-600/20 rounded-3xl blur-2xl pointer-events-none"
              />

              {/* Card wrapper with soft, majestic flip rotation and mouse tilt */}
              <motion.div
                style={{
                  rotateX: rotateX,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  y: isHovered ? -6 : [0, -8, 0],
                }}
                transition={{
                  rotateY: {
                    duration: 1.8,
                    ease: [0.33, 1, 0.68, 1], // Soft, luxurious cubic-bezier easing
                  },
                  y: {
                    duration: 5,
                    repeat: isHovered ? 0 : Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-full h-full relative rounded-2xl shadow-2xl preserve-3d"
              >
                {/* FRONT COVER SIDE */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-gold-glow bg-obsidian-950 flex flex-col z-10"
                >
                  <img
                    src="/assets/book-cover-front.jpg"
                    alt="The Quantum Imperative Front Cover"
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                  />
                  {/* Soft Light Sheen Sweep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Front badge */}
                  <div className="absolute bottom-3 right-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-500/40 text-[10px] font-mono text-gold-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    <span>Front • Front Cover</span>
                  </div>
                </div>

                {/* BACK COVER SIDE */}
                <div
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-quantum-500/40 shadow-quantum-glow bg-obsidian-950 flex flex-col z-10"
                >
                  <img
                    src="/assets/book-cover-back.jpg"
                    alt="The Quantum Imperative Back Cover & Manifesto"
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                  />
                  {/* Soft Light Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Back badge */}
                  <div className="absolute bottom-3 right-3 bg-obsidian-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-quantum-500/40 text-[10px] font-mono text-quantum-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-quantum-400 animate-pulse" />
                    <span>Back • Manifesto & Instruments</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Soft Flip Controls & Live Status Indicator */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {/* Manual Soft Flip Toggle */}
              <button
                onClick={toggleManualFlip}
                className="px-4 py-2 rounded-xl bg-obsidian-900/90 border border-slate-700 hover:border-gold-500/50 text-xs font-cinzel tracking-wider text-slate-300 hover:text-gold-300 flex items-center gap-2 transition-all shadow-md backdrop-blur-md"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isFlipped ? 'text-quantum-400' : 'text-gold-400'} transition-transform duration-700 ${isHovered ? 'rotate-180' : ''}`} />
                <span>{isFlipped ? 'Flip to Front Cover' : 'Flip to Back Manifesto'}</span>
              </button>

              {/* Auto-Play Pause / Resume Button */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2 rounded-xl bg-obsidian-900/90 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-gold-300 text-xs flex items-center gap-1.5 transition-all backdrop-blur-md"
                title={isAutoPlay ? 'Pause auto-flipping' : 'Resume auto-flipping'}
              >
                {isAutoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-[10px] font-mono text-slate-400">
                      {isHovered ? 'Paused on Hover' : 'Auto-Orbiting'}
                    </span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[10px] font-mono text-slate-500">Auto-Flip Off</span>
                  </>
                )}
              </button>
            </div>

            {/* Quantum Equation Floating Pill */}
            <div className="mt-3 inline-flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-obsidian-900/60 border border-quantum-500/20 text-[11px] font-mono text-quantum-300/80 backdrop-blur-sm">
              <span>|Ψ⟩ = ∑ αᵢ |i⟩</span>
              <span className="text-slate-600">•</span>
              <span>Bloch Sphere [ |0⟩ ↔ |1⟩ ]</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
