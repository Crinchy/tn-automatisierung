type ArrowUpRightIconProps = {
  className?: string;
};

export default function ArrowUpRightIcon({ className }: ArrowUpRightIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}
