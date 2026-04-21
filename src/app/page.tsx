import Link from "next/link";
import { ArrowRight, Github, MoveRight, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { FaqAccordion } from "@/components/faq-accordion";
import { LinkHub } from "@/components/link-hub";
import { NeuralField } from "@/components/neural-field";
import { ReadinessBoard } from "@/components/readiness-board";
import { RepoPulse } from "@/components/repo-pulse";
import { SectionHeading } from "@/components/section-heading";
import {
  architectureCards,
  faqItems,
  governanceCards,
  metrics,
  mvpModules,
  navLinks,
  officialSiteUrl,
  officialLinks,
  operatingFlow,
  projectIdentity,
  readinessChecklist,
  repoUrl,
  roadmapItems,
  socialUrl,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="SolComp home">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            {navLinks.map((item) =>
              item.href.startsWith("http") ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={socialUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-cyan-300/60 hover:text-white md:inline-flex"
              aria-label="Visit X profile"
            >
              <Sparkles className="h-4 w-4" />
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/18"
            >
              <Github className="h-4 w-4" />
              Repository
            </a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <p className="eyebrow mb-5">SOLC Project Surface</p>
            <h1 className="section-title max-w-4xl font-semibold text-white">
              Powering the Age of Inference.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg">
              SolComp is the project brand, SOLC is the token, and this repository is the public-facing MVP surface for
              the narrative. It packages a dark AI-native website, docs, branding, release flow, and GitHub automation
              around a simple thesis: inference is the next major compute frontier.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectIdentity.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-slate-950/55 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50"
              >
                Explore docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={officialSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                Visit website
                <MoveRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["SOLC token narrative", "AI inference story", "Static deploy ready", "Release on tags"].map(
                (chip) => (
                  <span key={chip} className="signal-chip rounded-full px-4 py-2 text-sm">
                    {chip}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="panel noise rounded-3xl p-5">
                <p className="eyebrow">Official website</p>
                <p className="mt-3 text-2xl font-semibold text-white">solcomp.xyz</p>
                <p className="section-copy mt-2 text-sm">
                  The project narrative points to the live SolComp website while this repository preserves a public MVP build and docs surface.
                </p>
              </div>
              <div className="panel noise rounded-3xl p-5">
                <p className="eyebrow">Project stack</p>
                <p className="mt-3 text-2xl font-semibold text-white">Brand + Token + Repo</p>
                <p className="section-copy mt-2 text-sm">
                  Website references, docs, repository governance, CI, release automation, and public links are all included.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hero-rings absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-300/12 via-transparent to-emerald-300/12 blur-3xl" />
            <div className="panel noise relative overflow-hidden rounded-[2rem] p-4">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                <div>
                  <p className="eyebrow">Live topology snapshot</p>
                  <p className="mt-1 text-sm text-slate-300">Illustrative inference mesh for the SolComp project narrative</p>
                </div>
                <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  INFERENCE LIVE
                </div>
              </div>
              <NeuralField className="h-auto w-full rounded-[1.5rem]" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Ticker", "SOLC"],
                  ["Narrative", "AI inference"],
                  ["Status", "public"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-slate-950/55 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</p>
                    <p className="mt-2 font-mono text-lg text-cyan-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="panel rounded-3xl p-5">
              <p className="font-mono text-3xl text-cyan-100">{metric.value}</p>
              <h2 className="mt-4 text-lg font-semibold text-white">{metric.label}</h2>
              <p className="section-copy mt-2 text-sm">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="MVP modules"
          title="The first-principles modules a token project actually needs."
          description="An MVP should answer the basic questions first: what the project is, where the official links live, what is already real, and what still needs to be built."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {mvpModules.map((module) => (
            <article key={module.name} className="panel noise rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xl font-semibold text-white">{module.name}</p>
                <span className="signal-chip rounded-full px-3 py-1 text-xs">{module.status}</span>
              </div>
              <p className="mt-4 text-base font-medium text-cyan-100">{module.outcome}</p>
              <p className="section-copy mt-3">{module.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Project thesis"
          title="Three layers for one AI inference narrative."
          description="This MVP turns SolComp into a clear public story about compute demand, distribution, and token relevance without over-claiming product depth that is not yet documented."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {architectureCards.map((layer) => (
            <article key={layer.title} className="panel noise rounded-[2rem] p-6">
              <p className="eyebrow">{layer.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{layer.title}</h3>
              <p className="section-copy mt-4">{layer.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {layer.chips.map((chip) => (
                  <span key={chip} className="signal-chip rounded-full px-3 py-1.5 text-xs">
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow="Official links"
              title="One trusted surface for every public SolComp destination."
              description="If users cannot quickly verify the right website, social channel, and repository, the MVP fails its most basic trust test."
            />

            <div className="mt-10">
              <LinkHub items={officialLinks} />
            </div>
          </div>

          <RepoPulse />
        </div>
      </section>

      <section id="solc-utility" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">SOLC utility</p>
            <h2 className="section-title mt-4 font-semibold text-white">A token story that reads like a live AI control surface.</h2>
            <p className="section-copy mt-5 text-lg">
              The home experience is not just branding polish. It explains how the SolComp story moves from market theme
              to product identity to token positioning in a way that is legible on first glance.
            </p>

            <div className="mt-8 space-y-4">
              {operatingFlow.map((step, index) => (
                <article key={step.title} className="panel rounded-3xl p-5">
                  <p className="font-mono text-sm text-cyan-200">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="section-copy mt-2">{step.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel noise relative overflow-hidden rounded-[2rem] p-6">
            <div className="scan-line absolute inset-x-0 top-16 h-px" />
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/8 bg-slate-950/50 px-4 py-3">
              <div>
                <p className="eyebrow">Project trace</p>
                <p className="mt-1 text-sm text-slate-300">Illustrative project log for one narrative cycle</p>
              </div>
              <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                LIVE NARRATIVE
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">{'project.bind({ name: "SolComp", ticker: "SOLC", chain: "Solana" })'}</p>
              </div>
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">{'narrative.broadcast({ message: "Powering the Age of Inference", channel: "public" })'}</p>
              </div>
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">
                  {'release.publish({ website: "solcomp.xyz", social: "@SolComp_SOL", repo: "viet20016602/GitTh4Gmail" })'}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Ticker", "SOLC"],
                ["Tagline", "Powering the Age of Inference"],
                ["Website", "solcomp.xyz"],
                ["Social", "@SolComp_SOL"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/8 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-500">{label}</p>
                  <p className="mt-3 text-base font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="readiness" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Readiness"
              title="An MVP should show what is live and what is still pending."
              description="Credibility comes from making the current state explicit. This board separates shipped project surfaces from future utility work."
            />

            <div className="mt-10">
              <ReadinessBoard items={readinessChecklist} />
            </div>
          </div>

          <div className="panel noise rounded-[2rem] p-6">
            <p className="eyebrow">Roadmap</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">The next milestones after the current public shell.</h2>

            <div className="mt-8 space-y-5">
              {roadmapItems.map((item) => (
                <article key={item.phase} className="rounded-3xl border border-white/8 bg-slate-950/50 p-5">
                  <p className="font-mono text-sm text-cyan-200">{item.phase}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="section-copy mt-2">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {governanceCards.map((card) => (
            <article key={card.title} className="panel rounded-[2rem] p-6">
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="section-copy mt-3">{card.text}</p>
            </article>
          ))}
        </div>

        <div className="panel noise mt-10 overflow-hidden rounded-[2rem] p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Repository destination</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Ready for public launch, continuous deployment, and tagged releases.</h2>
              <p className="section-copy mt-4 max-w-3xl">
                This repository is structured to support a public crypto-AI project surface. Push to <span className="text-white">main</span> for
                the site build, push a <span className="text-white">v*</span> tag for a release, and use the docs plus repository files as the
                public operating baseline.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={officialSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/18"
              >
                Official website
              </a>
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full border border-white/12 bg-white/6 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30"
              >
                Repository remote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions the MVP should answer without friction."
          description="A public project needs fast answers to the most basic questions. This keeps the narrative legible before deeper docs and token mechanics are published."
          className="mb-10"
        />
        <FaqAccordion items={faqItems} />
      </section>

      <footer className="border-t border-white/8 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandMark compact />
            <p className="section-copy mt-3 max-w-xl text-sm">
              Built as a public MVP repository for the SolComp brand, the SOLC ticker, and an AI inference-first public narrative.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <Link href="/docs" className="footer-link">
              Docs
            </Link>
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>
            <Link href="/terms" className="footer-link">
              Terms
            </Link>
            <a href={socialUrl} target="_blank" rel="noreferrer" className="footer-link">
              X / Social
            </a>
            <a href={repoUrl} target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
