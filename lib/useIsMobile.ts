"use client";

import { useEffect, useState } from "react";

/**
 * Retourne true sur mobile/tablette (<= 1024px).
 * Sert à neutraliser, UNIQUEMENT en mobile/tablette, les décalages horizontaux
 * des animations d'entrée (framer-motion initial x:±50) qui débordent du viewport.
 * Le desktop conserve ses animations d'origine (rendu identique).
 *
 * SSR-safe : démarre à `false` (comportement desktop) puis se met à jour après montage.
 */
export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
