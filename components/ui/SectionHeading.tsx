interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`section-heading flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-3">{eyebrow}</span>
      )}
      <h2 className={`text-headline ${align === "center" ? "max-w-[850px] mx-auto" : ""}`}>{heading}</h2>
      {subheading && (
        <p className={`text-body-lg mt-3 text-gray-500 ${align === "center" ? "max-w-[700px] mx-auto" : "max-w-[600px]"}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
