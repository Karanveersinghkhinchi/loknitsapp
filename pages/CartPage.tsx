
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { generateGiftMessage } from '../services/geminiService';
import Button from '../components/Button';
import { Product } from '../types';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, user } = useAppContext();
  const [giftMessage, setGiftMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [occasion, setOccasion] = useState('a special occasion');
  const [addGiftOptions, setAddGiftOptions] = useState(false);

  const handleGenerateMessage = async (product: Product) => {
    setIsGenerating(true);
    const message = await generateGiftMessage(product, occasion);
    setGiftMessage(message);
    setIsGenerating(false);
  };
  
  const isWholesale = user?.type === 'wholesale';

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/collections/all" className="mt-4 inline-block">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
              {cart.map(({ product, quantity }) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-charcoal-grey">
                        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
                        <p className="ml-4">${(isWholesale ? product.wholesalePrice : product.price).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center">
                            <label htmlFor={`quantity-${product.id}`} className="sr-only">Quantity</label>
                            <input
                                id={`quantity-${product.id}`}
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
                                className="w-16 border border-gray-300 rounded-md py-1 text-center"
                            />
                        </div>
                      <div className="flex">
                        <button onClick={() => removeFromCart(product.id)} type="button" className="font-medium text-soft-green hover:text-opacity-80">Remove</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8 lg:border-none lg:pt-0">
            <h2 className="text-lg font-medium text-charcoal-grey">Order summary</h2>
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <dl className="space-y-2">
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-600">Subtotal</dt>
                        <dd className="text-sm font-medium text-charcoal-grey">${cartTotal.toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-2">
                        <dt className="text-base font-medium text-charcoal-grey">Order total</dt>
                        <dd className="text-base font-medium text-charcoal-grey">${cartTotal.toFixed(2)}</dd>
                    </div>
                </dl>
            </div>

            <div className="mt-8">
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
            
            <div className="mt-8 border-t pt-8">
                <h3 className="font-semibold">Gifting Options</h3>
                <label className="mt-4 flex items-center">
                    <input type="checkbox" checked={addGiftOptions} onChange={() => setAddGiftOptions(!addGiftOptions)} className="h-4 w-4 rounded border-gray-300 text-soft-green focus:ring-soft-green"/>
                    <span className="ml-2 text-sm">This order is a gift</span>
                </label>

                {addGiftOptions && (
                    <div className="mt-4 space-y-4 animate-fade-in">
                        <textarea
                            value={giftMessage}
                            onChange={(e) => setGiftMessage(e.target.value)}
                            placeholder="Add a personalized gift message..."
                            className="w-full p-2 border rounded-md"
                            rows={4}
                        />
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Help me write a message for...</label>
                             <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full p-2 border rounded-md mb-2 text-sm">
                                <option>a special occasion</option>
                                <option>an anniversary</option>
                                <option>a birthday</option>
                                <option>just because</option>
                            </select>
                            <Button variant="secondary" onClick={() => handleGenerateMessage(cart[0].product)} disabled={isGenerating} className="w-full text-sm py-2">
                                {isGenerating ? 'Generating...' : 'Generate with AI'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
