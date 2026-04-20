export const repoUrl = "https://github.com/viet20016602/SolComp";
export const socialUrl = "https://x.com/SolComp_SOL";
export const siteUrl = "https://viet20016602.github.io/SolComp";

export const navLinks = [
  { label: "Protocol", href: "#protocol" },
  { label: "Swarm Loop", href: "#swarm-loop" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: repoUrl },
] as const;

export const metrics = [
  {
    value: "03",
    label: "MVP Signal Planes",
    detail: "Sense, route, and reinforce distributed cognition as one protocol loop.",
  },
  {
    value: "128",
    label: "Virtual Synapses",
    detail: "Illustrative relay graph rendered across clusters, agents, and memory shards.",
  },
  {
    value: "<80ms",
    label: "Decision Echo",
    detail: "Target feedback latency for local swarm reinforcement in the demo topology.",
  },
  {
    value: "Open",
    label: "Protocol Surface",
    detail: "Website, docs, CI, release, and governance are ready for public collaboration.",
  },
] as const;

export const protocolLayers = [
  {
    eyebrow: "Layer 01",
    title: "Signal Ingestion",
    description:
      "Agents, sensors, or simulators emit typed pulses into a shared synaptic bus. Each pulse keeps provenance, confidence, and locality metadata.",
    chips: ["Events", "Provenance", "Confidence"],
  },
  {
    eyebrow: "Layer 02",
    title: "Swarm Coordination",
    description:
      "Cluster coordinators route pulses into temporary coalitions, allowing specialized nodes to compete, cooperate, and reinforce useful pathways.",
    chips: ["Coalitions", "Routing", "Reinforcement"],
  },
  {
    eyebrow: "Layer 03",
    title: "Memory Gradient",
    description:
      "Short-horizon traces and long-horizon protocol memory converge into adaptive weights, shaping the next wave of decisions without central lock-in.",
    chips: ["Trace Cache", "Weight Drift", "Consensus"],
  },
] as const;

export const swarmFlow = [
  {
    title: "Pulse broadcast",
    body: "An origin node emits a new intent with confidence, urgency, and neighborhood metadata.",
  },
  {
    title: "Coalition match",
    body: "Nearby specialists evaluate the pulse, bid on relevance, and form a transient execution swarm.",
  },
  {
    title: "Protocol replay",
    body: "Historic traces are replayed to compare the current state against successful swarm behaviors.",
  },
  {
    title: "Reinforcement commit",
    body: "Useful pathways gain weight, noisy pathways decay, and the protocol publishes the new topology state.",
  },
] as const;

export const governanceCards = [
  {
    title: "Production-ready repo skeleton",
    text: "Typed Next.js app, GitHub Pages deployment, release automation, templates, and contributor docs.",
  },
  {
    title: "Narrative-aligned demo content",
    text: "The home page explains the SYNS thesis in a way that can evolve into a real protocol portal or litepaper hub.",
  },
  {
    title: "Public collaboration defaults",
    text: "Issue forms, PR guidance, CI, changelog discipline, and security policy are all in place from day one.",
  },
] as const;

export const docsSections = [
  {
    title: "Protocol Thesis",
    paragraphs: [
      "Synaptic Swarm Protocol (SYNS) is a neuromorphic coordination layer for multi-agent systems. Instead of forcing agents into a rigid centralized planner, the protocol exposes a synaptic bus where signals compete, reinforce, and decay.",
      "The MVP focuses on explainability. The website and demo show how a swarm can ingest signals, create temporary coalitions, and update shared memory gradients without pretending to be the full production protocol.",
    ],
  },
  {
    title: "Core Primitives",
    paragraphs: [
      "Pulse: an immutable observation or intent with provenance, confidence, and spatial tags.",
      "Coalition: a temporary set of specialized nodes assembled around one pulse cluster.",
      "Gradient: the adaptive state derived from swarm outcomes and replayed traces.",
    ],
  },
  {
    title: "MVP Deliverables",
    paragraphs: [
      "A public-facing protocol homepage with a strong brand direction and protocol narrative.",
      "A docs experience that explains the loop, architecture, and repository workflow.",
      "GitHub automation for linting, static export deployment, and release generation on version tags.",
    ],
  },
] as const;
