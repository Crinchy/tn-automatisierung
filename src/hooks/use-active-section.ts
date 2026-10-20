import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// A section counts as active while it crosses this band just above the middle of the viewport
const ACTIVE_BAND_MARGIN = "-40% 0px -55% 0px";

type ActiveSection = {
  pathname: string;
  id: string | null;
};

export default function useActiveSection(sectionIds: string[]): string | null {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<ActiveSection>({
    pathname,
    id: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;

          if (entry.isIntersecting) {
            setActiveSection({ pathname, id });
          } else {
            setActiveSection((current) =>
              current.id === id ? { pathname, id: null } : current,
            );
          }
        }
      },
      { rootMargin: ACTIVE_BAND_MARGIN },
    );

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);

      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [sectionIds, pathname]);

  // The header stays mounted across pages, so ignore a section found on a previous page
  if (activeSection.pathname !== pathname) {
    return null;
  }

  return activeSection.id;
}
