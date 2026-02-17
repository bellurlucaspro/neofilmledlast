import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PremiumFooter from "@/components/PremiumFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - NEOFÍLM LED",
    description: "Mentions légales du site NEOFÍLM LED.",
    robots: {
        index: false,
        follow: false, // Legal pages usually don't need to be indexed but it's up to preference. Let's keep them noindex to avoid diluting SEO.
    }
};

const MentionsLegales = () => {
    return (
        <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full min-h-screen">
            <FloatingNav navItems={navItems} />

            <div className="max-w-4xl w-full px-5 sm:px-10 pt-32 pb-20 text-white/80">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 font-orbitron">Mentions Légales</h1>

                <div className="space-y-8 font-outfit">
                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">1. Éditeur du site</h2>
                        <p>
                            Le site internet <strong>neofilmled.com</strong> est édité par l'agence :<br />
                            <strong>OTIKA AGENCE DIGITALE</strong><br />
                            Site web : <a href="https://otika.fr" target="_blank" rel="noopener noreferrer" className="text-[#00D8FF] hover:underline">otika.fr</a><br />
                            Responsable de la publication : Dylan BELLUR
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            340 S Lemon Ave #4133<br />
                            Walnut, CA 91789<br />
                            États-Unis<br />
                            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#00D8FF] hover:underline">https://vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">4. Limitation de responsabilité</h2>
                        <p>
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                            OTIKA AGENCE DIGITALE ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                        </p>
                    </section>
                </div>
            </div>

            <div className="w-full mt-auto">
                <PremiumFooter />
            </div>
        </main>
    );
};

export default MentionsLegales;
