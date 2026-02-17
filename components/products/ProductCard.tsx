import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Play, X } from "lucide-react";

interface ProductCardProps {
    id: string;
    slug: string;
    category: string;
    categorySlug: string;
    name: string;
    shortDescription: string;
    image: string;
    features: string[];
    specs: {
        label: string;
        value: string;
    }[];
    color: string;
    video?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    slug,
    categorySlug,
    name,
    shortDescription,
    image,
    features,
    specs,
    color,
    video
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleVideoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsVideoOpen(true);
    };

    return (
        <>
            <Link href={`/${categorySlug}/${slug}`}>
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="group relative h-[520px] cursor-pointer"
                >
                    {/* Main Card Container */}
                    <motion.div
                        className="relative h-full rounded-3xl overflow-hidden"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Animated Border Gradient */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl p-[2px]"
                            animate={{
                                background: isHovered
                                    ? `conic-gradient(from 0deg, ${color}, transparent, ${color})`
                                    : `linear-gradient(135deg, ${color}40, transparent)`,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-full h-full rounded-3xl bg-black-100" />
                        </motion.div>

                        {/* Content Container */}
                        <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-black-100 via-black-100 to-black-200 overflow-hidden">
                            {/* Image Section with Parallax */}
                            <div className="relative h-64 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        transform: "translateZ(20px)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Dynamic Gradient Overlay */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(180deg, transparent 0%, ${color}20 50%, black 100%)`,
                                        }}
                                        animate={{
                                            opacity: isHovered ? 0.8 : 0.6,
                                        }}
                                    />

                                    {/* Video Trigger Overlay */}
                                    {video && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center z-20 group/video"
                                            onClick={handleVideoClick}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group-hover/video:bg-white/20 group-hover/video:border-white/40"
                                            >
                                                <Play className="w-6 h-6 fill-white text-white ml-1" />
                                            </motion.div>
                                        </div>
                                    )}

                                    {/* Animated Scan Line */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                        initial={{ y: "-100%" }}
                                        animate={isHovered ? { y: "100%" } : { y: "-100%" }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            repeat: isHovered ? Infinity : 0,
                                        }}
                                        style={{
                                            background: `linear-gradient(180deg, transparent, ${color}40, transparent)`,
                                            height: "100px",
                                        }}
                                    />
                                </motion.div>

                                {/* Floating Badge */}
                                <motion.div
                                    className="absolute top-4 right-4 z-10 pointer-events-none"
                                    style={{
                                        transform: "translateZ(40px)",
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <div
                                        className="px-4 py-2 rounded-full backdrop-blur-xl border font-bold text-xs flex items-center gap-2"
                                        style={{
                                            background: `${color}20`,
                                            borderColor: `${color}60`,
                                            color: color,
                                            boxShadow: `0 0 20px ${color}40`,
                                        }}
                                    >
                                        <Zap className="w-3 h-3" />
                                        PREMIUM
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="relative p-6 flex flex-col h-[calc(100%-16rem)]">
                                {/* Title with Reveal Animation */}
                                <motion.h3
                                    className="text-2xl font-black font-orbitron mb-3 leading-tight"
                                    style={{
                                        transform: "translateZ(30px)",
                                    }}
                                >
                                    <motion.span
                                        className="inline-block"
                                        animate={{
                                            backgroundImage: isHovered
                                                ? `linear-gradient(135deg, ${color}, white)`
                                                : "linear-gradient(135deg, white, white)",
                                        }}
                                        style={{
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {name}
                                    </motion.span>
                                </motion.h3>

                                {/* Description */}
                                <p
                                    className="text-white/70 text-sm mb-4 font-outfit leading-relaxed line-clamp-2"
                                    style={{
                                        transform: "translateZ(25px)",
                                    }}
                                >
                                    {shortDescription}
                                </p>

                                {/* Animated Specs Grid */}
                                <div
                                    className="grid grid-cols-3 gap-2 mb-4"
                                    style={{
                                        transform: "translateZ(20px)",
                                    }}
                                >
                                    {specs.slice(0, 3).map((spec, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative p-3 rounded-xl overflow-hidden"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            {/* Animated Background */}
                                            <motion.div
                                                className="absolute inset-0"
                                                animate={{
                                                    background: isHovered
                                                        ? `linear-gradient(135deg, ${color}15, ${color}05)`
                                                        : "rgba(255,255,255,0.03)",
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />

                                            {/* Border */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border"
                                                animate={{
                                                    borderColor: isHovered ? `${color}40` : "rgba(255,255,255,0.1)",
                                                }}
                                            />

                                            {/* Content */}
                                            <div className="relative">
                                                <div className="text-white/40 text-[8px] uppercase font-bold tracking-wider mb-1">
                                                    {spec.label}
                                                </div>
                                                <div
                                                    className="text-xs font-bold truncate"
                                                    style={{ color: isHovered ? color : "white" }}
                                                >
                                                    {spec.value}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    className="mt-auto"
                                    style={{
                                        transform: "translateZ(35px)",
                                    }}
                                >
                                    <motion.div
                                        className="flex items-center justify-between p-4 rounded-2xl border-2 transition-all"
                                        animate={{
                                            borderColor: isHovered ? color : "rgba(255,255,255,0.1)",
                                            background: isHovered ? `${color}10` : "rgba(255,255,255,0.02)",
                                        }}
                                    >
                                        <span
                                            className="font-bold text-sm font-orbitron"
                                            style={{ color: isHovered ? color : "white" }}
                                        >
                                            Découvrir
                                        </span>
                                        <motion.div
                                            animate={{
                                                x: isHovered ? 5 : 0,
                                                rotate: isHovered ? 45 : 0,
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <ArrowUpRight
                                                className="w-5 h-5"
                                                style={{ color: isHovered ? color : "white" }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Glow Effect on Hover */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                animate={{
                                    opacity: isHovered ? 0.15 : 0,
                                }}
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${color}, transparent 70%)`,
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Shadow */}
                    <motion.div
                        className="absolute inset-0 -z-10 rounded-3xl blur-2xl"
                        animate={{
                            opacity: isHovered ? 0.4 : 0,
                            scale: isHovered ? 1.05 : 1,
                        }}
                        style={{
                            background: `radial-gradient(circle, ${color}60, transparent)`,
                        }}
                    />
                </motion.div>
            </Link>

            {/* Premium Video Modal */}
            <AnimatePresence>
                {isVideoOpen && video && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                boxShadow: `0 0 50px ${color}20`
                            }}
                        >
                            {/* Header Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"
                                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                            />

                            {/* Close Button */}
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10 group"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>

                            <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                                {/* Video Section (Dominant) */}
                                <div className="w-full lg:w-[65%] bg-black relative flex flex-col justify-center">
                                    <div className="relative aspect-video w-full">
                                        <iframe
                                            src={video}
                                            className="w-full h-full"
                                            title="Product Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>

                                {/* Product Info Section */}
                                <div className="w-full lg:w-[35%] p-6 lg:p-8 overflow-y-auto bg-gradient-to-b from-zinc-900/90 to-black/90 border-l border-white/5">
                                    {/* Category Badge */}
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
                                        style={{
                                            borderColor: `${color}40`,
                                            backgroundColor: `${color}10`,
                                            color: color
                                        }}
                                    >
                                        <Zap className="w-3 h-3" />
                                        {categorySlug.replace('-', ' ')}
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-3xl font-black font-orbitron text-white mb-2 leading-tight">
                                        {name}
                                    </h2>

                                    <p className="text-white/60 text-sm mb-8 font-outfit leading-relaxed">
                                        {shortDescription}
                                    </p>

                                    {/* Technical DNA (Specs) */}
                                    <div className="mb-8">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-8 h-px bg-white/20"></span>
                                            Adn Technique
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {specs.map((spec, index) => (
                                                <div
                                                    key={index}
                                                    className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                                                >
                                                    <div className="text-[10px] text-white/40 uppercase font-bold mb-1">{spec.label}</div>
                                                    <div className="text-sm font-bold text-white" style={{ textShadow: `0 0 10px ${color}40` }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-8">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-8 h-px bg-white/20"></span>
                                            Points Clés
                                        </h3>
                                        <ul className="space-y-3">
                                            {features.slice(0, 4).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action */}
                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <Link href={`/${categorySlug}/${slug}`}>
                                            <button
                                                className="w-full py-4 rounded-xl font-bold font-orbitron text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95"
                                                style={{
                                                    background: `linear-gradient(45deg, ${color}, ${color}dd)`,
                                                    boxShadow: `0 10px 30px -10px ${color}60`,
                                                    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                                                }}
                                            >
                                                Voir la fiche complète
                                                <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductCard;
