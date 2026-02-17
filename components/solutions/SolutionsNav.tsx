"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
    id: string;
    label: string;
    number: string;
    color: string;
}

const navItems: NavItem[] = [
    { id: "transparent", label: "Transparents", number: "01", color: "#CB52EE" },
    { id: "dynamisation", label: "Dynamisation", number: "02", color: "#00D8FF" },
    { id: "portable", label: "Portables", number: "03", color: "#F35AFF" },
];

const SolutionsNav = () => {
    const [activeSection, setActiveSection] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:block"
        >
            <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="group relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Tooltip */}
                            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                <div
                                    className="px-4 py-2 rounded-lg backdrop-blur-xl border font-orbitron text-sm font-bold"
                                    style={{
                                        background: `${item.color}20`,
                                        borderColor: `${item.color}40`,
                                        color: item.color
                                    }}
                                >
                                    {item.label}
                                </div>
                            </div>

                            {/* Nav Dot */}
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                {/* Outer Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2"
                                    style={{
                                        borderColor: isActive ? item.color : "rgba(255,255,255,0.2)"
                                    }}
                                    animate={{
                                        scale: isActive ? 1 : 0.8,
                                        opacity: isActive ? 1 : 0.5
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Glow Effect */}
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full blur-md"
                                        style={{ backgroundColor: item.color }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.3 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                {/* Number */}
                                <span
                                    className="relative text-xs font-orbitron font-bold transition-colors duration-300"
                                    style={{
                                        color: isActive ? item.color : "rgba(255,255,255,0.5)"
                                    }}
                                >
                                    {item.number}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default SolutionsNav;
