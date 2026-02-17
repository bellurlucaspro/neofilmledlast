"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { SchemaOrg, generateBreadcrumbSchema } from './SchemaOrg';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    const allItems = [{ name: 'Accueil', url: '/' }, ...items];
    const breadcrumbSchema = generateBreadcrumbSchema(allItems);

    return (
        <>
            <SchemaOrg schema={breadcrumbSchema} />
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-white/60">
                    {allItems.map((item, index) => (
                        <li key={item.url} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 mx-2 text-white/40" />
                            )}
                            {index === allItems.length - 1 ? (
                                <span className="text-white/90 font-medium flex items-center">
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="hover:text-purple transition-colors flex items-center"
                                >
                                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;
