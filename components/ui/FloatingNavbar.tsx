"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Calendar, FileText, Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
  description?: string;
  dropdown?: {
    categoryName: string;
    categoryLink?: string;
    items: {
      name: string;
      link: string;
      description?: string;
    }[];
  }[];
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 50) {
            setVisible(true);
            setIsScrolled(false);
          } else {
            setIsScrolled(true);
            // Show on scroll up, hide on scroll down
            if (currentScrollY < lastScrollY.current) {
              setVisible(true);
            } else if (currentScrollY > lastScrollY.current + 10) {
              setVisible(false);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "fixed z-[5000] inset-x-0 mx-auto px-4 md:px-10 flex items-center justify-between pointer-events-none transition-all duration-500 ease-out",
          isScrolled ? "top-4 max-w-7xl" : "top-6 w-full",
          className
        )}
      >
        {/* --- MODULE 1: LOGO (LEFT) - Neon Glow --- */}
        <div className="pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-md border border-[#F35AFF]/30 rounded-full px-3 md:px-4 h-9 md:h-12 flex items-center justify-center shadow-[0_0_15px_rgba(243,90,255,0.2)] hover:shadow-[0_0_25px_rgba(243,90,255,0.4)] hover:border-[#F35AFF]/60 transition-all duration-300">
            <Link href="/" className="flex items-center group/logo">
              <img src="/logo_neofilm_full.png" alt="NEOFILM LED" className="h-5 md:h-7 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* --- MODULE 2: NAVIGATION (CENTER) - Hidden on Mobile --- */}
        <div className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2">
          <div className="bg-black/60 backdrop-blur-md border border-[#00D8FF]/20 rounded-full h-12 flex items-center px-2 shadow-[0_0_15px_rgba(0,216,255,0.15)] hover:shadow-[0_0_25px_rgba(0,216,255,0.3)] hover:border-[#00D8FF]/40 transition-all duration-300">
            {navItems.map((navItem: NavItem, idx: number) => (
              <div
                key={`link=${idx}`}
                className="relative group/nav-item h-full flex items-center"
                onMouseEnter={() => navItem.dropdown && setActiveDropdown(navItem.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={navItem.link}
                  className="relative flex items-center px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-gray-300 hover:text-[#00D8FF] transition-colors rounded-full hover:bg-[#00D8FF]/10 whitespace-nowrap"
                >
                  <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase tracking-widest">{navItem.name}</span>
                  {navItem.dropdown && (
                    <ChevronDown className="w-3 h-3 ml-1 text-gray-500 group-hover/nav-item:text-[#00D8FF] group-hover/nav-item:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* --- MEGA DROPDOWN --- */}
                <AnimatePresence>
                  {navItem.dropdown && activeDropdown === navItem.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "circOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 min-w-[500px] z-50 pointer-events-auto"
                    >
                      <div className="group relative bg-[#0a0a0a]/95 border border-[#00D8FF]/30 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,216,255,0.15)] backdrop-blur-2xl">
                        {/* Dynamic Gradient Edge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent opacity-50" />

                        <div className="grid grid-cols-3 gap-8">
                          {navItem.dropdown.map((cat, catIdx) => (
                            <div key={catIdx} className="space-y-4">
                              {cat.categoryLink ? (
                                <Link
                                  href={cat.categoryLink}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[12px] font-black font-orbitron text-[#00D8FF] uppercase tracking-[0.2em] border-b border-white/10 pb-2 hover:text-white transition-colors"
                                >
                                  {cat.categoryName}
                                </Link>
                              ) : (
                                <h4 className="text-[12px] font-black font-orbitron text-[#00D8FF] uppercase tracking-[0.2em] border-b border-white/10 pb-2">
                                  {cat.categoryName}
                                </h4>
                              )}
                              <div className="space-y-2">
                                {cat.items.map((item, itemIdx) => (
                                  <Link
                                    key={itemIdx}
                                    href={item.link}
                                    className="group/sub flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/5"
                                  >
                                    <span className="text-[14px] font-bold text-white group-hover/sub:text-[#CB52EE] transition-colors uppercase tracking-tight">
                                      {item.name}
                                    </span>
                                    {item.description && (
                                      <span className="text-[11px] text-white/50 font-outfit leading-snug mt-1.5 group-hover/sub:text-white/80">
                                        {item.description}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Dropdown Footer Statement */}
                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[8px] font-orbitron text-white/10 uppercase tracking-[0.3em]">Engineering_Excellence</span>
                          <div className="flex gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#00D8FF] animate-pulse" />
                            <div className="w-1 h-1 rounded-full bg-[#CB52EE] animate-pulse delay-75" />
                            <div className="w-1 h-1 rounded-full bg-[#F35AFF] animate-pulse delay-150" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* --- MODULE 3: CTAs (RIGHT) --- */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Catalogue Btn (Desktop) */}
          <Link
            href="/catalogue"
            className="hidden lg:flex h-10 items-center px-5 rounded-full border border-white/10 hover:border-[#00D8FF]/50 bg-black/60 backdrop-blur-md text-xs font-bold text-gray-300 hover:text-white transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,216,255,0.3)] group"
          >
            <FileText className="w-3.5 h-3.5 mr-2 text-gray-400 group-hover:text-[#00D8FF] transition-colors" />
            CATALOGUE
          </Link>

          {/* RDV Button */}
          <a
            href="https://calendly.com/neofilmled/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 md:h-10 px-3 md:px-5 flex items-center rounded-full bg-gradient-to-r from-[#CB52EE] to-[#00707E] text-white text-[10px] md:text-xs font-bold shadow-[0_0_20px_rgba(203,82,238,0.4)] hover:shadow-[0_0_30px_rgba(0,112,126,0.6)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5 mr-1.5 md:mr-2" />
            RDV
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#030014]/98 backdrop-blur-2xl z-[6000] pointer-events-auto flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12 shrink-0">
                <img src="/logo_neofilm_full.png" alt="NEOFILM" className="h-8 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-8 pb-12">
                {navItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <Link
                      href={item.link}
                      onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                      className="text-2xl font-black font-orbitron text-white hover:text-[#00D8FF] transition-colors flex items-center justify-between group"
                    >
                      {item.name}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>

                    {item.dropdown && (
                      <div className="flex flex-col gap-6 pl-4 border-l border-white/10">
                        {item.dropdown.map((cat, catIdx) => (
                          <div key={catIdx} className="space-y-4">
                            {cat.categoryLink ? (
                              <Link
                                href={cat.categoryLink}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[10px] font-black font-orbitron text-[#00D8FF] uppercase tracking-widest hover:text-white transition-colors mb-4"
                              >
                                {cat.categoryName}
                              </Link>
                            ) : (
                              <h5 className="text-[10px] font-black font-orbitron text-[#00D8FF] uppercase tracking-widest mb-4">{cat.categoryName}</h5>
                            )}
                            <div className="flex flex-col gap-3">
                              {cat.items.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={sub.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-white/60 hover:text-[#CB52EE] font-bold uppercase text-[11px] tracking-wider transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4 shrink-0">
                <Link
                  href="/catalogue"
                  className="w-full h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold font-orbitron text-white tracking-widest"
                >
                  <FileText className="w-5 h-5 mr-3" />
                  CATALOGUE DIGITAL
                </Link>
                <a
                  href="https://calendly.com/neofilmled/30min"
                  className="w-full h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#CB52EE] to-[#00D8FF] text-sm font-bold font-orbitron text-white tracking-widest shadow-[0_0_30px_rgba(203,82,238,0.3)]"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  PRENDRE RDV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
