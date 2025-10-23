
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { user, addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <div className="text-center py-20">Product not found. <Link to="/" className="text-soft-green">Go home</Link></div>;
  }
  
  const isWholesale = user?.type === 'wholesale';
  const price = isWholesale ? product.wholesalePrice : product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
        {/* Image gallery */}
        <div className="flex flex-col gap-4">
            <img src={product.gallery[0]} alt={product.name} className="w-full h-auto object-cover object-center rounded-lg shadow-md" />
            <div className="grid grid-cols-3 gap-4">
                {product.gallery.slice(1).map((img, idx) => (
                    <img key={idx} src={img} alt={`${product.name} view ${idx+1}`} className="w-full h-auto object-cover rounded-lg" />
                ))}
            </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-charcoal-grey">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className="text-3xl text-charcoal-grey">
                {isWholesale ? (
                    <div className="flex items-baseline space-x-3">
                        <span className="line-through text-2xl text-gray-500">${product.price.toFixed(2)}</span>
                        <span>${price.toFixed(2)}</span>
                    </div>
                ) : (
                    <span>${price.toFixed(2)}</span>
                )}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6 flex items-center">
            <label htmlFor="quantity" className="mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="w-20 border border-gray-300 rounded-md py-2 px-3 focus:ring-soft-green focus:border-soft-green"
            />
          </div>

          <div className="mt-10">
            <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button onClick={() => setActiveTab('details')} className={`${activeTab === 'details' ? 'border-soft-green text-charcoal-grey' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Details</button>
                    <button onClick={() => setActiveTab('reviews')} className={`${activeTab === 'reviews' ? 'border-soft-green text-charcoal-grey' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Reviews</button>
                </nav>
            </div>

            <div className="mt-6">
                {activeTab === 'details' && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                )}
                {activeTab === 'reviews' && (
                    <div>
                        {product.reviews.length > 0 ? (
                            product.reviews.map((review, i) => (
                                <div key={i} className="py-4 border-b border-gray-200 last:border-b-0">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, starIndex) => <StarIcon key={starIndex} filled={starIndex < review.rating} />)}
                                    </div>
                                    <p className="mt-2 text-gray-600">"{review.text}"</p>
                                    <p className="mt-2 text-sm font-semibold text-gray-800">{review.author} {review.verified && <span className="text-green-600 font-normal">(Verified Buyer)</span>}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No reviews yet. Be the first to share your thoughts!</p>
                        )}
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
