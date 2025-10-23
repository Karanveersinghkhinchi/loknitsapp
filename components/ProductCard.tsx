
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { user } = useAppContext();
  const isWholesale = user?.type === 'wholesale';
  const price = isWholesale ? product.wholesalePrice : product.price;

  return (
    <div className="group relative fade-in">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-charcoal-grey">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
            </h3>
          </div>
          <div className="text-sm font-medium text-charcoal-grey">
            {isWholesale ? (
              <div className="flex items-baseline space-x-2">
                <p className="line-through text-gray-500">${product.price.toFixed(2)}</p>
                <p>${price.toFixed(2)}</p>
              </div>
            ) : (
              <p>${price.toFixed(2)}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
