"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
    // Always include Home as first item
    const allItems: BreadcrumbItem[] = [
        { label: "Accueil", href: "/" },
        ...items
    ];

    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-2 text-sm ${className}`}
            itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            {allItems.map((item, index) => {
                const isLast = index === allItems.length - 1;
                const isFirst = index === 0;

                return (
                    <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        {/* Breadcrumb Link */}
                        {!isLast ? (
                            <Link
                                href={item.href}
                                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                                itemProp="item"
                            >
                                {isFirst && (
                                    <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                )}
                                <span itemProp="name" className="font-outfit">
                                    {item.label}
                                </span>
                                <meta itemProp="position" content={String(index + 1)} />
                            </Link>
                        ) : (
                            <span
                                className="flex items-center gap-2 text-white font-semibold font-outfit"
                                itemProp="item"
                                aria-current="page"
                            >
                                <span itemProp="name">{item.label}</span>
                                <meta itemProp="position" content={String(index + 1)} />
                            </span>
                        )}

                        {/* Separator */}
                        {!isLast && (
                            <ChevronRight className="w-4 h-4 text-white/40" aria-hidden="true" />
                        )}
                    </motion.div>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
