import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ShoppingBag, Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenSummary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSummary }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Thesis', href: '#thesis' },
    { name: 'Sovereign Stack', href: '#stack' },
    { name: 'The Covenant', href: '#covenant' },
    { name: 'Stage Lines', href: '#quotes' },
    { name: 'Authors', href: '#authors' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Roman Title */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-obsidian-900 border border-gold-500/40 flex items-center justify-center shadow-gold-glow-sm group-hover:border-gold-400 group-hover:shadow-gold-glow transition-all duration-300">
            <Shield className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-gold-400/10 blur-sm group-hover:bg-gold-400/20" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel tracking-[0.2em] font-bold text-sm sm:text-base text-slate-100 group-hover:text-gold-300 transition-colors">
                THE QUANTUM IMPERATIVE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-500/80 font-medium">
                THE CONVERGENCE SERIES • VOL II
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-cinzel tracking-[0.14em] uppercase text-slate-300 hover:text-gold-300 hover:scale-105 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenSummary}
            className="btn-glass text-xs py-2.5 px-4 flex items-center gap-2 border-slate-700/60 hover:border-quantum-400/50 hover:text-quantum-300"
          >
            <BookOpen className="w-3.5 h-3.5 text-quantum-400" />
            <span>Summary</span>
          </button>

          <a
            href="https://www.amazon.com/dp/B0DXYZ1234"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs py-2.5 px-5 flex items-center gap-2 shadow-gold-glow"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-obsidian-950" />
            <span>Order Book</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSummary}
            className="p-2 rounded-lg bg-obsidian-900 border border-slate-800 text-quantum-300 text-xs flex items-center gap-1"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-900 border border-gold-500/30 text-gold-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold-500/30 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-cinzel tracking-wider text-sm text-slate-200 hover:text-gold-400 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSummary();
                  }}
                  className="btn-glass w-full justify-center text-xs py-3"
                >
                  <BookOpen className="w-4 h-4 text-quantum-400" />
                  <span>Read Executive Summary</span>
                </button>
                <a
                  href="https://www.amazon.com/dp/B0DXYZ1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center text-xs py-3"
                >
                  <ShoppingBag className="w-4 h-4 text-obsidian-950" />
                  <span>Order on Amazon</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
