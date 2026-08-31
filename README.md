# The Quantum Imperative — Sovereign Landing Page

Official web architecture and landing experience for the book **"The Quantum Imperative: Sovereignty, Resilience, and the Convergence of Power"** (Volume II of *The Convergence Series*) by **Prof. Dr. Sameer Joshi** and **Thorsten Buehrmann**.

---

## 🏛️ Design Language & Aesthetics

- **Visual Theme:** Ancient Roman Imperial Gravitas meets Quantum-Causal Sovereign Frontier.
- **Color System (From Book Cover):**
  - **Imperial Gold (`#d4af37`, `#e5c07b`):** Inscriptional headlines, Roman accents, and core action highlights.
  - **Quantum Azure (`#00e5ff`, `#38bdf8`):** Causal circuits, Bloch sphere nodes, and deterministic compute indicators.
  - **Burning Horizon Ember (`#ea580c`, `#f97316`):** Geopolitical friction, thermodynamic baseload warnings, and rising particle embers.
  - **Deep Cosmos Obsidian (`#050811`, `#090e1a`):** Deep night background canvas.
- **Typography:**
  - Headlines: Roman Classical Serif (`Cinzel`, `Cinzel Decorative`, `Playfair Display`).
  - Interface: Clean High-Density Sans (`Plus Jakarta Sans`, `Inter`).
  - Quantum Equations & Telemetry: Monospace (`JetBrains Mono`).
- **Interactive Micro-Interactions (Quasality Style):**
  - Interactive 3D perspective floating book card with realistic mouse-spring physics and front/back cover flip.
  - Live 6-Layer Sovereign Stack audit comparison (Subscriber Pitfall vs. Owned Capability) + interactive Sovereign Health Scorecard calculator.
  - The Quantum Covenant dashboard (4 Pillars, 12 Obligations, 6 Enforcement Instruments, 100-Day CEO Action Plan).
  - "Lines for the Stage" quote bento grid with copy-to-clipboard actions.
  - Full Executive Summary & Chapter Directory overlay modal.

---

## ⚡ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Animations & Physics:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript 5

---

## 📁 Project Structure

```
TheQuantumImperative_Website/
├── public/
│   ├── assets/
│   │   ├── book-cover-front.jpg     # High-res front cover (Roman bust & quantum circuits)
│   │   ├── book-cover-back.jpg      # High-res back cover (Manifesto & ISBN)
│   │   └── favicon.svg              # Sovereign Quantum orbital favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky glassmorphic header with Roman gold trim
│   │   ├── Hero.tsx                 # 3D interactive book tilt/flip with ambient glow
│   │   ├── CoreThesis.tsx           # Manifesto & 3 Practical Instruments
│   │   ├── SovereignStack.tsx       # 6-Layer audit grid & Sovereign Readiness Calculator
│   │   ├── QuantumCovenant.tsx      # 4 Pillars, 12 Obligations, 6 Tools & 100-Day CEO Plan
│   │   ├── QuotesBento.tsx          # "Lines for the Stage" quote bento grid
│   │   ├── Authors.tsx              # Executive dossiers for Prof. Dr. Joshi & Thorsten Buehrmann
│   │   ├── ExecutiveSummaryModal.tsx # Full chapter roadmap & strategic takeaways modal
│   │   ├── QuantumBackground.tsx    # 60fps canvas (circuit nodes, connections & embers)
│   │   └── Footer.tsx               # Official ISBN (978-1-0681840-2-4), affiliations, imprint
│   ├── data/
│   │   ├── stackData.ts             # Sovereign Stack 6-layer specifications
│   │   ├── covenantData.ts          # Covenant obligations & CEO roadmap data
│   │   ├── quotesData.ts            # Stage lines and aphorisms
│   │   └── executiveSummaryData.ts   # Comprehensive executive summary content
│   ├── App.tsx                      # Main composition layout
│   ├── index.css                    # Custom styles, Roman gold gradients, 3D utilities
│   └── main.tsx                     # React DOM root entrypoint
├── index.html                       # Google fonts and OpenGraph metadata
├── tailwind.config.js               # Color tokens and animation definitions
├── tsconfig.json                    # TypeScript compiler configuration
└── vite.config.ts                   # Vite build tooling configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

---

## 🌐 Deployment Instructions

### 1. Deploy to Vercel
1. Push this repository to GitHub/GitLab.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### 2. Deploy to Netlify
1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy site.

---

## 📖 Book Information
- **Title:** The Quantum Imperative: Sovereignty, Resilience, and the Convergence of Power
- **Series:** The Convergence Series • Volume II
- **Authors:** Prof. Dr. Sameer Joshi & Thorsten Buehrmann
- **ISBN:** 978-1-0681840-2-4
- **Affiliated Venture:** [Quasality.ai](https://quasality.ai)
