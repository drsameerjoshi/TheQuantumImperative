export interface CovenantPillar {
  number: string;
  title: string;
  latinName: string;
  summary: string;
  obligations: {
    code: string;
    name: string;
    requirement: string;
    auditMechanism: string;
  }[];
}

export interface EnforcementInstrument {
  id: number;
  name: string;
  category: "Legal" | "Cryptographic" | "Operational" | "Financial";
  description: string;
  mechanism: string;
  institutionalImpact: string;
}

export interface ActionPlanPhase {
  phase: string;
  days: string;
  title: string;
  focus: string;
  milestones: string[];
  deliverable: string;
}

export const COVENANT_PILLARS: CovenantPillar[] = [
  {
    number: "01",
    title: "Verifiable Ownership",
    latinName: "Dominium Verificabile",
    summary: "Refuse uninspected abstractions. Every layer of the institutional stack must be legally, physically, and mathematically provable as sovereign property.",
    obligations: [
      {
        code: "OBL-01",
        name: "Silicon & Firmware Provenance",
        requirement: "Complete cryptographic chain of custody for all processor microcode, hypervisors, and QPU control electronics.",
        auditMechanism: "Hardware Bill of Materials (HBOM) registered on tamper-proof sovereign ledger.",
      },
      {
        code: "OBL-02",
        name: "Zero Remote Kill-Switch Immunity",
        requirement: "Absolute elimination of external remote maintenance backdoors, telemetry beaconing, and vendor-side cloud activation locks.",
        auditMechanism: "Automated network air-gap packet capture and microkernel formal verification.",
      },
      {
        code: "OBL-03",
        name: "Perpetual Source Escrow & Dual-Foundry Tooling",
        requirement: "Mandatory deposit of all compiler source, circuit netlists, and physical tooling into state sovereign vaults.",
        auditMechanism: "Quarterly independent recompilation from bare metal in isolated sandbox cleanrooms.",
      },
    ],
  },
  {
    number: "02",
    title: "Cryptographic Sovereignty",
    latinName: "Sovereignitas Cryptographica",
    summary: "Establish mathematical immunity against both classical nation-state decryption and quantum algorithmic attacks.",
    obligations: [
      {
        code: "OBL-04",
        name: "Mandatory Post-Quantum Lattice Migration",
        requirement: "Deprecation of all RSA and ECC algorithms across primary operational networks in favor of NIST PQC standards (ML-KEM, ML-DSA).",
        auditMechanism: "Continuous automated cipher-suite scans with strict zero-trust policy enforcement.",
      },
      {
        code: "OBL-05",
        name: "Sovereign Root of Trust & Key Custody",
        requirement: "Cryptographic root keys must be generated, stored, and rotated exclusively within physically sovereign air-gapped HSMs.",
        auditMechanism: "Multi-party computation (MPC) key ceremonies with biometric threshold quorum.",
      },
      {
        code: "OBL-06",
        name: "Quantum Key Distribution (QKD) Mesh Integration",
        requirement: "Inter-datacenter backbone links must deploy quantum entangled or BB84 fiber channels for eavesdropping-proof transport.",
        auditMechanism: "Real-time quantum bit error rate (QBER) telemetry with automatic optical rerouting.",
      },
    ],
  },
  {
    number: "03",
    title: "Algorithmic Autonomy & Causal Lineage",
    latinName: "Autonomia Algoritmica",
    summary: "Replace opaque foreign probabilistic models with explainable, physics-grounded, and causally verifiable intelligence.",
    obligations: [
      {
        code: "OBL-07",
        name: "White-Box Model Weight Custody",
        requirement: "No mission-critical decision may depend on models whose weights, training corpora, and loss functions are not locally housed.",
        auditMechanism: "Cryptographic SHA-256 weight registry with immutable version tagging.",
      },
      {
        code: "OBL-08",
        name: "Causal Auditability & Counterfactual Verification",
        requirement: "All automated industrial and defense control algorithms must generate mathematically sound causal DAGs and counterfactual explanations.",
        auditMechanism: "Automated causal invariance testing and do-calculus validation suites.",
      },
      {
        code: "OBL-09",
        name: "Deterministic Simulation Over Prediction",
        requirement: "Simulate physics-constrained outcomes rather than relying on statistical pattern matching for critical infrastructure control.",
        auditMechanism: "Comparative boundary testing against empirical thermodynamic benchmarks.",
      },
    ],
  },
  {
    number: "04",
    title: "Thermodynamic & Islanding Resilience",
    latinName: "Resilientia Energetica",
    summary: "Ensure compute centers remain operational through severe geopolitical disruption, grid failures, and maritime blockades.",
    obligations: [
      {
        code: "OBL-10",
        name: "Behind-the-Meter Dedicated Baseload",
        requirement: "Sovereign quantum and AI compute clusters must possess dedicated behind-the-meter generation independent of public transmission lines.",
        auditMechanism: "Unannounced grid-disconnect stress tests under 100% computational load.",
      },
      {
        code: "OBL-11",
        name: "Cryogenic Coolant Strategic Reserve",
        requirement: "Minimum 120-day on-site supply and closed-loop reliquefaction capacity for liquid helium and cryogenic refrigerants.",
        auditMechanism: "Continuous ultrasonic volumetric monitoring of pressurized sovereign reserves.",
      },
      {
        code: "OBL-12",
        name: "Sovereign Black-Start Readiness",
        requirement: "Full capability to bring quantum-classical compute fabrics from cold shutdown to operational readiness in zero-grid state.",
        auditMechanism: "Bi-annual black-start simulation drills certified by state defense auditors.",
      },
    ],
  },
];

export const ENFORCEMENT_INSTRUMENTS: EnforcementInstrument[] = [
  {
    id: 1,
    name: "Sovereign Escrow & Netlist Sequestration",
    category: "Legal",
    description: "Requires technology vendors to deposit complete silicon HDL, compiler source code, and cryogenic schematics in sovereign national vaults.",
    mechanism: "Automatic release triggers upon foreign export restriction, vendor insolvency, or geopolitical embargo.",
    institutionalImpact: "Eliminates single-vendor extinction risk for national defense and critical infrastructure operators.",
  },
  {
    id: 2,
    name: "Cryptographic Kill-Switch Audits",
    category: "Cryptographic",
    description: "Continuous formal verification and micro-code disassembly of all imported silicon and firmware to detect hidden backdoors.",
    mechanism: "Automated binary analysis and dynamic symbol extraction in isolated Faraday cage testbeds.",
    institutionalImpact: "Guarantees that foreign vendors cannot remotely brick or extract telemetry from sovereign hardware.",
  },
  {
    id: 3,
    name: "Causal White-Box Certification Standard",
    category: "Operational",
    description: "Mandatory certification regime barring non-interpretable black-box algorithms from healthcare, energy grid, and defense deployments.",
    mechanism: "Verification of Structural Causal Models (SCM) and formal proofs of mechanistic interpretability.",
    institutionalImpact: "Restores institutional accountability and regulatory compliance in high-stakes automated decisions.",
  },
  {
    id: 4,
    name: "Sovereign Quantum Strategic Reserve (SQSR)",
    category: "Financial",
    description: "State-backed strategic capitalization for domestic QPU development, rare isotope procurement (Helium-3, Ytterbium), and advanced packaging.",
    mechanism: "Sovereign wealth fund allocations tied to verified milestones in physical hardware sovereignty.",
    institutionalImpact: "Buffers domestic industry against sudden supply-chain fractures and foreign market manipulation.",
  },
  {
    id: 5,
    name: "Baseload Direct-Connect Mandate",
    category: "Operational",
    description: "Statutory requirement that high-density quantum/AI datacenters co-locate with dedicated SMR or zero-carbon baseload energy sources.",
    mechanism: "Binding PPA agreements paired with physically isolated microgrid switchgear.",
    institutionalImpact: "Prevents civilian power shortages and isolates high-value computational infrastructure from grid sabotage.",
  },
  {
    id: 6,
    name: "National PQC Transition Deadline Act",
    category: "Legal",
    description: "Legally enforceable phase-out date for legacy asymmetric cryptography across all banking, telecommunications, and government sectors.",
    mechanism: "Financial penalties and license revocation for non-compliant public-facing cryptographic endpoints.",
    institutionalImpact: "Shields the national data vault from Harvest-Now-Decrypt-Later state adversary operations.",
  },
];

export const CEO_100_DAY_PLAN: ActionPlanPhase[] = [
  {
    phase: "Phase I",
    days: "Days 1 — 30",
    title: "The Sovereign Dependency Audit",
    focus: "Uncompromising discovery and vulnerability mapping across all 6 stack layers.",
    milestones: [
      "Map all third-party API dependencies in mission-critical decision workflows.",
      "Execute an inventory of all cryptographic algorithms (RSA, ECC vs PQC readiness).",
      "Identify single-point hardware chokepoints and foreign cloud hosting contracts.",
      "Audit outbound telemetry across all enterprise servers and network appliances.",
    ],
    deliverable: "The Enterprise Sovereignty Debt & Exposure Scorecard (ESDS)",
  },
  {
    phase: "Phase II",
    days: "Days 31 — 60",
    title: "Contract Renegotiation & Escrow Enforcement",
    focus: "Legal protection, source code sequestration, and supplier covenants.",
    milestones: [
      "Insert Sovereign Covenant clauses into all tier-1 cloud and hardware contracts.",
      "Demand third-party source code and compiler netlist escrow for all critical tools.",
      "Establish on-premise air-gapped staging environments for key causal models.",
      "Form an internal Sovereign Architecture Steering Committee chaired by the CEO/CTO.",
    ],
    deliverable: "Binding Sovereign Supplier Covenants & Escrow Agreements",
  },
  {
    phase: "Phase III",
    days: "Days 61 — 90",
    title: "Dual-Stack Deployment & PQC Pilot",
    focus: "Parallel sovereign infrastructure and post-quantum migration kickoff.",
    milestones: [
      "Deploy initial lattice-based PQC algorithms across high-priority data pipelines.",
      "Stand up on-premise bare-metal clusters to mirror essential cloud workloads.",
      "Initiate behind-the-meter energy feasibility study with local energy providers.",
      "Conduct first unannounced simulated foreign cloud disconnect drill.",
    ],
    deliverable: "Operational Dual-Stack Mirror & Live PQC Gateway",
  },
  {
    phase: "Phase IV",
    days: "Days 91 — 100",
    title: "Covenant Ratification & Board Governance",
    focus: "Institutionalization of sovereign readiness into corporate bylaws.",
    milestones: [
      "Present Sovereign Readiness Audit and Black-Start drill results to the Board of Directors.",
      "Adopt The Quantum Covenant as a permanent corporate governance instrument.",
      "Establish ongoing capital expenditure budget for domestic engineering talent retention.",
      "Publish the annual Institutional Sovereignty Assurance Report.",
    ],
    deliverable: "Board-Ratified Quantum Covenant & Institutional Charter",
  },
];
