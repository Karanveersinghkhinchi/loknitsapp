
export interface Product {
  id: string;
  name: string;
  price: number;
  wholesalePrice: number;
  description: string;
  details: string[];
  category: 'crochet-flowers' | 'keychains' | 'accessories';
  imageUrl: string;
  gallery: string[];
  reviews: Review[];
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type UserType = 'retail' | 'wholesale';

export interface User {
  name: string;
  type: UserType;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}
