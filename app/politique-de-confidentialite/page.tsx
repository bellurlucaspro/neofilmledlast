import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PremiumFooter from "@/components/PremiumFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - NEOFÍLM LED",
    description: "Politique de confidentialité et gestion des données personnelles.",
    robots: {
        index: false,
        follow: false,
    }
};

const Confidentialite = () => {
    return (
        <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full min-h-screen">
            <FloatingNav navItems={navItems} />

            <div className="max-w-4xl w-full px-5 sm:px-10 pt-32 pb-20 text-white/80">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 font-orbitron">Politique de Confidentialité</h1>

                <div className="space-y-8 font-outfit">
                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">1. Collecte des données</h2>
                        <p>
                            Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez notre formulaire de contact (nom, email, téléphone, entreprise, message).
                            Ces données sont collectées uniquement dans le but de répondre à votre demande commerciale ou technique.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">2. Utilisation des données</h2>
                        <p>
                            Vos données sont utilisées pour :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Répondre à vos demandes de devis et d'informations.</li>
                            <li>Vous contacter concernant votre projet.</li>
                            <li>Améliorer nos services.</li>
                        </ul>
                        <p className="mt-4">
                            Vos données ne sont ni vendues, ni échangées, ni transférées à des tiers sans votre consentement, sauf si cela est nécessaire pour répondre à une demande (par exemple l'expédition d'une commande).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">3. Protection des données</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">4. Cookies</h2>
                        <p>
                            Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous avez la possibilité de désactiver les cookies via les paramètres de votre navigateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#CB52EE] mb-4">5. Vos droits</h2>
                        <p>
                            Conformément à la réglementation en vigueur (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
                            Pour exercer ces droits, vous pouvez nous contacter à via notre formulaire de contact.
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

export default Confidentialite;
