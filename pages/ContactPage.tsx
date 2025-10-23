
import React from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Whether you have a question about our products, an order, or just want to say hello, our team is ready to help.</p>
        </div>
        <form className="mt-12 bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="space-y-6">
            <input type="text" placeholder="Your Name" required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green" />
            <textarea placeholder="Your Message" rows={5} required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green"></textarea>
            <Button type="submit" className="w-full">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
