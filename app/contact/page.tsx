import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import EnhancedContactForm from "@/components/contact/EnhancedContactForm";
import PremiumFooter from "@/components/PremiumFooter";
import { SchemaOrg, organizationSchema } from "@/components/shared/SchemaOrg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact NEOFÍLM LED | Devis Écran LED & Étude de Projet Gratuite",
    description: "Un projet d'affichage ? Contactez nos experts LED pour une étude personnalisée et un devis gratuit sous 24h. Showroom à Paris. Installation partout en France et Europe.",
    keywords: "contact neofilm, devis écran led, prix vitrine led, installateur led france, maintenance écran géant, étude projet affichage dynamique, showroom led paris",
    alternates: {
        canonical: "https://neofilmled.com/contact"
    }
};

import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";

const ContactPage = () => {
    return (
        <>
            <SchemaOrg schema={organizationSchema} />
            <main className="relative bg-[#030014] flex flex-col items-center overflow-hidden mx-auto w-full">
                <FloatingNav navItems={navItems} />

                <div className="w-full relative">
                    <div className="absolute inset-0 w-full h-[120vh] pointer-events-none z-0">
                        <BackgroundGradientAnimation
                            gradientBackgroundStart="transparent"
                            gradientBackgroundEnd="transparent"
                            firstColor="108, 0, 162"
                            secondColor="0, 112, 126"
                            thirdColor="203, 82, 238"
                            fourthColor="0, 216, 255"
                            fifthColor="108, 0, 162"
                            pointerColor="203, 82, 238"
                            size="60%"
                            blendingValue="soft-light"
                            className="z-0 opacity-50"
                        />
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-10" />
                    </div>
                    <ContactHero />
                </div>

                <div className="max-w-7xl w-full px-5 sm:px-10 space-y-24 pb-20">
                    <section id="form-section" className="scroll-mt-32">
                        <div className="text-center mb-16 relative z-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                Parlez-nous de votre <span className="text-[#00D8FF]">Projet</span>
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto font-medium drop-shadow-md">
                                Remplissez ce formulaire détaillé pour obtenir une étude technique et commerciale
                                précise sous 24h ouvrées.
                            </p>
                        </div>
                        <EnhancedContactForm />
                    </section>

                    <ContactInfo />
                    <ContactFAQ />
                </div>

                <div className="w-full">
                    <PremiumFooter />
                </div>
            </main>
        </>
    );
};

export default ContactPage;
