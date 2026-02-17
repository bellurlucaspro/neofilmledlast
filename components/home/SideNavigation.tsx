"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
    id: string;
    label: string;
}

interface SideNavigationProps {
    items?: Section[]; // Optional for backward compatibility during refactor, or better yet, default it
}

const defaultSections = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À Propos" },
    { id: "solutions", label: "Solutions" },
    { id: "why-choose-us", label: "Pourquoi Nous" },
];

const SideNavigation: React.FC<SideNavigationProps> = ({ items = defaultSections }) => {
    const [activeSection, setActiveSection] = useState(items[0]?.id || "");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show navigation after scrolling down a bit
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);

            // Update active section based on scroll position
            const scrollPosition = window.scrollY + 200;

            for (const section of items) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-row items-center gap-4"
                >
                    {/* Navigation Dots Container */}
                    <div className="flex flex-col gap-6 px-3 py-6 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                        {items.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="group relative flex items-center justify-center w-3 h-3"
                                aria-label={`Navigate to ${section.label}`}
                            >
                                {/* Active Glow Effect */}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 rounded-full bg-purple blur-[4px]"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                {/* Dot */}
                                <div
                                    className={`relative z-10 rounded-full transition-all duration-300 ${activeSection === section.id
                                        ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(203,82,238,0.8)]"
                                        : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/50 group-hover:scale-125"
                                        }`}
                                />

                                {/* Label Tooltip - Appears on Hover & Active */}
                                <div className="absolute right-full mr-6 pointer-events-none">
                                    <span
                                        className={`block px-3 py-1.5 rounded-lg text-xs font-bold font-orbitron tracking-wider whitespace-nowrap transition-all duration-300 ${activeSection === section.id
                                            ? "opacity-100 translate-x-0 bg-gradient-to-r from-[#CB52EE] to-[#00707E] text-white shadow-lg"
                                            : "opacity-0 translate-x-4 bg-black/80 text-white/70 backdrop-blur-sm border border-white/10 group-hover:opacity-100 group-hover:translate-x-0"
                                            }`}
                                    >
                                        {section.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default SideNavigation;
