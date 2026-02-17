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
    getCategoryBySlug,
    getAllProductSlugs,
    Product,
    categories // Import categories
} from "@/data/products";
import ProductDetailContent from "@/components/products/ProductDetailContent";
import NeofilmAdhesifExperience from "@/components/products/NeofilmAdhesifExperience";

// Generate static params for all products
export async function generateStaticParams() {
    const params: { category: string; product: string }[] = [];

    products.forEach(product => {
        const categoryInfo = categories[product.category];
        const categorySlugs = new Set<string>();

        // Add main SEO slug
        if (product.categorySeoSlug) {
            categorySlugs.add(product.categorySeoSlug);
        }

        // Add category object slugs (new and old if different)
        if (categoryInfo.seoSlug) categorySlugs.add(categoryInfo.seoSlug);
        if (categoryInfo.slug) categorySlugs.add(categoryInfo.slug);

        // Add product old slug if exists
        const productSlugs = [product.slug];
        if (product.oldSlug) productSlugs.push(product.oldSlug);

        // Generate combinations
        categorySlugs.forEach(catSlug => {
            productSlugs.forEach(prodSlug => {
                params.push({
                    category: catSlug,
                    product: prodSlug
                });
            });
        });
    });

    return params;
}

// Generate metadata for each product
export async function generateMetadata({
    params
}: {
    params: { category: string; product: string }
}): Promise<Metadata> {
    const product = getProductBySlug(params.product);

    if (!product) {
        return {
            title: "Produit non trouvé - NEOFILM LED"
        };
    }

    return {
        title: product.seo.title,
        description: product.seo.description,
        keywords: product.seo.keywords,
        alternates: {
            canonical: `https://neofilmled.com/solutions/${params.category}/${params.product}`
        },
        openGraph: {
            title: product.seo.title,
            description: product.seo.description,
            images: [product.image],
            type: 'website'
        }
    };
}

export default function ProductPage({
    params
}: {
    params: { category: string; product: string }
}) {
    const product = getProductBySlug(params.product);
    const category = getCategoryBySlug(params.category);
    const isSpecialExperience = [
        'neofilm-adhesif',
        'rideau-led-transparent',
        'mur-led-indoor',
        'ecran-flexible-led',
        'kakemono-led-pliable',
        'kakemono-led-portable-pliable',
        'totem-led-rotatif',
        'stand-led-roulant'
    ].includes(params.product);

    if (!product || !category) {
        notFound();
    }

    // Product schema for rich snippets
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.fullDescription,
        "image": product.image,
        "brand": {
            "@type": "Brand",
            "name": "NEOFILM LED"
        },
        "category": category.name,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "url": `https://neofilmled.com/solutions/${params.category}/${params.product}`
        }
    };

    if (isSpecialExperience) {
        return (
            <>
                <SchemaOrg schema={productSchema} />
                <main className="relative bg-black-100 flex flex-col overflow-hidden w-full min-h-screen">
                    <FloatingNav navItems={navItems} /> {/* Keep Nav */}
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
            <main className="relative bg-black-100 flex flex-col overflow-hidden w-full min-h-screen">
                <FloatingNav navItems={navItems} />

                <div className="flex justify-center items-center flex-col w-full">
                    <div className="max-w-7xl w-full px-5 sm:px-10">
                        {/* Breadcrumb */}
                        <div className="pt-32 pb-10">
                            <Breadcrumb
                                items={[
                                    { label: "Solutions LED", href: "/solutions" },
                                    { label: category.name, href: `/solutions#${category.id}` },
                                    { label: product.name, href: `/solutions/${params.category}/${params.product}` }
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
