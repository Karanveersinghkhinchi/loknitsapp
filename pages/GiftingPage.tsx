
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const occasions = [
    { name: "For Anniversaries", products: PRODUCTS.slice(0, 3) },
    { name: "For Birthdays", products: PRODUCTS.slice(3, 6) },
    { name: "Just Because", products: PRODUCTS.slice(1, 4) },
];

const GiftingPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">The Art of Gifting</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Find the perfect handmade gift to celebrate life's special moments and create lasting bonds.</p>
            </div>

            <div className="mt-16 space-y-16">
                {occasions.map(occasion => (
                    <section key={occasion.name}>
                        <h2 className="text-2xl font-semibold tracking-tight mb-8">{occasion.name}</h2>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {occasion.products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default GiftingPage;
