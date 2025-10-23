
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CartItem, Product, User, UserType } from '../types';

interface AppContextType {
  user: User | null;
  cart: CartItem[];
  login: (type: UserType) => void;
  logout: () => void;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const login = (type: UserType) => {
    setUser({ name: type === 'wholesale' ? 'Wholesale Client' : 'Retail Customer', type });
  };

  const logout = () => {
    setUser(null);
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = user?.type === 'wholesale' ? item.product.wholesalePrice : item.product.price;
    return total + price * item.quantity;
  }, 0);

  return (
    <AppContext.Provider value={{ user, cart, login, logout, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
