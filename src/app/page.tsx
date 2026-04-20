import Link from "next/link";
import { ArrowRight, Github, MoveRight, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { NeuralField } from "@/components/neural-field";
import {
  governanceCards,
  metrics,
  navLinks,
  protocolLayers,
  repoUrl,
  siteUrl,
  socialUrl,
  swarmFlow,
} from "@/lib/content";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Synaptic Swarm Protocol home">
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
            <p className="eyebrow mb-5">MVP Website + Protocol Demo Repository</p>
            <h1 className="section-title max-w-4xl font-semibold text-white">
              Neuromorphic coordination for adaptive swarm intelligence.
            </h1>
            <p className="section-copy mt-6 max-w-2xl text-lg">
              Synaptic Swarm Protocol (SYNS) is a public MVP for a protocol-native swarm layer where signals compete,
              cluster, and reinforce like synthetic synapses. This repository ships the brand surface, docs, CI, release
              flow, and a visual explanation of the core loop.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                Open GitHub
                <MoveRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Distributed signal routing", "Protocol memory gradients", "Static deploy ready", "Release on tags"].map(
                (chip) => (
                  <span key={chip} className="signal-chip rounded-full px-4 py-2 text-sm">
                    {chip}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="panel noise rounded-3xl p-5">
                <p className="eyebrow">Current deployment target</p>
                <p className="mt-3 text-2xl font-semibold text-white">GitHub Pages</p>
                <p className="section-copy mt-2 text-sm">
                  The repository is configured to export statically and deploy on push to <span className="text-white">main</span>.
                </p>
              </div>
              <div className="panel noise rounded-3xl p-5">
                <p className="eyebrow">Public protocol surface</p>
                <p className="mt-3 text-2xl font-semibold text-white">Website + Docs + Governance</p>
                <p className="section-copy mt-2 text-sm">
                  README, contributing, security, templates, CI, release automation, and docs are all included.
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
                  <p className="mt-1 text-sm text-slate-300">Illustrative consensus mesh for the SYNS MVP</p>
                </div>
                <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  SIGNAL LOCKED
                </div>
              </div>
              <NeuralField className="h-auto w-full rounded-[1.5rem]" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Pulse Density", "0.87"],
                  ["Coalition Drift", "stable"],
                  ["Memory Replay", "queued"],
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

      <section id="protocol" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Protocol architecture</p>
          <h2 className="section-title mt-4 font-semibold text-white">Three layers for one adaptive synaptic loop.</h2>
          <p className="section-copy mt-5 text-lg">
            The MVP stays intentionally concise: it demonstrates how SYNS can move from raw signals to coalition behavior
            and finally to a memory gradient that shapes future swarm outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {protocolLayers.map((layer) => (
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

      <section id="swarm-loop" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Swarm loop</p>
            <h2 className="section-title mt-4 font-semibold text-white">A protocol demo that reads like a live control surface.</h2>
            <p className="section-copy mt-5 text-lg">
              The home experience is not just marketing. It explains how a signal pulse is evaluated, routed, replayed,
              and committed into the adaptive protocol memory.
            </p>

            <div className="mt-8 space-y-4">
              {swarmFlow.map((step, index) => (
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
                <p className="eyebrow">Protocol trace</p>
                <p className="mt-1 text-sm text-slate-300">Illustrative replay log for one coalition cycle</p>
              </div>
              <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                DEMO MODE
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">{'signal.emit({ source: "vision-cluster", confidence: 0.82, locality: "edge-ring-04" })'}</p>
              </div>
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">{'coalition.match({ specialists: 5, replayWindow: "128 traces", entropyBudget: 0.18 })'}</p>
              </div>
              <div className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                <p className="terminal-text text-sm">
                  {'gradient.commit({ reinforce: ["path.a7", "path.c2"], decay: ["path.b4"], consensus: "accepted" })'}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Bus topology", "Mesh-first / no single planner"],
                ["State model", "Ephemeral traces + persistent gradient"],
                ["Explainability", "Readable loop for future litepaper expansion"],
                ["Extensibility", "Ready for tokenomics, node roles, and API docs"],
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
                This repository is structured to live in public from the first commit. Push to <span className="text-white">main</span> for the
                site, push a <span className="text-white">v*</span> tag for a release, and use the docs page plus repository documents as the
                collaboration contract.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={siteUrl}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/18"
              >
                Planned Pages URL
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

      <footer className="border-t border-white/8 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandMark compact />
            <p className="section-copy mt-3 max-w-xl text-sm">
              Built as a public MVP repository for a neuromorphic swarm intelligence protocol narrative, demo surface,
              and GitHub-first release pipeline.
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
