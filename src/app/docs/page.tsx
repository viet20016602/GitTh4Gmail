import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { docsSections, officialSiteUrl, operatingFlow, pagesUrl, repoUrl, socialUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "SolComp Docs",
  description: "Project notes, SOLC positioning, repository workflow, and deployment references for SolComp.",
};

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" aria-label="Back to SolComp home">
          <BrandMark />
        </Link>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href={repoUrl} target="_blank" rel="noreferrer" className="signal-chip rounded-full px-4 py-2">
            Repository
          </a>
          <a href={socialUrl} target="_blank" rel="noreferrer" className="signal-chip rounded-full px-4 py-2">
            Social
          </a>
        </div>
      </div>

      <section className="panel noise mt-10 rounded-[2rem] p-8">
        <p className="eyebrow">Documentation</p>
        <h1 className="section-title mt-4 font-semibold text-white">SolComp (SOLC)</h1>
        <p className="section-copy mt-5 max-w-3xl text-lg">
          This MVP repository is designed to act as a clean public surface for the SolComp project. It couples a dark,
          AI-native website with docs, governance files, and deployment automation suitable for public crypto visibility.
        </p>
      </section>

      <section className="mt-10 grid gap-6">
        {docsSections.map((section) => (
          <article key={section.title} className="panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="panel rounded-[2rem] p-8">
          <p className="eyebrow">Project flow</p>
          <div className="mt-5 space-y-5">
            {operatingFlow.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/8 bg-slate-950/50 p-5">
                <p className="font-mono text-sm text-cyan-200">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="section-copy mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel rounded-[2rem] p-8">
          <p className="eyebrow">Repository operations</p>
          <div className="mt-5 space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-white">Local development</h2>
              <pre className="terminal-text mt-3 overflow-x-auto rounded-3xl border border-white/8 bg-slate-950/60 p-5 text-sm">
                <code>{`npm install\nnpm run dev\nnpm run lint\nnpm run typecheck\nnpm run build`}</code>
              </pre>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Deployment</h2>
              <p className="section-copy mt-3">
                Push to <span className="text-white">main</span> to trigger static deployment. The public references are{" "}
                <a href={officialSiteUrl} className="text-cyan-200 underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                  {officialSiteUrl}
                </a>
                {" "}for the official website and{" "}
                <a href={pagesUrl} className="text-cyan-200 underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                  {pagesUrl}
                </a>
                {" "}for the repository-hosted Pages build.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Release strategy</h2>
              <p className="section-copy mt-3">
                Push a semantic tag such as <span className="text-white">v0.1.0</span>. GitHub Actions builds the static
                export and publishes a release artifact automatically.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
