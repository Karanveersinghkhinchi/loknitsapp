
import React, { useState } from 'react';
import Button from '../components/Button';

const WholesalePage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Partner With Us</h1>
                    <p className="mt-4 text-lg text-gray-600">Join the Lo-knits family and bring our handmade gifts to your customers.</p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Why Wholesale?</h2>
                        <p className="mt-4 text-gray-600">
                            Offer your customers unique, high-quality handmade products that tell a story. As a Lo-knits wholesale partner, you'll receive exclusive pricing, early access to new collections, and dedicated support to help your business thrive.
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside">
                            <li>Competitive wholesale pricing</li>
                            <li>Low minimum order quantities</li>
                            <li>Handcrafted quality and unique designs</li>
                            <li>Marketing support and assets</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                        {submitted ? (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Thank You!</h3>
                                <p className="mt-2 text-gray-600">Your application has been received. We will review it and get back to you within 2-3 business days.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-xl font-semibold text-center mb-6">Application Form</h3>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Your Name" required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green" />
                                    <input type="email" placeholder="Email Address" required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green" />
                                    <input type="text" placeholder="Company Name" required className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green" />
                                    <textarea placeholder="Tell us a bit about your store" rows={4} className="w-full p-3 border rounded-md focus:ring-soft-green focus:border-soft-green"></textarea>
                                    <Button type="submit" className="w-full">Apply Now</Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WholesalePage;
