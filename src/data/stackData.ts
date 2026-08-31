export interface StackLayer {
  id: number;
  name: string;
  codename: string;
  tagline: string;
  subscriberPitfall: {
    title: string;
    description: string;
    vulnerability: string;
    metric: string;
  };
  ownedCapability: {
    title: string;
    description: string;
    architecture: string;
    metric: string;
  };
  keyTechnologies: string[];
  strategicRisk: string;
  sovereignAction: string;
}

export interface NineAxisAuditRow {
  axis: string;
  germany: "Low" | "Medium" | "High";
  usa: "Low" | "Medium" | "High";
  china: "Low" | "Medium" | "High";
  strategicNote: string;
}

export const SOVEREIGN_STACK_LAYERS: StackLayer[] = [
  {
    id: 0,
    name: "Layer 0: Energy Sovereignty",
    codename: "POWER_THAT_POWERS_THE_STACK",
    tagline: "Uninterruptible baseload, grid stability, and dedicated power purchase agreements",
    subscriberPitfall: {
      title: "Grid Vulnerability & Public Utility Dependency",
      description: "Operating data centers and cryogenic arrays behind strained terrestrial grids without behind-the-meter generation or direct power purchase agreements.",
      vulnerability: "Subject to emergency load curtailment (e.g. Germany's SiPlaS platform), winter import shocks, and sudden brownout shutdowns.",
      metric: "Exposed to Emergency Rationing",
    },
    ownedCapability: {
      title: "Behind-the-Meter Dedicated Generation & Fusion PPAs",
      description: "Dedicated Small Modular Reactors (SMRs), direct commercial fusion agreements (e.g. Helion/Microsoft), and sub-Kelvin closed-loop cryogenic cooling infrastructure.",
      architecture: "Isolated DC Microgrid + Direct SMR/Fusion PPAs + Cryogenic Closed-Loop Recycling",
      metric: "100% Baseload Independence",
    },
    keyTechnologies: ["Small Modular Reactors (SMR)", "Commercial Fusion PPAs", "Sub-Kelvin Closed-Loop Cryogenics", "Direct Microgrid Interconnects"],
    strategicRisk: "A datacenter or quantum array without dedicated thermodynamic baseload is simply a tenant waiting for an energy ration notice.",
    sovereignAction: "Mandate direct-wire baseload generation agreements for all strategic compute clusters before hardware procurement.",
  },
  {
    id: 1,
    name: "Layer 1: Materials & Compute (Data & Connectivity)",
    codename: "PHYSICAL_BEDROCK_AND_FABS",
    tagline: "Cryogenic dilution refrigerators, wafer foundries, and PQC-secured network fabrics",
    subscriberPitfall: {
      title: "Chokepoint Hardware Dependency & Bifurcated Supply Chains",
      description: "Relying on foreign dilution refrigerators (sub-6K equipment), imported helium-3, and offshore foundries with zero domestic manufacturing capacity.",
      vulnerability: "Export control forks, maritime chokepoints, and foreign hardware embargoes (e.g. US/China cryogenic bifurcation).",
      metric: "100% Single-Chokepoint Exposure",
    },
    ownedCapability: {
      title: "Purpose-Built Quantum Foundries & Domestic Dilution Packaging",
      description: "Standalone quantum-wafer foundries (e.g. Albany 300mm initiative), domestic cryogenic fabrication, and post-quantum encrypted optical networks.",
      architecture: "300mm Quantum-Wafer Foundries + Domestic Dilution Cryogenics + PQC Mesh",
      metric: "Dual-Source Hardware Resilience",
    },
    keyTechnologies: ["300mm Quantum Wafer Foundries", "Sub-6K Dilution Refrigerators", "Helium-3 Strategic Reserves", "PQC-Secured Fiber Rings"],
    strategicRisk: "Owning software when foreign export controls can block the sub-6K dilution equipment is the illusion of control.",
    sovereignAction: "Establish sovereign equity in packaging and deploy on-premise cryogenic control electronics.",
  },
  {
    id: 2,
    name: "Layer 2: Compute Infrastructure & Quantum Algorithms",
    codename: "HYBRID_RUNTIMES_AND_ALGORITHMS",
    tagline: "Classical HPC, quantum processors, neuromorphic edge, and proprietary algorithm ownership",
    subscriberPitfall: {
      title: "Rented API Endpoints & Single-Provider Lock-In",
      description: "Leasing cloud computing time from foreign hyperscalers without owning proprietary algorithm implementations (relying on generic third-party SaaS).",
      vulnerability: "Sudden service termination, remote model access shutdowns (e.g. Anthropic Fable/Mythos June 2026), and intellectual dependency.",
      metric: "Zero Proprietary Algorithmic Custody",
    },
    ownedCapability: {
      title: "Owned Algorithms (VQE, QAOA) & Tri-Paradigm Orchestration",
      description: "In-house proprietary algorithm ownership (Shor, Grover, QAOA, VQE) orchestrated across classical HPC, QPUs, and neuromorphic edge hardware (e.g. Akida/Hala Point).",
      architecture: "Classical HPC + Superconducting/Photonic QPUs + Neuromorphic Edge",
      metric: "Full In-House Algorithmic Ownership",
    },
    keyTechnologies: ["QAOA & VQE Formulations", "Neuromorphic Event-Driven Edge", "Quantum Error-Correction Decoders (Ising)", "Deterministic Bare-Metal Fabric"],
    strategicRisk: "Renting algorithmic intelligence from abroad is not digital transformation; it is intellectual dependency with a procurement department.",
    sovereignAction: "Develop and retain proprietary algorithm portfolios and deploy hardware-agnostic hybrid orchestration layers.",
  },
  {
    id: 3,
    name: "Layer 3: Causal Models & Applications",
    codename: "CAUSAL_QUANTUM_INTELLIGENCE",
    tagline: "Post-QUBO/HUBO formulations, structural causal models, and industrial digital twins",
    subscriberPitfall: {
      title: "Opaque Statistical Curve-Fitting & Black-Box Autocomplete",
      description: "Routing mission-critical manufacturing, energy, and defense decisions through opaque correlation models that cannot explain why a decision is taken.",
      vulnerability: "Model drift, catastrophic out-of-distribution failure, and zero legal/regulatory auditability.",
      metric: "0% Mechanistic Interpretability",
    },
    ownedCapability: {
      title: "Causal Quantum Intelligence (CQI) & Post-QUBO Industrial Omniverse",
      description: "Structural Causal Models (SCM), HUBO/Hamiltonian optimization (Volkswagen/Kipu benchmarks), and high-fidelity operational digital twins (Siemens/PepsiCo).",
      architecture: "Structural Causal Modeling + HUBO/Hamiltonian Translation + Glass-Box Audit Layer",
      metric: "100% Auditable Causal Proof Chains",
    },
    keyTechnologies: ["Structural Causal Models (SCM)", "HUBO & Hamiltonian Optimization", "High-Fidelity Digital Twins (Digital Twin Composer)", "Glass-Box Audit Chains"],
    strategicRisk: "A society that delegates core industrial decisions to black-box foreign models forfeits the ability to explain its own actions.",
    sovereignAction: "Transition from statistical curve-fitting to formal causal architectures with complete lineage ownership.",
  },
  {
    id: 4,
    name: "Layer 4: Governance & Sovereign Auditability",
    codename: "COVENANT_COMPLIANCE_AND_QC_ADDS",
    tagline: "Covenant compliance, export controls, glass-box verification, and QC-ADDS coordination",
    subscriberPitfall: {
      title: "Toothless 'Ethical AI' PDFs & Compliance Theater",
      description: "Attempting to manage systemic existential risk with non-binding voluntary manifestos and consultative working groups while infrastructure resides abroad.",
      vulnerability: "Complete regulatory capture, unverified third-party claims, and immediate vulnerability to foreign export controls.",
      metric: "Zero Enforceable Governance Teeth",
    },
    ownedCapability: {
      title: "The Quantum Covenant Architecture & Hard Market Conditionality",
      description: "Binding 12-obligation Covenant Scorecard (G1–G3, E1–E3, A1–A3, I1–I3), NIST PQC mandates (EO 14412 / CNSA 2.0), and the Orbital Covenant.",
      architecture: "Binding Procurement Conditionality + Tamper-Proof Audit Registers + Due Process Protocols",
      metric: "100% Verifiable Covenant Compliance",
    },
    keyTechnologies: ["NIST PQC Standards (ML-KEM, ML-DSA)", "CNSA 2.0 Transition Protocols", "Orbital Registry & Neutrality", "Sovereignty Change Registers"],
    strategicRisk: "A sovereignty stack that cannot be audited is not a sovereignty stack: it is a black box wearing a national flag pin.",
    sovereignAction: "Codify binding market conditionality and institutionalize continuous independent assurance reviews.",
  },
  {
    id: 5,
    name: "Layer 5: Talent Sovereignty",
    codename: "HUMAN_CAPITAL_BOTTLENECK",
    tagline: "The global contest for the ~16,000 pure-play quantum specialists and systems architects",
    subscriberPitfall: {
      title: "Outsourced IT Contractors & Institutional Brain Drain",
      description: "Underfunding education and domestic compensation, watching top physicists and compiler architects emigrate to foreign tech hubs.",
      vulnerability: "Permanent loss of engineering memory; inability to diagnose low-level cryogenic and compiler failures.",
      metric: "Net Negative Migration of Technical Elite",
    },
    ownedCapability: {
      title: "Talent Sovereignty Strategy & Agile Research Hubs",
      description: "National Quantum Fellowships (e.g. Singapore NQS S$300M scheme), fast-track residency visas (UK Global Talent, UAE Golden Visa), and competitive equity compensation.",
      architecture: "Sovereign Engineering Academies + Fast-Track Visa Routes + P&L-Backed Technical Leadership",
      metric: "100% In-House Architecture Custody",
    },
    keyTechnologies: ["Quantum Kernel Programming", "Cryogenic Systems Engineering", "Causal AI Mathematics", "Post-Quantum Cryptographic Engineering"],
    strategicRisk: "Lithography can be restricted by export controls, but talent walks through airports. Without Talent Sovereignty, a strategy is just an org chart with no one in it.",
    sovereignAction: "Align research funding, immigration speed, and executive compensation to retain hybrid quantum architects.",
  },
];

export const NINE_AXIS_AUDIT_MATRIX: NineAxisAuditRow[] = [
  {
    axis: "Layer 0: Energy",
    germany: "Low",
    usa: "High",
    china: "High",
    strategicNote: "Germany faces severe grid constraints (SiPlaS rationing mechanism), while US/China invest heavily in dedicated nuclear and fusion PPAs.",
  },
  {
    axis: "Layer 1: Materials & Compute",
    germany: "Low",
    usa: "High",
    china: "Medium",
    strategicNote: "US leads in 300mm quantum wafer foundries (Anderon/CHIPS Act); China dominates sub-6K dilution equipment exports; Germany has no domestic fab.",
  },
  {
    axis: "Layer 2: Quantum Algorithms",
    germany: "Medium",
    usa: "High",
    china: "High",
    strategicNote: "Strong theoretical research in Europe, but commercial algorithm optimization is dominated by US and Chinese platforms.",
  },
  {
    axis: "Layer 3: Applications",
    germany: "Medium",
    usa: "High",
    china: "High",
    strategicNote: "Industrial pilots at Siemens/Volkswagen demonstrate high potential, but full enterprise scaling lags behind US and Chinese state programs.",
  },
  {
    axis: "Layer 4: Governance",
    germany: "Medium",
    usa: "High",
    china: "High",
    strategicNote: "Europe excels at drafting regulation (AI Act), but lacks the physical stack to enforce sovereign leverage.",
  },
  {
    axis: "Layer 5: Talent",
    germany: "Medium",
    usa: "High",
    china: "High",
    strategicNote: "Europe educates world-class scientists but suffers net brain drain due to fragmented funding and rigid compensation frameworks.",
  },
  {
    axis: "Sovereign Auditability",
    germany: "Low",
    usa: "High",
    china: "Medium",
    strategicNote: "US mandates hard auditability (EO 14413/CNSA 2.0); Europe still relies heavily on voluntary vendor declarations.",
  },
  {
    axis: "Fiscal Capacity",
    germany: "Low",
    usa: "Medium",
    china: "Medium",
    strategicNote: "Germany's constitutional debt brake and escalating interest costs restrict capital mobilization compared to US and China.",
  },
  {
    axis: "Domestic Demand Engine",
    germany: "Low",
    usa: "High",
    china: "High",
    strategicNote: "US and China possess massive domestic market demand to absorb and finance multi-gigawatt compute infrastructure.",
  },
];

export const CROSS_CUTTING_AUDITABILITY = {
  title: "Sovereign Auditability (Cross-Cutting Assurance Axis)",
  codename: "GLASS_BOX_COMPUTATIONAL_TRUST",
  description: "A sovereignty stack that cannot be audited is not a sovereignty stack: it is a black box wearing a national flag pin. Enforces formal causal proof chains, deterministic verification, and accountable override rights across all six layers.",
  requirements: [
    "Formal Causal Proof Chains (Structural Causal Models)",
    "Glass-Box Decision Logging & Counterfactual Audits",
    "Post-Quantum Cryptographic Attestation (CNSA 2.0 / NIST)",
    "Named Human P&L Authority Override Protocols",
  ],
};
