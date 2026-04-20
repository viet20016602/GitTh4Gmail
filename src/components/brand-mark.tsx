type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <svg
        aria-hidden="true"
        className="h-11 w-11 shrink-0"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="syns-gradient" x1="12" y1="8" x2="68" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6EE7F7" />
            <stop offset="0.5" stopColor="#7CF29C" />
            <stop offset="1" stopColor="#B7C7FF" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="64" height="64" rx="20" fill="url(#syns-gradient)" fillOpacity="0.12" />
        <path
          d="M23 24.5L38.5 40L23 55.5M43 24.5L58.5 40L43 55.5"
          stroke="url(#syns-gradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="24.5" r="4" fill="#6EE7F7" />
        <circle cx="38.5" cy="40" r="4" fill="#7CF29C" />
        <circle cx="58.5" cy="40" r="4" fill="#B7C7FF" />
        <circle cx="43" cy="55.5" r="4" fill="#6EE7F7" />
      </svg>
      {!compact ? (
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-cyan-200/70">Neuromorphic protocol</p>
          <p className="text-lg font-semibold tracking-[0.18em] text-white">SYNS</p>
        </div>
      ) : null}
    </div>
  );
}
