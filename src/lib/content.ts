export const repoUrl = "https://github.com/viet20016602/GitTh4Gmail";
export const socialUrl = "https://x.com/SolComp_SOL";
export const officialSiteUrl = "https://solcomp.xyz/";
export const pagesUrl = "https://viet20016602.github.io/GitTh4Gmail/";

export const navLinks = [
  { label: "Modules", href: "#modules" },
  { label: "Readiness", href: "#readiness" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: repoUrl },
] as const;

export const projectIdentity = [
  { label: "Project", value: "SolComp" },
  { label: "Token", value: "SOLC" },
  { label: "Narrative", value: "Powering the Age of Inference" },
  { label: "Chain", value: "Solana" },
] as const;

export const metrics = [
  {
    value: "SOLC",
    label: "Token Ticker",
    detail: "The token identity for the SolComp network and its inference-driven project narrative.",
  },
  {
    value: "SOL",
    label: "Chain Alignment",
    detail: "Positioned as a Solana-native AI compute and inference story with fast, internet-scale reach.",
  },
  {
    value: "AI",
    label: "Narrative Focus",
    detail: "Inference, compute coordination, and product-ready distribution are the center of the brand.",
  },
  {
    value: "Live",
    label: "Public Surface",
    detail: "Website, social channel, repository, docs, CI, and release flow are configured for public visibility.",
  },
] as const;

export const architectureCards = [
  {
    eyebrow: "Layer 01",
    title: "Inference demand",
    description:
      "SolComp is framed around the growth of AI inference demand. The project narrative emphasizes scalable access to compute, latency-sensitive requests, and always-on model usage.",
    chips: ["Inference", "Scale", "Latency"],
  },
  {
    eyebrow: "Layer 02",
    title: "Network coordination",
    description:
      "The website and docs present SolComp as a coordination layer for distributing and monetizing compute across a broader AI network surface.",
    chips: ["Routing", "Coordination", "Network"],
  },
  {
    eyebrow: "Layer 03",
    title: "SOLC utility",
    description:
      "SOLC is positioned as the token layer tied to the SolComp brand, community attention, product momentum, and future network utility expansion.",
    chips: ["Token", "Utility", "Expansion"],
  },
] as const;

export const operatingFlow = [
  {
    title: "Attract inference demand",
    body: "Frame the project around the accelerating need for AI inference and reliable compute access.",
  },
  {
    title: "Route through SolComp",
    body: "Present SolComp as the brand and platform layer that captures attention, users, and ecosystem alignment.",
  },
  {
    title: "Expand token relevance",
    body: "Position SOLC as the ticker connected to the project narrative, visibility, and long-term network story.",
  },
  {
    title: "Compound public traction",
    body: "Use the site, social account, repository, and releases as the public surface that makes the story legible and investable.",
  },
] as const;

export const governanceCards = [
  {
    title: "Investor-facing repository shell",
    text: "A polished Next.js site, docs route, release workflow, and contributor structure suitable for public crypto project visibility.",
  },
  {
    title: "Brand-consistent project narrative",
    text: "The repository is now aligned to SolComp, the SOLC ticker, and the tagline Powering the Age of Inference.",
  },
  {
    title: "Operational GitHub baseline",
    text: "CI, Pages deploy, releases, issue forms, and contributor docs make the project feel maintained from day one.",
  },
] as const;

export const mvpModules = [
  {
    name: "Identity module",
    status: "Live",
    outcome: "Make the project name, ticker, chain, and narrative obvious within one screen.",
    detail:
      "This module anchors SolComp, SOLC, and the project tagline so users immediately know what they are looking at.",
  },
  {
    name: "Official links module",
    status: "Live",
    outcome: "Give users one trusted path to the website, X profile, and source repository.",
    detail:
      "This reduces confusion, helps avoid impersonation risk, and gives new visitors a fast route into the public project surface.",
  },
  {
    name: "Readiness module",
    status: "Live",
    outcome: "Show what is already built versus what is still intentionally pending.",
    detail:
      "An MVP should not pretend to be complete. This module exposes launch readiness and preserves credibility.",
  },
  {
    name: "Roadmap module",
    status: "Live",
    outcome: "Translate the narrative into the next practical milestones.",
    detail:
      "This lets the project move from branding into execution while keeping contributors and community members aligned.",
  },
] as const;

export const officialLinks = [
  {
    label: "Official website",
    value: "solcomp.xyz",
    href: officialSiteUrl,
    status: "Primary",
    note: "Main public landing page and brand destination.",
  },
  {
    label: "X / Twitter",
    value: "@SolComp_SOL",
    href: socialUrl,
    status: "Community",
    note: "Main social channel for public updates and narrative distribution.",
  },
  {
    label: "GitHub repository",
    value: "viet20016602/GitTh4Gmail",
    href: repoUrl,
    status: "Source",
    note: "Public codebase, docs, releases, and repository workflow.",
  },
  {
    label: "Pages build",
    value: "Repository-hosted preview",
    href: pagesUrl,
    status: "MVP",
    note: "Static deployment generated from the repository for public verification.",
  },
] as const;

export const readinessChecklist = [
  {
    title: "Brand identity is defined",
    status: "done",
    description: "Project name, ticker, tagline, logo, and official links are now consistent across the repository.",
  },
  {
    title: "Public website surface exists",
    status: "done",
    description: "The site communicates the SolComp thesis, token identity, and public resource map in a polished MVP shell.",
  },
  {
    title: "GitHub operations are wired",
    status: "done",
    description: "CI, Pages deployment, release automation, and contributor governance are already included.",
  },
  {
    title: "Token contract details are published",
    status: "pending",
    description: "Contract address, tokenomics, and listing details should be added once they are official and verifiable.",
  },
  {
    title: "Product utility is expanded",
    status: "pending",
    description: "The next step is to connect the narrative to clearer product mechanics, dashboards, or ecosystem modules.",
  },
] as const;

export const roadmapItems = [
  {
    phase: "Phase 01",
    title: "Narrative foundation",
    summary: "Finalize brand, token identity, official links, and public repository baseline.",
  },
  {
    phase: "Phase 02",
    title: "Utility definition",
    summary: "Add tokenomics, contract information, ecosystem role descriptions, and more explicit SOLC utility.",
  },
  {
    phase: "Phase 03",
    title: "Interactive product layer",
    summary: "Ship dashboards, live data views, or partner modules that connect SolComp to observable project activity.",
  },
  {
    phase: "Phase 04",
    title: "Community growth loop",
    summary: "Expand docs, updates, and release cadence so the repository supports sustained public traction.",
  },
] as const;

export const faqItems = [
  {
    question: "What is SolComp?",
    answer:
      "SolComp is the project identity presented in this repository and linked to the official website solcomp.xyz. The current MVP focuses on brand clarity, public links, and launch-ready project infrastructure.",
  },
  {
    question: "What is SOLC?",
    answer:
      "SOLC is the token ticker associated with the SolComp project narrative. In the current MVP, it is presented as the token identity while deeper token utility and contract details remain future deliverables.",
  },
  {
    question: "What does Powering the Age of Inference mean?",
    answer:
      "It is the core story of the project. The phrase positions SolComp around the accelerating importance of AI inference, compute demand, and infrastructure-oriented network value.",
  },
  {
    question: "What is already live in this MVP?",
    answer:
      "The project website surface, docs route, repository governance, CI, release automation, and public links are live. Product-specific mechanics can be layered on top next.",
  },
  {
    question: "What should be built after this MVP?",
    answer:
      "The strongest next steps are contract details, tokenomics, ecosystem roles, and interactive modules that make the SolComp narrative tangible beyond branding.",
  },
] as const;

export const docsSections = [
  {
    title: "Project Thesis",
    paragraphs: [
      "SolComp is positioned around one clear message: Powering the Age of Inference. The project narrative focuses on the idea that AI inference will define the next wave of compute demand and network value.",
      "This repository acts as the public MVP surface for that story. It packages the brand, website, documentation, and release process into a clean open repository that can be shared with users, contributors, and token communities.",
    ],
  },
  {
    title: "Core Project Elements",
    paragraphs: [
      "Project name: SolComp.",
      "Token name: SOLC.",
      "Narrative: Powering the Age of Inference.",
      "Public links: official website, X profile, and GitHub repository.",
    ],
  },
  {
    title: "Repository Scope",
    paragraphs: [
      "A dark, AI-native landing page aligned with the SolComp identity.",
      "A docs surface that explains the project positioning and repository workflow.",
      "GitHub automation for validation, static deployment, and tagged releases.",
    ],
  },
] as const;
