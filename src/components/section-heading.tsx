type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4 font-semibold text-white">{title}</h2>
      <p className="section-copy mt-5 max-w-3xl text-lg">{description}</p>
    </div>
  );
}
