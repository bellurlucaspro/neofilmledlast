"use client";

import React from 'react';

interface SchemaOrgProps {
    schema: object;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ schema }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Organization Schema for the entire site
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEOFILM LED",
    "url": "https://neofilmled.com",
    "logo": "https://neofilmled.com/logoneofilm.png",
    "description": "Leader français de la signalétique LED innovante. Spécialiste du film LED transparent pour vitrines et de l'affichage LED professionnel.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "France"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Service Client",
        "availableLanguage": "French"
    },
    "sameAs": [
        "https://www.linkedin.com/company/neofilmled"
    ]
};

// LocalBusiness Schema
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEOFILM LED",
    "image": "https://neofilmled.com/logoneofilm.png",
    "url": "https://neofilmled.com",
    "telephone": "+33-X-XX-XX-XX-XX",
    "priceRange": "€€€",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "France"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8566,
        "longitude": 2.3522
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    }
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://neofilmled.com${item.url}`
        }))
    };
};

// Product Schema Generator
export const generateProductSchema = (product: {
    name: string;
    description: string;
    image: string;
    brand?: string;
}) => {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://neofilmled.com${product.image}`,
        "brand": {
            "@type": "Brand",
            "name": product.brand || "NEOFILM LED"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "EUR"
        }
    };
};

// FAQ Schema Generator
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
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
};

export default SchemaOrg;
