
import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'cf-01',
    name: 'Serene Sunflower',
    price: 25.00,
    wholesalePrice: 12.50,
    description: 'A single, beautifully handcrafted crochet sunflower to brighten any space. A symbol of adoration and longevity.',
    details: ['Material: 100% Cotton Yarn', 'Height: 12 inches', 'Handmade in India'],
    category: 'crochet-flowers',
    imageUrl: 'https://picsum.photos/seed/sunflower/800/800',
    gallery: ['https://picsum.photos/seed/sunflower/800/800', 'https://picsum.photos/seed/sunflower2/800/800', 'https://picsum.photos/seed/sunflower3/800/800'],
    isFeatured: true,
    reviews: [
      { author: 'Priya S.', rating: 5, text: 'Absolutely stunning. The craftsmanship is top-notch.', verified: true }
    ]
  },
  {
    id: 'cf-02',
    name: 'Eternal Rose',
    price: 22.00,
    wholesalePrice: 11.00,
    description: 'A timeless crochet rose that never wilts. The perfect gift to express everlasting love and appreciation.',
    details: ['Material: Mercerized Cotton', 'Height: 11 inches', 'Available in Red, Pink, and White'],
    category: 'crochet-flowers',
    imageUrl: 'https://picsum.photos/seed/rose/800/800',
    gallery: ['https://picsum.photos/seed/rose/800/800', 'https://picsum.photos/seed/rose2/800/800'],
    reviews: [
      { author: 'Anjali M.', rating: 5, text: 'So much better than real flowers! This will last forever.', verified: true },
      { author: 'Rohan K.', rating: 4, text: 'Beautiful, though a bit smaller than I expected.', verified: true }
    ]
  },
  {
    id: 'cf-03',
    name: 'Lavender Sprig',
    price: 18.00,
    wholesalePrice: 9.00,
    description: 'A delicate sprig of crochet lavender, perfect for adding a touch of calm and serenity to your home or desk.',
    details: ['Material: 100% Cotton Yarn', 'Height: 10 inches', 'Set of 3 sprigs'],
    category: 'crochet-flowers',
    imageUrl: 'https://picsum.photos/seed/lavender/800/800',
    gallery: ['https://picsum.photos/seed/lavender/800/800', 'https://picsum.photos/seed/lavender2/800/800'],
    isFeatured: true,
    reviews: []
  },
  {
    id: 'kc-01',
    name: 'Chubby Bee Keychain',
    price: 15.00,
    wholesalePrice: 7.50,
    description: 'A cute and chubby crochet bee to keep your keys company. Guaranteed to make you smile.',
    details: ['Material: Soft Acrylic Yarn', 'Size: 2 inches tall', 'Durable metal keyring'],
    category: 'keychains',
    imageUrl: 'https://picsum.photos/seed/bee/800/800',
    gallery: ['https://picsum.photos/seed/bee/800/800', 'https://picsum.photos/seed/bee2/800/800'],
    isFeatured: true,
    reviews: [
       { author: 'Meera G.', rating: 5, text: 'So adorable! I got one for myself and my best friend.', verified: true }
    ]
  },
  {
    id: 'kc-02',
    name: 'Minimalist Leaf Keychain',
    price: 12.00,
    wholesalePrice: 6.00,
    description: 'A simple and elegant crochet leaf keychain. A subtle nod to nature for your everyday essentials.',
    details: ['Material: 100% Cotton Yarn', 'Size: 3 inches long', 'Antique bronze finish keyring'],
    category: 'keychains',
    imageUrl: 'https://picsum.photos/seed/leaf/800/800',
    gallery: ['https://picsum.photos/seed/leaf/800/800'],
    reviews: []
  },
  {
    id: 'ac-01',
    name: 'Woven Coaster Set',
    price: 35.00,
    wholesalePrice: 17.50,
    description: 'Set of four minimalist crochet coasters. Protect your surfaces in style with these absorbent and beautiful accessories.',
    details: ['Material: 100% Cotton Cord', 'Diameter: 4 inches', 'Set of 4'],
    category: 'accessories',
    imageUrl: 'https://picsum.photos/seed/coaster/800/800',
    gallery: ['https://picsum.photos/seed/coaster/800/800', 'https://picsum.photos/seed/coaster2/800/800'],
    isFeatured: true,
    reviews: []
  },
   {
    id: 'ac-02',
    name: 'Daisy Book Sleeve',
    price: 40.00,
    wholesalePrice: 20.00,
    description: 'Protect your favorite book with this charming crochet book sleeve, adorned with a delicate daisy pattern.',
    details: ['Material: Blended Cotton Yarn', 'Fits standard paperbacks (5"x8")', 'Button and loop closure'],
    category: 'accessories',
    imageUrl: 'https://picsum.photos/seed/booksleeve/800/800',
    gallery: ['https://picsum.photos/seed/booksleeve/800/800'],
    reviews: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: 'The quality and care put into each piece is just breathtaking. My sunflower is the highlight of my room!', author: 'Aisha R.' },
  { id: 2, quote: 'I ordered a gift for my sister and the personalized note option was a wonderful touch. She was so moved.', author: 'Karan T.' },
  { id: 3, quote: 'Finally, a brand that understands simplicity and elegance. My new favorite place for thoughtful gifts.', author: 'Sunita P.' },
];

export const FAQS = [
    { q: 'What are your products made of?', a: 'All our products are handmade using high-quality cotton and acrylic yarns, ensuring durability and a soft touch.' },
    { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. We also offer expedited options at checkout.' },
    { q: 'Do you offer gift wrapping?', a: 'Yes! We offer premium gift packaging and personalized message options during the checkout process to make your gift extra special.' },
    { q: 'Can I place a wholesale order?', a: 'Absolutely. Please visit our Wholesale page and fill out the application form. We\'ll get back to you within 2 business days.' },
];
