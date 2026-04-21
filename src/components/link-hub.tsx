"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

type LinkItem = {
  label: string;
  value: string;
  href: string;
  status: string;
  note: string;
};

type LinkHubProps = {
  items: readonly LinkItem[];
};

export function LinkHub({ items }: LinkHubProps) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  async function handleCopy(item: LinkItem) {
    try {
      await navigator.clipboard.writeText(item.href);
      setCopiedLabel(item.label);
      window.setTimeout(() => setCopiedLabel(null), 1600);
    } catch {
      setCopiedLabel(null);
    }
  }

  return (
    <div className="grid gap-4">
      {items.map((item) => {
        const copied = copiedLabel === item.label;

        return (
          <article key={item.label} className="panel noise rounded-3xl p-5 transition hover:border-cyan-300/35">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="mt-1 font-mono text-sm text-cyan-100">{item.value}</p>
              </div>
              <span className="signal-chip rounded-full px-3 py-1 text-xs">{item.status}</span>
            </div>

            <p className="section-copy mt-3 text-sm">{item.note}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/50"
              >
                <ExternalLink className="h-4 w-4" />
                Open
              </a>
              <button
                type="button"
                onClick={() => handleCopy(item)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
