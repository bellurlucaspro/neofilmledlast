import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { getProductsByCategory, getCategoryBySlug, ProductCategory } from "@/data/products";

interface CategoryNavigatorProps {
    currentProductSlug: string;
    categorySlug: string;
}

const CategoryNavigator: React.FC<CategoryNavigatorProps> = ({ currentProductSlug, categorySlug }) => {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return null;

    const categoryProducts = getProductsByCategory(category.id as ProductCategory);

    return (
        <div className="w-full flex justify-start mb-10 overflow-x-auto no-scrollbar pt-2">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center min-w-max pb-2 px-1"
            >
                <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-1 shadow-2xl flex items-center gap-1 group/nav relative w-max pr-4">
                    {/* Category Label Section */}
                    <div className="flex px-4 py-2 items-center gap-3 border-r border-white/5 bg-white/[0.02] rounded-xl transition-all group-hover/nav:bg-white/[0.05] shrink-0">
                        <div className="p-1.5 rounded-lg bg-[#00D8FF]/10 border border-[#00D8FF]/20">
                            <LayoutGrid className="w-3.5 h-3.5 text-[#00D8FF] opacity-90 group-hover/nav:scale-110 transition-transform" />
                        </div>
                        <span className="text-[10px] font-orbitron font-bold text-white/50 uppercase tracking-[0.2em] whitespace-nowrap">
                            Gamme {category.name.replace("Affichages LED ", "")}
                        </span>
                    </div>

                    {/* Product Links Container */}
                    <div className="flex items-center gap-1 px-1">
                        {categoryProducts.map((p, idx) => {
                            const isActive = p.slug === currentProductSlug;
                            return (
                                <React.Fragment key={p.slug}>
                                    {idx > 0 && <div className="w-1 h-1 rounded-full bg-white/10 shrink-0 mx-1" />}
                                    <Link
                                        href={`/solutions/${categorySlug}/${p.slug}/`}
                                        className={`relative group/item px-4 py-2 rounded-xl transition-all duration-500 flex items-center gap-2.5 ${isActive
                                            ? "bg-white/5"
                                            : "hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active-bg-inline"
                                                className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-xl z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        <div className="relative z-10 flex items-center gap-2.5">
                                            <div className="relative">
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive
                                                    ? "opacity-100"
                                                    : "bg-white/20 group-hover/item:bg-white/40 opacity-40 group-hover/item:opacity-70"
                                                    }`}
                                                    style={{
                                                        backgroundColor: isActive ? p.color : undefined,
                                                        boxShadow: isActive ? `0 0 12px ${p.color}` : undefined
                                                    }}
                                                />
                                                {isActive && (
                                                    <div className="absolute inset-0 w-1.5 h-1.5 rounded-full animate-ping opacity-40"
                                                        style={{ backgroundColor: p.color }}
                                                    />
                                                )}
                                            </div>

                                            <span className={`text-[10px] font-orbitron font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${isActive ? "text-white" : "text-white/30 group-hover/item:text-white/60"
                                                }`}>
                                                {p.name.replace("NEOFILM ", "")}
                                            </span>
                                        </div>
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


export default CategoryNavigator;
