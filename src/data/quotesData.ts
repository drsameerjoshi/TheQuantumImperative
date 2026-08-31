export interface QuoteItem {
  id: string;
  quote: string;
  context: string;
  author: string;
  chapterRef: string;
  category: "Geopolitics" | "Architecture" | "Sovereignty" | "Economics" | "Strategy";
}

export const STAGE_QUOTES: QuoteItem[] = [
  {
    id: "preview",
    quote: "Germany is not the crisis. Germany is the preview.",
    context: "On how demographic contraction, energy vulnerability, and outsourced technological stacks erode the business model of an entire industrial civilization.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 2: The Sovereign Stack (p. 50)",
    category: "Geopolitics",
  },
  {
    id: "actuators",
    quote: "Owning the actuators is not owning the stack.",
    context: "Why physical robotics hardware, robotic arms, and mechanical assembly lines are meaningless if the governing causal algorithms, chips, and cloud compute reside abroad.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 3: The Quantum Tech-Nation (p. 65)",
    category: "Architecture",
  },
  {
    id: "rent-intelligence",
    quote: "A state that rents its intelligence will eventually rent its sovereignty.",
    context: "Examining how subscription-based access to foreign foundation models inevitably leads to systemic geopolitical subservience and policy paralysis.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 5: Causal Quantum Intelligence (p. 86)",
    category: "Sovereignty",
  },
  {
    id: "verify-refuse",
    quote: "Verify what you own, exercise what you depend on, and refuse to accept a subscription where a capability is required.",
    context: "The definitive operational mandate from the operator side for institutional resilience and executive risk management in the quantum era.",
    author: "Prof. Dr. Sameer Joshi",
    chapterRef: "A Closing Word from the Operator Side (p. 156)",
    category: "Strategy",
  },
  {
    id: "grocer",
    quote: "A grocer built in five years what the state could not decide in ten.",
    context: "On Schwarz Digits (Lidl/Kaufland) breaking ground on an €11B, 200MW sovereign cloud datacenter (STACKIT) while state committees debated Gaia-X for a decade.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 2: The Sovereign Stack (p. 51)",
    category: "Economics",
  },
  {
    id: "pension-reform",
    quote: "The quantum transition will not wait for any country’s pension reform.",
    context: "How the collision of fertility collapse, workforce contraction, and exponential automation accelerates regardless of political timelines.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 1: The Demographic Pivot (p. 18)",
    category: "Economics",
  },
  {
    id: "etci",
    quote: "Europe’s ETCI 2.0 aims to mobilize up to €80 billion. An ambition is not a disbursement, and a financing target is not sovereign capability.",
    context: "A stark reminder that announced fund mobilization targets and regulatory compliance manuals cannot substitute for physical foundries and sovereign qubits.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Chapter 2: The Sovereign Stack (p. 48)",
    category: "Geopolitics",
  },
  {
    id: "caesar-rome",
    quote: "We are Caesar. Rome is burning. But this time, the fire is quantum.",
    context: "The opening warning: classical institutions, multinational corporations, and traditional governance operate on timescales too slow for quantum convergence.",
    author: "Prof. Dr. Sameer Joshi & Thorsten Buehrmann",
    chapterRef: "Foreword (p. 6)",
    category: "Strategy",
  },
];
