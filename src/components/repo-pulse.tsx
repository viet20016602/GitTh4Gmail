"use client";

import { useEffect, useState } from "react";

type RepoPulseData = {
  fullName: string;
  visibility: string;
  defaultBranch: string;
  stargazersCount: number;
  forksCount: number;
  openIssuesCount: number;
  latestRelease: string;
};

type RepoResponse = {
  full_name: string;
  visibility: string;
  default_branch: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
};

type ReleaseResponse = {
  tag_name: string;
};

export function RepoPulse() {
  const [data, setData] = useState<RepoPulseData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [repoRes, releaseRes] = await Promise.all([
          fetch("https://api.github.com/repos/viet20016602/SolComp", {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch("https://api.github.com/repos/viet20016602/SolComp/releases/latest", {
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        const repoJson = (await repoRes.json()) as RepoResponse;
        const releaseJson = releaseRes.ok ? ((await releaseRes.json()) as ReleaseResponse) : null;

        if (cancelled) {
          return;
        }

        setData({
          fullName: repoJson.full_name,
          visibility: repoJson.visibility,
          defaultBranch: repoJson.default_branch,
          stargazersCount: repoJson.stargazers_count,
          forksCount: repoJson.forks_count,
          openIssuesCount: repoJson.open_issues_count,
          latestRelease: releaseJson?.tag_name ?? "Not published yet",
        });
        setStatus("ready");
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="panel noise rounded-[2rem] p-6">
      <p className="eyebrow">GitHub pulse</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">Verifiable repository signals.</h2>

      {status === "loading" ? (
        <p className="section-copy mt-4">Loading public repository state from GitHub...</p>
      ) : null}

      {status === "error" ? (
        <p className="section-copy mt-4">
          The public repository signal could not be loaded right now. The module will recover automatically once the API
          is reachable again.
        </p>
      ) : null}

      {status === "ready" && data ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Repository", data.fullName],
            ["Visibility", data.visibility],
            ["Default branch", data.defaultBranch],
            ["Latest release", data.latestRelease],
            ["Stars", String(data.stargazersCount)],
            ["Forks", String(data.forksCount)],
            ["Open issues", String(data.openIssuesCount)],
            ["Source state", "Live public repo"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/8 bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
              <p className="mt-2 text-base font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
