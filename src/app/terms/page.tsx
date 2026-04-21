import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms note for the SolComp project website and repository surface.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="panel rounded-[2rem] p-8">
        <p className="eyebrow">Policy</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Terms</h1>
        <div className="section-copy mt-6 space-y-4">
          <p>
            The repository content is provided as an open-source MVP for experimentation, education, and project
            iteration. No production guarantees, token claims, or financial promises are implied by this demo.
          </p>
          <p>
            If SolComp later exposes live infrastructure, APIs, staking, or economic mechanisms, these terms should be
            expanded to reflect the actual operational surface and jurisdictional requirements.
          </p>
          <p>
            The current codebase is governed by the repository license and contribution rules in the root documentation.
          </p>
        </div>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
