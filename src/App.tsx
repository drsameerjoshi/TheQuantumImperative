import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { QuantumBackground } from './components/QuantumBackground';
import { Hero } from './components/Hero';
import { CoreThesis } from './components/CoreThesis';
import { SovereignStack } from './components/SovereignStack';
import { QuantumCovenant } from './components/QuantumCovenant';
import { QuotesBento } from './components/QuotesBento';
import { Authors } from './components/Authors';
import { Footer } from './components/Footer';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';

export const App: React.FC = () => {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 selection:bg-gold-500/30 selection:text-gold-200 antialiased">
      {/* Interactive Quantum Circuit & Ember Particle Canvas */}
      <QuantumBackground />

      {/* Sticky Sovereign Navigation Bar */}
      <Navbar onOpenSummary={() => setIsSummaryModalOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section with 3D Book Cover and Perspective Tilt */}
        <Hero onOpenSummary={() => setIsSummaryModalOpen(true)} />

        {/* Core Thesis & 3 Practical Instruments */}
        <CoreThesis onOpenSummary={() => setIsSummaryModalOpen(true)} />

        {/* The Sovereign Stack (6 Layers + Cross-Cutting Auditability) */}
        <SovereignStack />

        {/* The Quantum Covenant (4 Pillars, 12 Obligations, 6 Instruments, 100-Day CEO Plan) */}
        <QuantumCovenant />

        {/* Lines for the Stage (Quote Bento Grid & Aphorisms) */}
        <QuotesBento />

        {/* About the Authors (Prof. Dr. Sameer Joshi & Thorsten Buehrmann) */}
        <Authors />
      </main>

      {/* Footer & Institutional Footprint */}
      <Footer onOpenSummary={() => setIsSummaryModalOpen(true)} />

      {/* Executive Summary Reader Modal */}
      <ExecutiveSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />
    </div>
  );
};

export default App;
