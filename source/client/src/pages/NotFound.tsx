/** Design reminder: even the error state remains a calm Roman editorial artifact. */
import { ArrowLeft } from "lucide-react";
import { assets } from "@/content/siteData";

export default function NotFound() {
  return (
    <main className="not-found">
      <img src={assets.seal.lg} width="180" height="180" alt="" />
      <p className="eyebrow">Error · 404</p>
      <h1>This path has<br /><em>fallen from the map.</em></h1>
      <p>The architecture remains. Return to The Quantum Imperative.</p>
      <a href="/"><ArrowLeft aria-hidden="true" />Back to the book</a>
    </main>
  );
}

