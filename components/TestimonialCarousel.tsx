
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-40 overflow-hidden">
      {TESTIMONIALS.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <blockquote className="text-center">
            <p className="text-lg italic text-charcoal-grey">"{testimonial.quote}"</p>
            <footer className="mt-4 text-sm font-semibold text-gray-500">- {testimonial.author}</footer>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
