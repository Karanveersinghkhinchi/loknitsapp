
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-off-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold tracking-wider text-charcoal-grey">lo-knits.in</h3>
            <p className="mt-2 text-sm text-gray-600">Forever gifts for forever bonds.</p>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-grey">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/pages/about-us" className="text-gray-600 hover:text-soft-green">Our Story</Link></li>
              <li><Link to="/collections/all" className="text-gray-600 hover:text-soft-green">Shop All</Link></li>
              <li><Link to="/pages/faq" className="text-gray-600 hover:text-soft-green">FAQ</Link></li>
              <li><Link to="/pages/contact" className="text-gray-600 hover:text-soft-green">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-grey">Policies</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/pages/shipping-policy" className="text-gray-600 hover:text-soft-green">Shipping Policy</Link></li>
              <li><Link to="/pages/returns-exchanges" className="text-gray-600 hover:text-soft-green">Returns & Exchanges</Link></li>
              <li><Link to="/pages/privacy-policy" className="text-gray-600 hover:text-soft-green">Privacy Policy</Link></li>
              <li><Link to="/pages/terms-of-service" className="text-gray-600 hover:text-soft-green">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-grey">Stay Connected</h3>
            <p className="mt-4 text-sm text-gray-600">Join our newsletter for exclusive offers and stories.</p>
            <form className="mt-2 flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:ring-soft-green focus:border-soft-green text-sm" />
              <button className="bg-soft-green text-charcoal-grey px-4 py-2 rounded-r-md hover:bg-opacity-80 transition-colors">
                &rarr;
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lo-knits.in. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
