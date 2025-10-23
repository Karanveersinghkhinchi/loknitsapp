
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const ShopPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const filteredProducts = useMemo(() => {
    if (!category || category === 'all') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(p => p.category === category);
  }, [category]);

  const getCategoryName = (cat: string | undefined): string => {
    if (!cat || cat === 'all') return 'All Products';
    return cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">{getCategoryName(category)}</h1>
        <p className="mt-2 text-gray-600">Explore our collection of handmade treasures.</p>
      </div>
      
      <div className="flex">
        <aside className="hidden md:block w-1/4 pr-8">
            <h2 className="font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
                <li><Link to="/collections/all" className={`hover:text-soft-green ${category === 'all' || !category ? 'font-bold' : ''}`}>All</Link></li>
                <li><Link to="/collections/crochet-flowers" className={`hover:text-soft-green ${category === 'crochet-flowers' ? 'font-bold' : ''}`}>Crochet Flowers</Link></li>
                <li><Link to="/collections/keychains" className={`hover:text-soft-green ${category === 'keychains' ? 'font-bold' : ''}`}>Keychains</Link></li>
                <li><Link to="/collections/accessories" className={`hover:text-soft-green ${category === 'accessories' ? 'font-bold' : ''}`}>Accessories</Link></li>
            </ul>
        </aside>

        <main className="w-full md:w-3/4">
             {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
             ) : (
                <p>No products found in this category.</p>
             )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
