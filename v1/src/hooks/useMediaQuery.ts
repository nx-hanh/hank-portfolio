"use client";

import { useEffect, useState } from "react";

// Define the return type of the hook as a boolean or null
export function useClientMediaQuery(query: string): boolean | null {
  // Use useState with the type annotation
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Type assertion on event listener method, as it might differ between browsers
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleMatchChange);
    } else {
      // For older browsers (if necessary)
      mediaQueryList.addListener(handleMatchChange);
    }

    setMatches(mediaQueryList.matches);

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", handleMatchChange);
      } else {
        // For older browsers (if necessary)
        mediaQueryList.removeListener(handleMatchChange);
      }
    };
  }, [query]);

  return matches;
}
