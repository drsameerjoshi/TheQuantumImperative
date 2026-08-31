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

export const SOVEREIGN_STACK_LAYERS: StackLayer[] = [
  {
    id: 0,
    name: "Layer 0: Energy & Physical Grid",
    codename: "PHYSICAL_BASELOAD",
    tagline: "Uninterruptible thermodynamic and gigawatt power architectures",
    subscriberPitfall: {
      title: "Grid Vulnerability & Public Utility Dependency",
      description: "Relying on strained public transmission grids and third-party green credits with zero direct behind-the-meter generation or cooling autonomy.",
      vulnerability: "Subject to localized grid curtailment, geopolitical gas shocks, and sudden brownout shutdowns during regional crises.",
      metric: "99.2% External Grid Exposure",
    },
    ownedCapability: {
      title: "Behind-the-Meter Dedicated Nuclear & Microgrid Islanding",
      description: "Dedicated Small Modular Reactors (SMRs), direct geothermal baseload, and on-site cryogenic closed-loop cooling infrastructure designed for 100% black-start island mode.",
      architecture: "Isolated DC Microgrid + Direct SMR PPAs + Sub-Kelvin Helium Closed-Loop Recycling",
      metric: "Zero-Grid Islanding > 180 Days",
    },
    keyTechnologies: ["Small Modular Reactors (SMR)", "Behind-the-Meter Microgrids", "Cryogenic Sub-Kelvin Cooling", "Solid-State Kinetic Storage"],
    strategicRisk: "A datacenter without dedicated thermodynamic sovereignty is simply a tenant waiting for an energy ration notice.",
    sovereignAction: "Mandate direct-wire baseload generation agreements for all strategic sovereign compute clusters.",
  },
  {
    id: 1,
    name: "Layer 1: Silicon & Quantum Hardware",
    codename: "FOUNDRY_AND_QPU",
    tagline: "Direct ownership of lithography, fab capacity, and QPU packaging",
    subscriberPitfall: {
      title: "Offshore Foundry & Closed Monolithic Hardware",
      description: "Leasing proprietary accelerator time from single-point foreign clouds without silicon design patents, packaging control, or quantum circuit access.",
      vulnerability: "Export controls, maritime chokepoints (Taiwan Strait), and proprietary firmware kill-switches.",
      metric: "100% Reliance on Chokepoint Foundries",
    },
    ownedCapability: {
      title: "Open-ISA Silicon, Multi-QPU Packaging & Trusted Foundries",
      description: "Sovereign RISC-V compute cores, neutral-atom and superconducting QPU packaging, and multi-foundry domestic packaging alliances.",
      architecture: "Neutral Atom & Superconducting Hybrid QPUs + Domestic Advanced Packaging (2.5D/3D Chiplets)",
      metric: "Dual-Source Hardware Resilience",
    },
    keyTechnologies: ["Neutral Atom QPU Clusters", "Superconducting Transmons", "RISC-V Sovereign Accelerators", "Heterogeneous 3D Chiplet Packaging"],
    strategicRisk: "Owning software when the foreign firmware can brick the underlying silicon is the illusion of control.",
    sovereignAction: "Establish sovereign equity in packaging and deploy on-premise cryogenic quantum control electronics.",
  },
  {
    id: 2,
    name: "Layer 2: Compute Infrastructure & Fabric",
    codename: "DETERMINISTIC_RUNTIME",
    tagline: "Sub-microsecond deterministic fabric and sovereign bare-metal orchestrators",
    subscriberPitfall: {
      title: "Commercial Multi-Tenant Hyperscaler Lock-In",
      description: "Deploying critical institutional workloads on shared hypervisor clouds with non-deterministic latency, remote telemetry extraction, and SLA-only guarantees.",
      vulnerability: "Sudden unilateral service termination, API deprecation, latency jitter, and foreign legal subpoena (CLOUD Act).",
      metric: "Zero Control Over Hypervisor Telemetry",
    },
    ownedCapability: {
      title: "Air-Gapped Sovereign Bare-Metal & Optical Crossbar Fabric",
      description: "Custom bare-metal Linux/seL4 deterministic kernels running across low-latency optical interconnects with zero outbound telemetry.",
      architecture: "Deterministic Optical Interconnects + seL4 Verified Microkernel + Sovereign Kubernetes Orchestration",
      metric: "Sub-Microsecond Deterministic Latency",
    },
    keyTechnologies: ["Co-Packaged Optical Interconnects", "seL4 Microkernels", "Zero-Telemetry Hypervisors", "Quantum-Classical Hybrid Bridges"],
    strategicRisk: "When you build on another sovereign's hypervisor, their legal court is your system administrator.",
    sovereignAction: "Enforce strict bare-metal deployment architectures with mathematical formal verification of the isolation boundary.",
  },
  {
    id: 3,
    name: "Layer 3: Causal AI & Algorithmic Weights",
    codename: "EXPLAINABLE_INTELLIGENCE",
    tagline: "Physics-informed, causal reasoning models with verifiable white-box weights",
    subscriberPitfall: {
      title: "Black-Box Probabilistic LLM API Consumption",
      description: "Routing mission-critical operational decisions through opaque foreign API endpoints that hallucinate, drift, and hide underlying causal chains.",
      vulnerability: "Model drift, zero regulatory auditability, proprietary prompt exfiltration, and epistemological capture.",
      metric: "0% Mechanistic Interpretability",
    },
    ownedCapability: {
      title: "In-House Causal AI & White-Box Physics-Informed Models",
      description: "Structural Causal Models (SCM), counterfactual reasoning engines, and physics-constrained neural networks with fully owned model weights.",
      architecture: "Structural Causal Graph Engines + Counterfactual Simulation + On-Premise Weight Governance",
      metric: "100% Auditable Causal Lineage",
    },
    keyTechnologies: ["Structural Causal Models (SCM)", "Physics-Informed Neural Networks (PINN)", "Counterfactual Inference Engines", "Local Weight Repositories"],
    strategicRisk: "A society that delegates core industrial decisions to black-box foreign models forfeits the ability to explain its own actions.",
    sovereignAction: "Transition from statistical curve-fitting to formal causal architectures with complete lineage ownership.",
  },
  {
    id: 4,
    name: "Layer 4: Post-Quantum Cryptography & Data",
    codename: "PQC_AND_SECURE_VAULTS",
    tagline: "Harvest-Now-Decrypt-Later defense and mathematical data provenance",
    subscriberPitfall: {
      title: "Legacy RSA/ECC & Fragmented Vendor Key Custody",
      description: "Relying on RSA-2048 and Elliptic Curves while storing cryptographic keys in foreign HSMs, vulnerable to Shor's algorithm and bulk state capture.",
      vulnerability: "Harvest Now, Decrypt Later (HNDL) state adversary campaigns and compromised key recovery backdoors.",
      metric: "Total Vulnerability to Q-Day Decryption",
    },
    ownedCapability: {
      title: "State-Graded NIST Post-Quantum Cryptography (PQC) & QKD",
      description: "Lattice-based cryptography (ML-KEM, ML-DSA, SLH-DSA), Quantum Key Distribution (QKD) fiber rings, and hardware-isolated sovereign HSMs.",
      architecture: "Stateful Hash-Based Signatures + ML-KEM Key Exchange + Fiber QKD Mesh + Air-Gapped Key Vaults",
      metric: "100% Post-Quantum Cryptographic Proof",
    },
    keyTechnologies: ["ML-KEM (Kyber)", "ML-DSA (Dilithium)", "Quantum Key Distribution (QKD)", "Sovereign Air-Gapped HSM Vaults"],
    strategicRisk: "All encrypted intelligence transmitted today over public cables is already stored in adversary data vaults awaiting quantum factorization.",
    sovereignAction: "Execute mandatory PQC migration across all root certificates and encrypted data-in-transit pipelines immediately.",
  },
  {
    id: 5,
    name: "Layer 5: Institutional Engineering Talent",
    codename: "SOVEREIGN_TALENT_ELITE",
    tagline: "Deep in-house systems architects capable of building from first principles",
    subscriberPitfall: {
      title: "Outsourced IT Contractors & Framework Users",
      description: "Relying on external consulting firms and superficial prompt engineers who assemble third-party SaaS without fundamental systems knowledge.",
      vulnerability: "Brain drain, complete loss of engineering memory, inability to diagnose low-level silicon/compiler failures.",
      metric: "95% Outsourced Systems Competence",
    },
    ownedCapability: {
      title: "In-House First-Principles Engineering & Applied Science Cadre",
      description: "Permanent cadres of quantum physicists, compiler engineers, causal AI researchers, and low-level kernel architects embedded inside the institution.",
      architecture: "Sovereign Engineering Academies + Deep-Tech Executive Compensation + Continuous First-Principles Exercises",
      metric: "100% In-House Architecture Custody",
    },
    keyTechnologies: ["Quantum Kernel Programming", "LLVM/Compiler Optimization", "Cryogenic Instrumentation", "Formal Mathematical Verification"],
    strategicRisk: "You cannot govern what you do not understand, and you cannot secure what you cannot build.",
    sovereignAction: "Establish sovereign technical fellowships and internalize all architectural decision authority.",
  },
];

export const CROSS_CUTTING_AUDITABILITY = {
  title: "Cross-Cutting Layer: Continuous Sovereign Auditability",
  codename: "SOVEREIGN_VERIFICATION",
  description: "Independent, mathematical verification that operates across all 6 layers simultaneously—ensuring no hidden backdoors, no shadow telemetry, and zero unexercised foreign dependencies.",
  requirements: [
    "Formal zero-knowledge proofs of execution integrity",
    "Continuous black-start unannounced dependency disconnection drills",
    "Supply-chain hardware bill-of-materials (SBOM) cryptographic hashing",
    "Independent red-team adversarial penetration of isolation boundaries",
  ],
};
