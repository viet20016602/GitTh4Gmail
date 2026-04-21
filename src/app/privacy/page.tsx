import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy note for the SolComp project website and repository surface.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="panel rounded-[2rem] p-8">
        <p className="eyebrow">Policy</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Privacy</h1>
        <div className="section-copy mt-6 space-y-4">
          <p>
            This MVP website is a static project presentation for SolComp. It does not ship user accounts, tracking
            scripts, or a data collection backend by default.
          </p>
          <p>
            If analytics, wallets, forms, or API telemetry are added later, this document should be updated before those
            features are enabled in production.
          </p>
          <p>
            For repository governance and security reporting, refer to the root-level <span className="text-white">SECURITY.md</span> file.
          </p>
        </div>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
