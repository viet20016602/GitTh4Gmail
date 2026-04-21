import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <Image
        src="/brand/logo.png"
        alt="SolComp logo"
        width={compact ? 42 : 46}
        height={compact ? 42 : 46}
        className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-[0_0_28px_rgba(110,231,247,0.12)]"
      />
      {!compact ? (
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-cyan-200/70">Powering the Age of Inference</p>
          <p className="text-lg font-semibold tracking-[0.18em] text-white">SOLCOMP</p>
        </div>
      ) : null}
    </div>
  );
}
