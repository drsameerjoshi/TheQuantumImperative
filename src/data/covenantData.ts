export interface CovenantPillar {
  number: string;
  pillarKey: "G" | "E" | "A" | "I";
  title: string;
  role: string;
  summary: string;
  obligations: {
    code: string;
    name: string;
    quantifiedCommitment: string;
    consequence: string;
  }[];
}

export interface TechNationMandate {
  id: number;
  name: string;
  requirement: string;
  rationale: string;
}

export interface ActionPlanPhase {
  phase: string;
  days: string;
  title: string;
  focus: string;
  pqcFocus: string;
  milestones: string[];
  deliverable: string;
}

export const COVENANT_PILLARS: CovenantPillar[] = [
  {
    number: "01",
    pillarKey: "G",
    title: "Government Obligations",
    role: "The Sovereign Architects",
    summary: "Establish national regulatory clarity, long-horizon funding, and domestic talent and infrastructure pipelines.",
    obligations: [
      {
        code: "G1",
        name: "Regulatory Clarity",
        quantifiedCommitment: "PQC transition timeline published by 2028; export-control categories established; harmonization with three or more allied nations.",
        consequence: "Exclusion from joint research programs.",
      },
      {
        code: "G2",
        name: "Strategic R&D Investment",
        quantifiedCommitment: "Minimum 0.1% of GDP annually; sovereign quantum fund with a ten-year horizon; annual progress reports.",
        consequence: "Forfeiture of shared infrastructure access.",
      },
      {
        code: "G3",
        name: "Talent & Infrastructure",
        quantifiedCommitment: "National quantum facility by 2029; talent-visa program within 18 months; 50% increase in PhD output within five years.",
        consequence: "Reduced collaborative privileges.",
      },
    ],
  },
  {
    number: "02",
    pillarKey: "E",
    title: "Enterprise Obligations",
    role: "The Resilience Engineers",
    summary: "Mandatory migration to post-quantum cryptography, independent assurance audits, and active workforce quantum upskilling.",
    obligations: [
      {
        code: "E1",
        name: "Responsible Deployment",
        quantifiedCommitment: "Independent assurance audit within 12 months; Quantum Ethics and Assurance Board with named override authority; decision-specific audit trail.",
        consequence: "Suspension from quantum cloud platforms.",
      },
      {
        code: "E2",
        name: "Standards Participation",
        quantifiedCommitment: "Membership in two or more standards bodies; 100+ engineering hours annually; PQC compliance within 24 months of standard publication.",
        consequence: "Exclusion from government procurement.",
      },
      {
        code: "E3",
        name: "Workforce Development",
        quantifiedCommitment: "Annual workforce reports; 15% quantum-literate technical staff by 2029; active industry-academic partnership.",
        consequence: "Reduced talent-visa priority.",
      },
    ],
  },
  {
    number: "03",
    pillarKey: "A",
    title: "Academia Obligations",
    role: "The Knowledge Creators",
    summary: "Pivoting from grant-chasing to translational sovereignty engineering, open reproducible science, and aggressive student enrollment.",
    obligations: [
      {
        code: "A1",
        name: "Translational Research",
        quantifiedCommitment: "One technology-readiness-level (TRL) advancement per year; dedicated technology transfer office; three or more enterprise partnerships.",
        consequence: "Reduced Covenant research funding.",
      },
      {
        code: "A2",
        name: "Open Science",
        quantifiedCommitment: "80% open-access publication; reproducibility documentation; annual convening event.",
        consequence: "Bibliometric monitoring and peer review sanctions.",
      },
      {
        code: "A3",
        name: "Talent Pipeline",
        quantifiedCommitment: "30% enrollment increase within three years; diversity targets within five years; co-op placement rate of 80% or higher.",
        consequence: "Reduced funding allocations.",
      },
    ],
  },
  {
    number: "04",
    pillarKey: "I",
    title: "Global Institutions Obligations",
    role: "The Standards Orchestrators",
    summary: "Neutral arbiters of computational trust, developing interoperability protocols, cross-border dispute resolution, and equitable access.",
    obligations: [
      {
        code: "I1",
        name: "Interoperability Standards",
        quantifiedCommitment: "Three or more ratified protocols by 2029; dedicated testing facility; five-nation cross-border demonstration.",
        consequence: "Mandate review and funding reduction.",
      },
      {
        code: "I2",
        name: "Equitable Access",
        quantifiedCommitment: "Cloud access for 50 or more developing nations; education partnerships in 30 or more countries.",
        consequence: "Signatory support withdrawal.",
      },
      {
        code: "I3",
        name: "Conflict Resolution",
        quantifiedCommitment: "Formal dispute mechanism by 2028; quarterly export-control updates; three or more resolved disputes.",
        consequence: "Institutional replacement.",
      },
    ],
  },
];

export const TECH_NATION_MANDATES: TechNationMandate[] = [
  {
    id: 1,
    name: "Transparency Mandate",
    requirement: "Submit core cross-border cloud and orbital data infrastructure to national security audits, treating hyperscale infrastructure as critical national assets.",
    rationale: "When a private entity commands global communications and AI backends on which public functions depend, it cannot be governed as a standard vendor.",
  },
  {
    id: 2,
    name: "Due Process Protocol",
    requirement: "A formalized legal mechanism defining when and how states may mandate suspension of frontier model services, ensuring interventions remain bounded, reviewable, and proportionate.",
    rationale: "Prevents arbitrary kill-switches while maintaining sovereign authority when security boundaries are breached (as in the June 2026 Fable/Mythos episode).",
  },
  {
    id: 3,
    name: "Physical AI Census",
    requirement: "Mandatory reporting on the deployment, physical capabilities, and geographic distribution of autonomous robotic workforces.",
    rationale: "When corporations deploy synthetic populations numbering in the millions, robotic deployments must be tracked with demographic and labor oversight.",
  },
  {
    id: 4,
    name: "Orbital Registry & Sovereignty",
    requirement: "Every orbital asset (communications satellite, edge-compute data center) must be legally tethered to a terrestrial sovereign state signatory.",
    rationale: "Eliminates 'flags of convenience' in low Earth orbit, enforcing communication neutrality and data sovereignty in space.",
  },
];

export const CEO_100_DAY_PLAN: ActionPlanPhase[] = [
  {
    phase: "Phase I",
    days: "Days 1 — 30",
    title: "Mandate, Baseline and Discovery",
    focus: "Appoint accountable executive owner; define critical workflows, data-lifetime exposures, and current-state inventory plan. Launch cryptographic discovery and establish Sovereignty Change Register.",
    pqcFocus: "Discovery: Identify quantum-vulnerable public-key cryptography across hardware, software, services, and vendor products.",
    milestones: [
      "Board-approved executive owner mandate and steering charter",
      "Top-ten external dependency list and initial risk register",
      "Scoped cryptographic and AI model inventory plan",
      "Establishment of the live Sovereignty Change Register",
    ],
    deliverable: "Board-Approved Mandate & Enterprise Dependency Baseline",
  },
  {
    phase: "Phase II",
    days: "Days 31 — 60",
    title: "Exposure Mapping, Prioritization & Failure Testing",
    focus: "Classify cloud, model, quantum, and supplier dependencies. Test contractual rights, data export, portability, and recovery objectives. Execute tabletop exercise and failover test.",
    pqcFocus: "Prioritization & Crypto-Agility: Rank systems by exposure, business consequence, and data lifetime; define target cryptographic patterns.",
    milestones: [
      "Dependency classification map and tested recovery objectives",
      "Tabletop exercise of Fable 5-style cloud access shutdown",
      "Exception report and ranked remediation priority list",
      "Documented event-triggered escalation criteria",
    ],
    deliverable: "Dependency Exposure Map & Validated Failover Test Report",
  },
  {
    phase: "Phase III",
    days: "Days 61 — 90",
    title: "Architecture Decisions, Migration Pilots & Assurance",
    focus: "Execute bounded PQC or crypto-agility pilot; test model/provider fallback using portable evaluation suites; assess talent, supplier, and capability gaps under independent assurance.",
    pqcFocus: "Migration: Validate controlled interoperability, implementation, and rollback paths for prioritised systems before scaling.",
    milestones: [
      "Executed PQC hybrid pilot with latency and bandwidth benchmarking",
      "Architecture Decision Records (ADRs) for multi-cloud model portability",
      "Independent challenge of evidence chains and control gaps",
      "Target-state migration candidate selection",
    ],
    deliverable: "PQC Pilot Test Evidence & Validated Target Architecture",
  },
  {
    phase: "Phase IV",
    days: "Days 91 — 100",
    title: "Funded Board Mandate & Continuous Assurance",
    focus: "Submit funded 2026–2035 PQC migration roadmap with detailed 2026–2030 capital plan and explicit funding gates. Mandate adaptive operating rhythm with quarterly board decision reviews.",
    pqcFocus: "Legacy Retirement & Continuous Assurance: Define decommissioning, residual-risk treatment, and crypto-agility maintenance.",
    milestones: [
      "Funded 2026–2035 PQC migration roadmap and capital budget",
      "Installation of quarterly 5-point Board Decision Review cadence",
      "Institutionalization of named P&L accountability for failure",
      "Adoption of the Quantum Covenant Governance Matrix",
    ],
    deliverable: "Funded 2026–2035 Board Mandate & Adaptive Operating System",
  },
];
