
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">Handmade, Minimalist, Simple.</h1>
        <p className="mt-6 text-lg text-gray-600">
            Lo-knits.in was born from a simple idea: to create beautiful, lasting gifts that forge deeper connections. In a world of fleeting trends and mass production, we champion the slow, deliberate art of crochet. Each item in our collection is a testament to this belief—crafted with patience, care, and a deep respect for the materials we use. We are more than just a brand; we are a community of artisans and gift-givers who believe in the power of a simple, heartfelt gesture.
        </p>
      </div>
       <div className="mt-16 max-w-5xl mx-auto">
         <img src="https://picsum.photos/seed/about/1200/600" alt="Our workshop" className="rounded-lg shadow-xl"/>
       </div>
    </div>
  );
};

export default AboutPage;
