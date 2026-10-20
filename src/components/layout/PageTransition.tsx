import { type ReactNode, ViewTransition } from "react";
import TransitionType from "@/enums/transition-type";

const DIRECTIONAL_ANIMATIONS = {
  [TransitionType.Forward]: TransitionType.Forward,
  [TransitionType.Back]: TransitionType.Back,
  default: "none",
};

type PageTransitionProps = {
  children: ReactNode;
};

// Wrap each page.tsx, not the layout: the layout stays mounted, so enter and exit never fire there
export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <ViewTransition
      enter={DIRECTIONAL_ANIMATIONS}
      exit={DIRECTIONAL_ANIMATIONS}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
