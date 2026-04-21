"use client";

import { useMemo, useState } from "react";

type ReadinessItem = {
  title: string;
  status: "done" | "pending";
  description: string;
};

type ReadinessBoardProps = {
  items: readonly ReadinessItem[];
};

const filters = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Pending", value: "pending" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export function ReadinessBoard({ items }: ReadinessBoardProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const doneCount = useMemo(() => items.filter((item) => item.status === "done").length, [items]);
  const completion = Math.round((doneCount / items.length) * 100);

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") {
      return items;
    }

    return items.filter((item) => item.status === activeFilter);
  }, [activeFilter, items]);

  return (
    <div className="panel noise rounded-[2rem] p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Live board</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Current readiness</h2>
        </div>

        <div className="rounded-3xl border border-white/8 bg-slate-950/60 px-5 py-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Completion</p>
          <p className="mt-2 font-mono text-3xl text-cyan-100">{completion}%</p>
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300"
          style={{ width: `${completion}%` }}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = filter.value === activeFilter;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                  : "border border-white/10 bg-white/6 text-slate-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-4">
        {visibleItems.map((item) => {
          const isDone = item.status === "done";

          return (
            <article key={item.title} className="rounded-3xl border border-white/8 bg-slate-950/50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    isDone
                      ? "border border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
                      : "border border-amber-300/30 bg-amber-300/10 text-amber-100"
                  }`}
                >
                  {isDone ? "Done" : "Pending"}
                </span>
              </div>
              <p className="section-copy mt-3">{item.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
