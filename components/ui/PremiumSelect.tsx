"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface Option {
    value: string;
    label: string;
}

interface PremiumSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
    icon?: React.ReactNode;
}

const PremiumSelect: React.FC<PremiumSelectProps> = ({ options, value, onChange, placeholder, className, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full p-4 flex items-center justify-between bg-white/[0.03] backdrop-blur-sm border 
                    ${isOpen ? "border-[#CB52EE]/50 bg-white/[0.05] shadow-[0_0_15px_rgba(203,82,238,0.1)]" : "border-white/10"} 
                    text-white rounded-xl outline-none hover:border-white/20 transition-all group`}
            >
                <div className="flex items-center gap-3">
                    {icon && <span className={`text-lg ${value ? "text-[#CB52EE]" : "text-white/40"}`}>{icon}</span>}
                    <span className={selectedOption ? "text-white" : "text-white/40"}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <FaChevronDown className={`text-xs text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#CB52EE]" : "group-hover:text-white/60"}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full mt-2 bg-[#04071D]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-h-60 overflow-y-auto custom-scrollbar"
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 text-sm transition-all flex items-center justify-between group/opt hover:bg-white/[0.05]
                                    ${value === option.value ? "bg-white/[0.1] text-white font-medium" : "text-white/70"}
                                `}
                            >
                                <span className={`group-hover/opt:translate-x-1 transition-transform duration-300 ${value === option.value ? "text-[#CB52EE]" : "group-hover/opt:text-white"}`}>
                                    {option.label}
                                </span>
                                {value === option.value && (
                                    <motion.div layoutId="active-check" className="w-1.5 h-1.5 rounded-full bg-[#CB52EE] shadow-[0_0_10px_#CB52EE]" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PremiumSelect;
