import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'NEOFÍLM Adhésif - Le Film LED Transparent N°1 pour Vitrine | Haute Transparence',
    description: 'Révolutionnez votre vitrine avec le Film LED Adhésif NEOFÍLM. 85% de transparence, installation directe sur verre, invisible éteint. Devis gratuit pour votre projet d\'affichage innovant.',
    keywords: 'film led transparent, neofilm adhésif, écran vitrine transparent, led sur verre, affichage dynamique vitrine, écran publicitaire transparent, technologie led invisible',
    openGraph: {
        title: 'NEOFÍLM Adhésif - Le Film LED Transparent N°1 pour Vitrine',
        description: 'Révolutionnez votre vitrine avec le Film LED Adhésif NEOFÍLM. 85% de transparence, installation directe sur verre.',
        images: ['/film transparents adhésif led - NEOFILM.jpg'],
    }
};

export default function NeofilmProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
