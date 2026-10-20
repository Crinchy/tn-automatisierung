type SectionHeadlineProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeadline({
  eyebrow,
  title,
}: SectionHeadlineProps) {
  return (
    <div className="grid gap-5 pt-12.5 pb-7.5 tablet:grid-cols-[1fr_2fr] tablet:gap-15 tablet:pt-18.75 tablet:pb-11.25">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-[38px] tracking-[-2px] whitespace-pre-line tablet:text-[48px]">
        {title}
      </h2>
    </div>
  );
}
