import React from 'react';
import { Product, CategoryInfo } from '@/data/products';

interface ProductSchemaProps {
    product: Product;
    category: CategoryInfo;
}

/**
 * Product Schema.org component
 * Generates structured data for product pages to enhance SEO
 */
export const ProductSchema: React.FC<ProductSchemaProps> = ({ product, category }) => {
    const schema = {
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR",
            "url": `https://neofilmled.com/${product.categorySeoSlug}/${product.slug}`,
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "Sur devis",
                "priceCurrency": "EUR"
            },
            "seller": {
                "@type": "Organization",
                "name": "NEOFÍLM LED"
            }
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "NEOFÍLM LED",
            "url": "https://neofilmled.com"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface BreadcrumbSchemaProps {
    items: Array<{
        name: string;
        url?: string;
    }>;
}

/**
 * Breadcrumb Schema.org component
 * Generates breadcrumb structured data for better navigation in search results
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://neofilmled.com"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                ...(item.url && { "item": item.url })
            }))
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

/**
 * FAQ Schema.org component
 * Generates FAQ structured data for rich snippets in search results
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface ServiceSchemaProps {
    name: string;
    description: string;
    provider: string;
    areaServed?: string;
}

/**
 * Service Schema.org component
 * For service pages like Installation
 */
export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    name,
    description,
    provider,
    areaServed = "France"
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": provider
        },
        "areaServed": {
            "@type": "Country",
            "name": areaServed
        },
        "serviceType": "Installation d'écrans LED professionnels"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface LocalBusinessSchemaProps {
    name: string;
    address: {
        street?: string;
        city: string;
        postalCode?: string;
        country: string;
    };
    phone?: string;
    email?: string;
}

/**
 * LocalBusiness Schema.org component
 * For contact page and footer
 */
export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
    name,
    address,
    phone,
    email
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "address": {
            "@type": "PostalAddress",
            ...(address.street && { "streetAddress": address.street }),
            "addressLocality": address.city,
            ...(address.postalCode && { "postalCode": address.postalCode }),
            "addressCountry": address.country
        },
        ...(phone && { "telephone": phone }),
        ...(email && { "email": email }),
        "url": "https://neofilmled.com",
        "priceRange": "€€€"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
