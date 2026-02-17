import Link from "next/link";
import { headers } from "next/headers";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import { navItems } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page introuvable | NEOFÍLM LED",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="relative bg-[#030014] flex flex-col items-center overflow-hidden w-full min-h-screen">
            <FloatingNav navItems={navItems} /> {/* Navigation */}

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center relative w-full px-4 text-center z-10 py-32">

                {/* Background Effects */}
                <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030014] to-[#030014] z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CB52EE]/10 rounded-full blur-[100px] pointer-events-none" />

                {/* 404 Text */}
                <h1 className="font-orbitron font-black text-[120px] md:text-[200px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none opacity-50 relative z-10">
                    404
                </h1>

                {/* Message */}
                <div className="relative z-20 -mt-8 md:-mt-16 space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-syne">
                        Page Introuvable
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-outfit max-w-lg mx-auto">
                        Oups ! La page que vous recherchez semble avoir disparu dans le néant numérique ou a été déplacée.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="/"
                            className="px-8 py-4 rounded-xl bg-[#CB52EE] hover:bg-[#b038d1] text-white font-bold font-orbitron transition-all shadow-[0_0_30px_rgba(203,82,238,0.3)] hover:shadow-[0_0_50px_rgba(203,82,238,0.5)] hover:scale-105"
                        >
                            Retour à l'accueil
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold font-orbitron transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Nous contacter
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="pt-12 border-t border-white/10 mt-12 w-full max-w-md mx-auto">
                        <p className="text-sm text-white/40 uppercase tracking-widest font-orbitron mb-4">
                            Pages populaires
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-outfit">
                            <Link href="/solutions" className="text-[#CB52EE] hover:text-white transition-colors">
                                Nos Solutions
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link href="/installation" className="text-[#CB52EE] hover:text-white transition-colors">
                                Installation
                            </Link>
                            <span className="text-white/20">•</span>
                            <Link href="/a-propos" className="text-[#CB52EE] hover:text-white transition-colors">
                                À propos
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <div className="w-full relative z-20">
                <PremiumFooter />
            </div>
        </div>
    );
}
