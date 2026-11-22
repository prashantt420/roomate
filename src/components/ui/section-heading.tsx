interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto mb-14 max-w-[760px] ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full bg-[#F1EBFF] px-4 py-2 text-[12px] font-semibold tracking-[0.08em] text-[#7956D8]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-[34px] font-semibold leading-[1.12] tracking-[-1.8px] text-[#24212C] sm:text-[46px] lg:text-[54px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#85808E] sm:text-[17px] sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}