import { notFound } from "next/navigation";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PremiumFooter from "@/components/PremiumFooter";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SchemaOrg } from "@/components/shared/SchemaOrg";
import { Metadata } from "next";
import {
    products,
    getProductBySlug,
    categories,
} from "@/data/products";
import ProductDetailContent from "@/components/products/ProductDetailContent";
import NeofilmAdhesifExperience from "@/components/products/NeofilmAdhesifExperience";
import { PricingTemplate } from "@/components/seo/PricingTemplate";
import { DemoTemplate } from "@/components/seo/DemoTemplate";

// Helper to parse slug and get type
const parseSlug = (slug: string) => {
    if (slug.endsWith('-tarifs')) {
        return { type: 'pricing', baseSlug: slug.replace('-tarifs', '') };
    }
    if (slug.endsWith('-demo')) {
        return { type: 'demo', baseSlug: slug.replace('-demo', '') };
    }
    return { type: 'product', baseSlug: slug };
};

// Generate static params for all products + variants in this category
export async function generateStaticParams() {
    const categoryProducts = products.filter(p => p.categorySeoSlug === 'ecran-led-portable');
    const params: { product: string }[] = [];

    categoryProducts.forEach(p => {
        // Base product page
        params.push({ product: p.slug });
        // Pricing page
        params.push({ product: `${p.slug}-tarifs` });
        // Demo page
        params.push({ product: `${p.slug}-demo` });
    });

    return params;
}

// Generate metadata for each product variant
export async function generateMetadata({
    params
}: {
    params: { product: string }
}): Promise<Metadata> {
    const { type, baseSlug } = parseSlug(params.product);
    const product = getProductBySlug(baseSlug);

    if (!product) {
        return { title: "Page non trouvée - NEOFILM LED" };
    }

    let title = product.seo.title;
    let description = product.seo.description;
    let canonical = `https://neofilmled.com/${product.categorySeoSlug}/${params.product}`;

    if (type === 'pricing') {
        title = `Tarif ${product.name} | Prix & Devis Vidéo LED - NEOFILM`;
        description = `Quel est le prix du ${product.name} ? Obtenez votre devis gratuit en 24h. Tarifs transparents, installation incluse. Estimation immédiate.`;
    } else if (type === 'demo') {
        title = `Démonstration ${product.name} | Testez nos Écrans LED - NEOFILM`;
        description = `Réservez votre démonstration gratuite du ${product.name}. Showroom Paris ou Visio-live. Découvrez la transparence et la luminosité de nos écrans.`;
    }

    return {
        title,
        description,
        keywords: product.seo.keywords,
        alternates: {
            canonical
        },
        openGraph: {
            title,
            description,
            images: [product.image],
            type: 'website'
        }
    };
}

export default function ProductPage({
    params
}: {
    params: { product: string }
}) {
    const { type, baseSlug } = parseSlug(params.product);
    const product = getProductBySlug(baseSlug);

    // Get category from product's categorySeoSlug
    const category = product ? Object.values(categories).find(
        cat => cat.seoSlug === product.categorySeoSlug
    ) : null;

    if (!product || !category) {
        notFound();
    }

    // Render Pricing Page
    if (type === 'pricing') {
        return <PricingTemplate product={product} category={category} />;
    }

    // Render Demo Page
    if (type === 'demo') {
        return <DemoTemplate product={product} category={category} />;
    }

    // Standard Product Page Logic
    const isSpecialExperience = [
        'neofilm-adhesif',
        'rideau-led-transparent',
        'mur-led-indoor',
        'ecran-flexible-led',
        'kakemono-led-pliable',
        'totem-led-rotatif',
        'stand-led-roulant'
    ].includes(baseSlug);

    // Product schema (same as before)
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.fullDescription,
        "image": `https://neofilmled.com${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": "NEOFÍLM"
        },
        "category": category.name,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "url": `https://neofilmled.com/${product.categorySeoSlug}/${params.product}`,
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "Sur devis"
            }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://neofilmled.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": category.name,
                "item": `https://neofilmled.com/${category.seoSlug}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": product.name
            }
        ]
    };

    if (isSpecialExperience) {
        return (
            <>
                <SchemaOrg schema={productSchema} />
                <SchemaOrg schema={breadcrumbSchema} />
                <main className="relative bg-black-100 flex flex-col overflow-hidden w-full min-h-screen">
                    <FloatingNav navItems={navItems} />
                    <NeofilmAdhesifExperience product={product} category={category} />
                    <div className="w-full">
                        <PremiumFooter />
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <SchemaOrg schema={productSchema} />
            <SchemaOrg schema={breadcrumbSchema} />
            <main className="relative bg-black-100 flex flex-col overflow-hidden w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                <div className="flex justify-center items-center flex-col w-full">
                    <div className="max-w-7xl w-full px-5 sm:px-10">
                        {/* Breadcrumb */}
                        <div className="pt-32 pb-10">
                            <Breadcrumb
                                items={[
                                    { label: category.name, href: `/${category.seoSlug}` },
                                    { label: product.name, href: `/${product.categorySeoSlug}/${params.product}` }
                                ]}
                            />
                        </div>

                        {/* Product Detail Content */}
                        <ProductDetailContent product={product} category={category} />
                    </div>
                </div>

                <div className="w-full">
                    <PremiumFooter />
                </div>
            </main>
        </>
    );
}
