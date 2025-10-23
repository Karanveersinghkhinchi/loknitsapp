
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GiftingPage from './pages/GiftingPage';
import AboutPage from './pages/AboutPage';
import WholesalePage from './pages/WholesalePage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import CartPage from './pages/CartPage';
import TrackingPage from './pages/TrackingPage';
import PolicyPage from './pages/PolicyPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/:category" element={<ShopPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/pages/gifting" element={<GiftingPage />} />
              <Route path="/pages/about-us" element={<AboutPage />} />
              <Route path="/pages/wholesale" element={<WholesalePage />} />
              <Route path="/pages/contact" element={<ContactPage />} />
              <Route path="/pages/faq" element={<FaqPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="/pages/shipping-policy" element={<PolicyPage type="Shipping" />} />
              <Route path="/pages/returns-exchanges" element={<PolicyPage type="Returns" />} />
              <Route path="/pages/privacy-policy" element={<PolicyPage type="Privacy" />} />
              <Route path="/pages/terms-of-service" element={<PolicyPage type="Terms" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
