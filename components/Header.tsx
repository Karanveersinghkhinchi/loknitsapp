
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);


const Header: React.FC = () => {
  const { user, login, logout, cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navLinkStyle = ({ isActive }: { isActive: boolean }): string =>
    `py-2 transition-colors duration-300 ${isActive ? 'border-b-2 border-soft-green' : 'hover:text-soft-green'}`;

  const navLinks = (
      <>
        <NavLink to="/collections/all" className={navLinkStyle}>Shop</NavLink>
        <NavLink to="/pages/gifting" className={navLinkStyle}>Gifting</NavLink>
        <NavLink to="/pages/about-us" className={navLinkStyle}>Our Story</NavLink>
        <NavLink to="/pages/wholesale" className={navLinkStyle}>Wholesale</NavLink>
      </>
  );

  return (
    <header className="bg-warm-off-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                <MenuIcon />
            </button>
        </div>
        <Link to="/" className="text-2xl font-bold tracking-wider text-charcoal-grey absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:translate-x-0">
          lo-knits.in
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks}
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <button onClick={logout} className="text-sm hover:text-soft-green transition-colors">Logout</button>
          ) : (
            <button onClick={() => login('wholesale')} className="text-sm hover:text-soft-green transition-colors" title="For demo purposes, click to log in as a wholesale user.">
              B2B Login
            </button>
          )}
          <Link to="/cart" className="relative hover:text-soft-green transition-colors">
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-soft-green text-charcoal-grey text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {isMenuOpen && (
          <div className="md:hidden bg-warm-off-white py-4">
              <nav className="flex flex-col items-center space-y-4">
                  {navLinks}
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;
