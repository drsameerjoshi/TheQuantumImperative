export interface QuoteItem {
  id: string;
  quote: string;
  context: string;
  author: string;
  chapterRef: string;
  category: "Geopolitics" | "Architecture" | "Sovereignty" | "Economics" | "AI & Quantum";
}

export const STAGE_QUOTES: QuoteItem[] = [
  {
    id: "preview",
    quote: "Germany is not the crisis. Germany is the preview.",
    context: "On how the erosion of industrial energy baseload and tech dependency foreshadows the fate of all nations that substitute regulatory declarations for physical capability.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 1: The Anatomy of Industrial Evaporation",
    category: "Geopolitics",
  },
  {
    id: "actuators",
    quote: "Owning the actuators is not owning the stack.",
    context: "Why having industrial robots, automobile assembly lines, or medical hardware is meaningless if the cognitive algorithms and silicon running them reside on foreign cloud servers.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 3: The Illusion of Physical Autonomy",
    category: "Architecture",
  },
  {
    id: "rent-intelligence",
    quote: "A state that rents its intelligence will eventually rent its sovereignty.",
    context: "Examining how subscription-based access to foreign foundation models inevitably leads to systemic geopolitical subservience and policy paralysis.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 5: Cognitive Subjugation & Causal Capture",
    category: "Sovereignty",
  },
  {
    id: "verify-refuse",
    quote: "Verify what you own, exercise what you depend on, and refuse to accept a subscription where a capability is required.",
    context: "The foundational operational imperative for institutional resilience and executive risk management in the quantum era.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 8: The Quantum Covenant Architecture",
    category: "Sovereignty",
  },
  {
    id: "territorial",
    quote: "The next dependency will not be territorial. It will determine who remains sovereign.",
    context: "The opening warning on the back cover: quantum computing, causal AI, and compute topologies redefine imperial boundaries faster than armies.",
    author: "The Convergence Series • Volume II",
    chapterRef: "Manifesto & Executive Proclamation",
    category: "Geopolitics",
  },
  {
    id: "sovereignty-debt",
    quote: "Every convenience borrowed from foreign hyperscalers today becomes compound sovereignty debt tomorrow.",
    context: "On the hidden balance-sheet liability of building critical infrastructure upon platforms subject to foreign judicial jurisdiction and sudden sanctions.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 4: The Economics of Sovereignty Debt",
    category: "Economics",
  },
];
