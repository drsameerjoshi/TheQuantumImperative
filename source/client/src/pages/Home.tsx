/**
 * Design reminder: Imperial Resilience Editorial — Roman stone and fire remain dominant;
 * quantum cyan is a precise structural accent, never generic SaaS neon.
 */
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Pause,
  Play,
  RotateCcw,
  VolumeX,
  X,
} from "lucide-react";
import {
  AMAZON_URL,
  assets,
  covenantPillars,
  instruments,
  navItems,
  proofPoints,
  stackLayers,
  stageLines,
} from "@/content/siteData";

function AmazonLink({ className = "", label = "Order on Amazon" }: { className?: string; label?: string }) {
  return (
    <a className={`amazon-link ${className}`} href={AMAZON_URL} rel="noopener noreferrer">
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.7} />
    </a>
  );
}

function CeremonialDivider({ light = false }: { light?: boolean }) {
  return (
    <div className={`ceremonial-divider ${light ? "ceremonial-divider--light" : ""}`} aria-hidden="true">
      <span />
      <img src={assets.seal.sm} width="44" height="44" alt="" />
      <span />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => firstLinkRef.current?.focus());

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="The Quantum Imperative — back to top">
          <img
            className="brand__seal"
            src={assets.seal.md}
            srcSet={`${assets.seal.sm} 64w, ${assets.seal.md} 128w`}
            sizes="44px"
            width="44"
            height="44"
            alt=""
          />
          <span className="brand__text">
            <strong>The Quantum Imperative</strong>
            <small>The Convergence Series · Volume II</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
          <AmazonLink className="amazon-link--small" label="Amazon" />
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="mobile-nav mobile-nav--open" role="dialog" aria-modal="true" aria-label="Site navigation">
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href], index) => (
              <a ref={index === 0 ? firstLinkRef : undefined} href={href} key={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
            <AmazonLink label="Order on Amazon" />
          </nav>
        </div>
      )}
    </header>
  );
}

function CoverFlip() {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Soft automatic periodic flip (every 7.5s, pauses when user hovers to inspect)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setFlipped((value) => !value);
    }, 7500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="cover-shell"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className="cover-flip"
        aria-label={flipped ? "The Quantum Imperative back cover — show front cover" : "The Quantum Imperative front cover — show back cover"}
        aria-pressed={flipped}
        onClick={() => setFlipped((value) => !value)}
      >
        <span className={`cover-flip__inner ${flipped ? "is-flipped" : ""}`}>
          <span className="cover-face cover-face--front">
            <img
              src={assets.frontCover.md}
              srcSet={`${assets.frontCover.sm} 420w, ${assets.frontCover.md} 720w, ${assets.frontCover.lg} 1080w`}
              sizes="(max-width: 767px) 52vw, 31vw"
              width="720"
              height="1080"
              fetchPriority="high"
              alt="The Quantum Imperative front cover"
            />
          </span>
          <span className="cover-face cover-face--back">
            <img
              src={assets.backCover.md}
              srcSet={`${assets.backCover.sm} 420w, ${assets.backCover.md} 720w, ${assets.backCover.lg} 1080w`}
              sizes="(max-width: 767px) 52vw, 31vw"
              width="720"
              height="1080"
              loading="lazy"
              alt="The Quantum Imperative back cover"
            />
          </span>
        </span>
      </button>
      <button type="button" className="cover-control" onClick={() => setFlipped((value) => !value)}>
        <RotateCcw aria-hidden="true" size={15} />
        {flipped ? "Front cover" : "Back cover"}
      </button>
    </div>
  );
}

function OpeningFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || ended) {
      if (ended) video.currentTime = 0;
      setEnded(false);
      await video.play();
      setPlaying(true);
      return;
    }
    video.pause();
    setPlaying(false);
  };

  return (
    <section className="film-section section" aria-labelledby="film-title">
      <div className="section-shell film-heading">
        <p className="eyebrow">A visual prologue</p>
        <h2 id="film-title">Rome was the warning.<br /><em>The power to decide is the answer.</em></h2>
        <p className="section-intro">The current opening sequence establishes the world of the book. The forthcoming author film will place Prof. Dr. Sameer Joshi at the center of the argument.</p>
      </div>

      <div className="film-frame section-shell">
        <video
          ref={videoRef}
          className="film-video"
          preload="none"
          muted
          playsInline
          poster={assets.opening.poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => { setPlaying(false); setEnded(true); }}
        >
          <source src={assets.opening.webm} type="video/webm" />
          <source src={assets.opening.mp4} type="video/mp4" />
        </video>
        <div className="film-frame__shade" aria-hidden="true" />
        <button className="film-control" type="button" onClick={togglePlayback} aria-label={playing ? "Pause opening sequence" : ended ? "Replay opening sequence" : "Play opening sequence"}>
          <span>{playing ? <Pause aria-hidden="true" /> : ended ? <RotateCcw aria-hidden="true" /> : <Play aria-hidden="true" />}</span>
          {playing ? "Pause" : ended ? "Replay opening" : "Play opening sequence"}
        </button>
        <div className="film-status">
          <VolumeX aria-hidden="true" size={15} />
          <span>Muted · 17 seconds</span>
        </div>
      </div>
      <p className="coming-soon">Full TQI video with Prof. Dr. Joshi <strong>coming soon</strong></p>
    </section>
  );
}

function StackExplorer() {
  const [active, setActive] = useState(0);
  const layer = stackLayers[active];

  return (
    <section className="stack-section section" id="architecture" aria-labelledby="stack-title">
      <div className="section-shell split-heading">
        <div>
          <p className="eyebrow">The Sovereign Stack</p>
          <h2 id="stack-title">Six layers.<br /><em>One dependency map.</em></h2>
        </div>
        <p>Institutional autonomy cannot exist at the software layer alone. The stack begins with power and ends with the people capable of operating, challenging, and restoring it.</p>
      </div>

      <div className="section-shell desktop-explorer">
        <div className="layer-rail" role="tablist" aria-label="Sovereign Stack layers">
          {stackLayers.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`layer-panel-${item.id}`}
              onClick={() => setActive(index)}
            >
              <span>{item.id}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <article id={`layer-panel-${layer.id}`} className="layer-panel" role="tabpanel">
          <p className="layer-panel__code">Layer {layer.id} · {layer.thesis}</p>
          <h3>{layer.title}</h3>
          <p>{layer.copy}</p>
          <div className="directive">
            <span>Executive directive</span>
            <strong>{layer.directive}</strong>
          </div>
          <div className="layer-pagination" aria-label="Layer position">
            {stackLayers.map((item, index) => <span key={item.id} className={active === index ? "is-active" : ""}>{index + 1}</span>)}
          </div>
        </article>
      </div>

      <div className="section-shell mobile-accordion">
        {stackLayers.map((item, index) => (
          <details key={item.id} open={index === 0}>
            <summary><span>{item.id}</span>{item.title}<ChevronDown aria-hidden="true" /></summary>
            <div>
              <p className="layer-panel__code">{item.thesis}</p>
              <p>{item.copy}</p>
              <strong>{item.directive}</strong>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function CovenantExplorer() {
  const [active, setActive] = useState(0);
  const pillar = covenantPillars[active];

  return (
    <section className="covenant-section section" id="covenant" aria-labelledby="covenant-title">
      <div className="section-shell split-heading split-heading--reverse">
        <p>The Covenant is not a declaration. It is a proposed architecture in which every burden buys a privilege, every obligation can be scored, and named people remain accountable.</p>
        <div>
          <p className="eyebrow">The Quantum Covenant</p>
          <h2 id="covenant-title">Four pillars.<br /><em>Twelve obligations.</em></h2>
        </div>
      </div>

      <div className="section-shell covenant-explorer">
        <div className="pillar-nav" role="tablist" aria-label="Covenant pillars">
          {covenantPillars.map((item, index) => (
            <button key={item.id} role="tab" type="button" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{item.id}</span>
              <strong>{item.stakeholder}</strong>
              <small>{item.codes}</small>
            </button>
          ))}
        </div>
        <article className="pillar-panel" role="tabpanel">
          <header>
            <p>{pillar.codes} · {pillar.name}</p>
            <h3>{pillar.stakeholder} obligations</h3>
            <span>{pillar.intro}</span>
          </header>
          <div className="obligations">
            {pillar.obligations.map(([code, title, copy]) => (
              <article key={code}>
                <span>{code}</span>
                <div><h4>{title}</h4><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </article>
      </div>

      <div className="section-shell covenant-mobile">
        {covenantPillars.map((item, index) => (
          <details key={item.id} open={index === 0}>
            <summary><span>{item.id}</span>{item.stakeholder}<small>{item.codes}</small><ChevronDown aria-hidden="true" /></summary>
            <div className="covenant-mobile__content">
              <p>{item.intro}</p>
              {item.obligations.map(([code, title, copy]) => (
                <article key={code}><span>{code}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function StageLine({ line, index }: { line: string; index: number }) {
  return (
    <article className="stage-line">
      <span>0{index + 1}</span>
      <blockquote>“{line}”</blockquote>
    </article>
  );
}

function Home() {
  return (
    <div id="top" className="site-root">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content">
        <section id="book" className="hero" aria-labelledby="hero-title">
          <picture className="hero__background" aria-hidden="true">
            <source media="(max-width: 767px)" srcSet={assets.hero.mobile} />
            <source media="(max-width: 1199px)" srcSet={assets.hero.tablet} />
            <img src={assets.hero.desktop} width="1920" height="1080" alt="" />
          </picture>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__content section-shell">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">The Convergence Series · Volume II</p>
              <h1 id="hero-title">The architecture of <em>sovereign survival</em> in the quantum era.</h1>
              <p className="hero__subline">Moving beyond aspirational declarations to verifiable capability across compute, causal AI, cryptography, and energy.</p>
              <p className="hero__authors">Prof. Dr. Sameer Joshi <span aria-hidden="true">×</span> Thorsten Buehrmann</p>
              <AmazonLink />
              <p className="availability">Available now · Kindle & paperback</p>
            </div>
            <CoverFlip />
          </div>
          <div className="hero__footnote section-shell">
            <span>We are Caesar.</span>
            <strong>Rome is burning. But this time, the fire is quantum.</strong>
          </div>
        </section>

        <section className="proof-strip" aria-label="Book architecture at a glance">
          <div className="section-shell">
            {proofPoints.map((point) => (
              <article key={point.number}>
                <strong>{point.number}</strong>
                <div><span>{point.label}</span><p>{point.detail}</p></div>
              </article>
            ))}
          </div>
          <p className="proof-note">The book’s June 2026 case study shows how two specified frontier-model services were temporarily suspended after a U.S. directive—without overstating the broader event.</p>
        </section>

        <OpeningFilm />

        <CeremonialDivider light />

        <section className="instruments-section section" aria-labelledby="instruments-title">
          <div className="section-shell split-heading">
            <div>
              <p className="eyebrow">From warning to execution</p>
              <h2 id="instruments-title">Three instruments.<br /><em>No theatre.</em></h2>
            </div>
            <p>The book does not ask leaders to admire the transition. It gives them an architecture for what to own, secure, govern, and build before dependency becomes sovereignty debt.</p>
          </div>
          <div className="section-shell instrument-list">
            {instruments.map((instrument) => (
              <article key={instrument.number}>
                <span className="instrument-number">{instrument.number}</span>
                <div>
                  <p>{instrument.kicker}</p>
                  <h3>{instrument.title}</h3>
                </div>
                <p>{instrument.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <StackExplorer />
        <CovenantExplorer />

        <CeremonialDivider light />

        <section className="lines-section section" aria-labelledby="lines-title">
          <div className="section-shell lines-heading">
            <p className="eyebrow">Lines for the stage</p>
            <h2 id="lines-title">Six sentences built<br />to <em>survive the panel.</em></h2>
          </div>
          <div className="section-shell stage-lines">
            {stageLines.map((line, index) => <StageLine key={line} line={line} index={index} />)}
          </div>
        </section>

        <section className="foreword-section section" aria-label="Foreword quotation">
          <picture aria-hidden="true">
            <source media="(max-width: 767px)" srcSet={assets.marble.mobile} />
            <source media="(max-width: 1199px)" srcSet={assets.marble.tablet} />
            <img src={assets.marble.desktop} width="1920" height="620" loading="lazy" alt="" />
          </picture>
          <div className="foreword-section__veil" aria-hidden="true" />
          <div className="section-shell foreword-content">
            <p className="eyebrow">From the foreword</p>
            <blockquote>“The fire is already burning. This book is your architectural blueprint for what comes next.”</blockquote>
            <p>Written for heads of government and their advisors, ministers, boards and C-suites, consultants, academics, and investors underwriting the transition.</p>
          </div>
        </section>

        <section className="authors-section section" id="authors" aria-labelledby="authors-title">
          <div className="section-shell authors-heading">
            <p className="eyebrow">The authors</p>
            <h2 id="authors-title">Industry experience.<br /><em>Strategic consequence.</em></h2>
          </div>
          <div className="section-shell authors-grid">
            <article className="author-card author-card--sameer">
              <img
                src={assets.sameer.md}
                srcSet={`${assets.sameer.sm} 256w, ${assets.sameer.md} 512w`}
                sizes="(max-width: 767px) 44vw, 260px"
                width="512"
                height="512"
                loading="lazy"
                alt="Prof. Dr. Sameer Joshi"
              />
              <div>
                <p>Professor · Deep-tech founder · Former Siemens VP & Business CEO</p>
                <h3>Prof. Dr. Sameer Joshi</h3>
                <p>Bridges high-stakes industrial operations, artificial intelligence, quantum paradigms, and board-level governance. Co-founder of Quasality and co-author of The Convergence Series.</p>
              </div>
            </article>
            <article className="author-card author-card--thorsten">
              <img
                src={assets.thorsten.md}
                srcSet={`${assets.thorsten.sm} 256w, ${assets.thorsten.md} 512w`}
                sizes="(max-width: 767px) 44vw, 260px"
                width="512"
                height="512"
                loading="lazy"
                alt="Thorsten Buehrmann"
              />
              <div>
                <p>Strategist · Systems architect · Serial entrepreneur</p>
                <h3>Thorsten Buehrmann</h3>
                <p>Works at the intersection of emerging computation, industrial strategy, operational resilience, and national sovereignty. Co-founder of Quasality and co-author of The Convergence Series.</p>
              </div>
            </article>
          </div>
          <p className="disclosure section-shell">The authors are co-founders of Quasality, a company exploring quantum-causal and sovereign-computing architectures. The book is strategic analysis, not a product claim or commercial offer.</p>
        </section>

        <section className="series-section section" aria-labelledby="series-title">
          <div className="section-shell series-heading">
            <p className="eyebrow">The Convergence Series</p>
            <h2 id="series-title">Three volumes.<br /><em>One widening horizon.</em></h2>
          </div>
          <div className="section-shell series-row">
            <a href="https://theconvergenceplaybook.com" rel="noopener noreferrer">
              <span>I</span><small>Available now</small><strong>The Convergence Playbook</strong><ArrowUpRight aria-hidden="true" />
            </a>
            <article className="series-current">
              <span>II</span><small>Current volume</small><strong>The Quantum Imperative</strong>
            </article>
            <article>
              <span>III</span><small>In preparation</small><strong>The Spiritual Convergence</strong>
            </article>
          </div>
          <CeremonialDivider />
        </section>

        <section className="forum-finale section" aria-labelledby="finale-title">
          <picture className="forum-finale__background" aria-hidden="true">
            <source media="(max-width: 767px)" srcSet={assets.forum.mobile} />
            <source media="(max-width: 1199px)" srcSet={assets.forum.tablet} />
            <img src={assets.forum.desktop} width="1920" height="1080" loading="lazy" alt="" />
          </picture>
          <div className="forum-finale__veil" aria-hidden="true" />
          <div className="section-shell forum-finale__content">
            <div>
              <p className="eyebrow">Available now</p>
              <h2 id="finale-title">Retain the capacity<br /><em>to decide.</em></h2>
              <p>The Quantum Imperative turns strategic warning into an operating architecture for sovereign institutions.</p>
              <AmazonLink label="Order the book on Amazon" />
              <p className="isbn">ISBN 978-1-0681840-2-4 · ASIN B0HHFC6TG6</p>
            </div>
            <img
              className="finale-cover"
              src={assets.frontCover.md}
              srcSet={`${assets.frontCover.sm} 420w, ${assets.frontCover.md} 720w`}
              sizes="(max-width: 767px) 35vw, 260px"
              width="720"
              height="1080"
              loading="lazy"
              alt="The Quantum Imperative book cover"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__top">
          <a className="footer-brand" href="#top">
            <img src={assets.seal.sm} width="40" height="40" alt="" />
            <span><strong>The Quantum Imperative</strong><small>The Convergence Series · Volume II</small></span>
          </a>
          <nav aria-label="Footer navigation">
            <a href="/imprint">Imprint / Impressum</a>
            <a href="/privacy">Privacy / Datenschutz</a>
            <a href={AMAZON_URL} rel="noopener noreferrer">Amazon <ArrowUpRight aria-hidden="true" size={14} /></a>
          </nav>
        </div>
        <div className="section-shell site-footer__bottom">
          <p>© 2026 Sameer Joshi & Thorsten Buehrmann. All rights reserved.</p>
          <a href="#top">Back to top <ArrowRight aria-hidden="true" size={14} /></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
