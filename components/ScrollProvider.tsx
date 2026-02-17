"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change using native browser scroll
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollProvider;
