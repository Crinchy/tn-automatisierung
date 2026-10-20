type TnMarkProps = {
  className?: string;
  pathClassName?: string;
};

// Same shape as public/tn-wasserzeichen.svg, snapped to whole units so edges render crisp.
// The outer edges lie on the viewBox border, so overflow stays visible to keep outlines unclipped.
export default function TnMark({ className, pathClassName }: TnMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 270 117"
      overflow="visible"
      aria-hidden="true"
    >
      <path
        className={pathClassName}
        pathLength={1}
        d="M 18 0 L 18 18 L 0 18 L 0 36 L 18 36 L 18 99 C 18 108.418 26.102 117 36 117 L 135 117 C 144.898 117 153 108.418 153 99 L 153 36 L 252 36 L 252 117 L 270 117 L 270 36 C 270 26.586 261.898 18 252 18 L 153 18 C 143.102 18 135 26.586 135 36 L 135 99 L 36 99 L 36 36 L 108 36 L 108 18 L 36 18 L 36 0 L 18 0 Z"
      />
    </svg>
  );
}
