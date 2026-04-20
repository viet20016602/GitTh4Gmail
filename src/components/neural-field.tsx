type NeuralFieldProps = {
  className?: string;
};

export function NeuralField({ className = "" }: NeuralFieldProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 720 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="field-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(360 240) rotate(90) scale(220 280)">
          <stop stopColor="#7CF29C" stopOpacity="0.38" />
          <stop offset="1" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="field-line" x1="86" y1="46" x2="629" y2="428" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7F7" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#7CF29C" stopOpacity="0.55" />
          <stop offset="1" stopColor="#B7C7FF" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="720" height="520" rx="36" fill="url(#field-glow)" />
      <g opacity="0.75" stroke="url(#field-line)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M96 110L204 168L322 118L430 194L618 128" />
        <path d="M94 388L206 304L322 362L456 310L620 392" />
        <path d="M204 168L208 304" />
        <path d="M322 118L322 362" />
        <path d="M430 194L456 310" />
        <path d="M322 118L456 310" />
        <path d="M204 168L322 362" />
        <path d="M96 110L206 304" />
        <path d="M430 194L618 128" />
      </g>
      <g>
        {[
          { x: 96, y: 110, size: 8, color: "#6EE7F7" },
          { x: 204, y: 168, size: 9, color: "#B7C7FF" },
          { x: 322, y: 118, size: 10, color: "#7CF29C" },
          { x: 430, y: 194, size: 8, color: "#6EE7F7" },
          { x: 618, y: 128, size: 11, color: "#B7C7FF" },
          { x: 94, y: 388, size: 8, color: "#7CF29C" },
          { x: 206, y: 304, size: 10, color: "#6EE7F7" },
          { x: 322, y: 362, size: 11, color: "#7CF29C" },
          { x: 456, y: 310, size: 9, color: "#B7C7FF" },
          { x: 620, y: 392, size: 10, color: "#6EE7F7" },
        ].map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r={node.size * 1.9} fill={node.color} fillOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r={node.size} fill={node.color} />
          </g>
        ))}
      </g>
    </svg>
  );
}
