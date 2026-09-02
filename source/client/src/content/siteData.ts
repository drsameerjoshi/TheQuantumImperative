export const AMAZON_URL = "https://www.amazon.com/dp/B0HHFC6TG6";

export const assets = {
  seal: {
    sm: "/assets/media/tqi-seal-64.webp",
    md: "/assets/media/tqi-seal-128.webp",
    lg: "/assets/media/tqi-seal-256.webp",
  },
  hero: {
    mobile: "/assets/media/tqi-hero-mobile-750x1000.webp",
    tablet: "/assets/media/tqi-hero-1440x900.webp",
    desktop: "/assets/media/tqi-hero-1920x1080.webp",
  },
  frontCover: {
    sm: "/assets/media/tqi-front-cover-420.webp",
    md: "/assets/media/tqi-front-cover-720.webp",
    lg: "/assets/media/tqi-front-cover-1080.webp",
  },
  backCover: {
    sm: "/assets/media/tqi-back-cover-420.webp",
    md: "/assets/media/tqi-back-cover-720.webp",
    lg: "/assets/media/tqi-back-cover-1080.webp",
  },
  sameer: {
    sm: "/assets/media/sameer-joshi-256.webp",
    md: "/assets/media/sameer-joshi-512.webp",
  },
  thorsten: {
    sm: "/assets/media/thorsten-buehrmann-256.webp",
    md: "/assets/media/thorsten-buehrmann-512.webp",
  },
  forum: {
    mobile: "/assets/media/tqi-forum-960x1200.webp",
    tablet: "/assets/media/tqi-forum-1440x900.webp",
    desktop: "/assets/media/tqi-forum-1920x1080.webp",
  },
  marble: {
    mobile: "/assets/media/tqi-marble-960x540.webp",
    tablet: "/assets/media/tqi-marble-1440x520.webp",
    desktop: "/assets/media/tqi-marble-1920x620.webp",
  },
  opening: {
    poster: "/assets/media/tqi-opening-poster-960x540.jpg",
    mp4: "/assets/media/tqi-opening-v13-2-web.mp4",
    webm: "/assets/media/tqi-opening-v13-2-web.webm",
  },
} as const;

export const proofPoints = [
  { number: "12", label: "obligations", detail: "across four institutional pillars" },
  { number: "6", label: "stack layers", detail: "from energy to talent sovereignty" },
  { number: "100", label: "days", detail: "from dependency audit to board action" },
] as const;

export const instruments = [
  {
    number: "I",
    title: "Quantum Covenant Architecture",
    kicker: "Governance that binds",
    copy: "A scoreable architecture of mutual obligation—four institutional pillars, twelve auditable commitments, explicit dates, and visible consequences.",
  },
  {
    number: "II",
    title: "The Sovereign Stack",
    kicker: "Capability that holds",
    copy: "A physical-to-cognitive blueprint spanning dependable energy, materials, compute, causal applications, auditability, and the people who operate them.",
  },
  {
    number: "III",
    title: "100-Day CEO Action Plan",
    kicker: "Execution that starts Monday",
    copy: "A board-ready sequence to expose dependency debt, assign named authority, protect critical workflows, and build an executable roadmap.",
  },
] as const;

export const stackLayers = [
  {
    id: "00",
    title: "Energy Sovereignty",
    thesis: "Power that powers the stack",
    copy: "Secure dependable baseload, grid stability, and dedicated power agreements before strategic compute procurement.",
    directive: "Treat energy as the physical foundation of every sovereign compute decision.",
  },
  {
    id: "01",
    title: "Materials & Compute",
    thesis: "Data, connectivity, and physical inputs",
    copy: "Control critical materials, fabrication pathways, data access, and resilient connectivity instead of mistaking vendor access for capability.",
    directive: "Map single-source exposure from materials to data routes and build substitutable pathways.",
  },
  {
    id: "02",
    title: "Compute Infrastructure & Quantum Algorithms",
    thesis: "From access to auditable capability",
    copy: "Build resilient access to classical and quantum compute, post-quantum cryptography, and deployable algorithmic capability.",
    directive: "Require portability, cryptographic assurance, and testable continuity across compute providers.",
  },
  {
    id: "03",
    title: "Causal Models & Applications",
    thesis: "Own the decision logic",
    copy: "Retain control of high-consequence causal models and application logic rather than renting opaque outcomes from external intelligence.",
    directive: "Make decision-critical models explainable, transferable, and exercisable under stress.",
  },
  {
    id: "04",
    title: "Governance & Sovereign Auditability",
    thesis: "Glass-box computational trust",
    copy: "Make every critical decision traceable, testable, and subject to named human authority with the competence to override it.",
    directive: "Attach evidence, exceptions, counterfactual tests, and accountable sign-off to consequential decisions.",
  },
  {
    id: "05",
    title: "Talent Sovereignty",
    thesis: "The expertise that cannot be rented",
    copy: "Sustain the complete chain of expertise—from devices and cryogenics to software, assurance, operators, and leaders.",
    directive: "Build enduring teams that can operate, challenge, and restore the stack without external permission.",
  },
] as const;

export const covenantPillars = [
  {
    id: "01",
    codes: "G1–G3",
    name: "The Sovereign Architects",
    stakeholder: "Government",
    intro: "Establish regulatory clarity, long-horizon investment, and domestic talent and infrastructure pipelines.",
    obligations: [
      ["G1", "Regulatory Clarity", "Publish transition timelines, define control categories, and harmonize with trusted partners."],
      ["G2", "Strategic R&D Investment", "Fund long-horizon sovereign quantum capability and report progress against explicit commitments."],
      ["G3", "Talent & Infrastructure", "Build national facilities, talent pathways, and the educational capacity required to operate them."],
    ],
  },
  {
    id: "02",
    codes: "E1–E3",
    name: "The Resilience Engineers",
    stakeholder: "Enterprise",
    intro: "Turn responsible deployment, standards participation, and workforce readiness into operating disciplines.",
    obligations: [
      ["E1", "Responsible Deployment", "Create independent assurance, named override authority, and decision-specific audit trails."],
      ["E2", "Standards Participation", "Contribute engineering capacity to standards bodies and implement quantum-safe requirements."],
      ["E3", "Workforce Development", "Measure workforce readiness, expand quantum literacy, and build academic partnerships."],
    ],
  },
  {
    id: "03",
    codes: "A1–A3",
    name: "The Knowledge Creators",
    stakeholder: "Academia",
    intro: "Move research from publication to reproducible, transferable, and deployable sovereign capability.",
    obligations: [
      ["A1", "Translational Research", "Advance technology readiness through transfer capacity and meaningful enterprise partnerships."],
      ["A2", "Open Science", "Make research accessible, reproducible, and regularly tested through convening and peer challenge."],
      ["A3", "Talent Pipeline", "Expand enrollment, diversity, and operational placements across the quantum workforce chain."],
    ],
  },
  {
    id: "04",
    codes: "I1–I3",
    name: "The Standards Orchestrators",
    stakeholder: "Global Institutions",
    intro: "Create interoperable standards, wider access, and credible dispute resolution across national boundaries.",
    obligations: [
      ["I1", "Interoperability Standards", "Ratify protocols, provide testing capacity, and prove cross-border operation."],
      ["I2", "Equitable Access", "Expand trusted compute access and education partnerships beyond incumbent technology powers."],
      ["I3", "Conflict Resolution", "Maintain a formal dispute mechanism and review control regimes as conditions change."],
    ],
  },
] as const;

export const stageLines = [
  "Germany is not the crisis. Germany is the preview.",
  "Owning the actuators is not owning the stack.",
  "A state that rents its intelligence will eventually rent its sovereignty.",
  "The quantum transition will not wait for any country’s pension reform.",
  "A grocer built in five years what the state could not decide in ten.",
  "An ambition is not a disbursement. A financing target is not sovereign capability.",
] as const;

export const navItems = [
  ["The book", "#book"],
  ["Architecture", "#architecture"],
  ["The Covenant", "#covenant"],
  ["Authors", "#authors"],
] as const;
