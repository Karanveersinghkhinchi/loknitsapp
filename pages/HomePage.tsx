
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const categories = [
    { name: 'Crochet Flowers', href: '/collections/crochet-flowers', image: 'https://picsum.photos/seed/catflower/600/400' },
    { name: 'Keychains', href: '/collections/keychains', image: 'https://picsum.photos/seed/catkey/600/400' },
    { name: 'Accessories', href: '/collections/accessories', image: 'https://picsum.photos/seed/catacc/600/400' },
];

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center text-warm-off-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Forever gifts for forever bonds.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">Handmade, minimalist, and simple crochet gifts crafted with love.</p>
          <div className="mt-8">
            <Link to="/collections/all">
              <Button>Shop The Collection</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-center">Shop by Category</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {categories.map((category) => (
              <Link key={category.name} to={category.href} className="group">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <img src={category.image} alt={category.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-warm-off-white py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-center">Featured Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Handmade Process Section */}
      <section className="py-16 sm:py-24">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                      <img src="https://picsum.photos/seed/handmade/800/600" alt="Handmade process" className="rounded-lg shadow-lg"/>
                  </div>
                  <div className="md:w-1/2 text-center md:text-left">
                      <h2 className="text-2xl font-semibold tracking-tight">Crafted by Hand, With Heart</h2>
                      <p className="mt-4 text-gray-600">Each lo-knits piece is meticulously handcrafted, loop by loop, by skilled artisans. We believe in the beauty of imperfection and the soulfulness of a product made by human hands. This dedication to craft ensures that every gift you give is truly one-of-a-kind.</p>
                      <Link to="/pages/about-us" className="mt-6 inline-block">
                        <Button variant="secondary">Learn Our Story</Button>
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-off-white py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <TestimonialCarousel />
        </div>
      </section>

    </div>
  );
};

export default HomePage;
