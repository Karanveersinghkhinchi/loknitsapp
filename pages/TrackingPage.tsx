
import React from 'react';
import { PRODUCTS } from '../constants';

const TrackingPage: React.FC = () => {
    const orderItem = PRODUCTS[0];
    const steps = ['Processing', 'Shipped', 'In Transit', 'Delivered'];
    const currentStep = 'In Transit';

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Your Order is on its Way!</h1>
          <p className="text-gray-600 mt-2">Order #LK12345</p>
        </div>

        <div className="my-12">
            <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${steps.indexOf(currentStep) >= index ? 'bg-soft-green' : 'bg-gray-200'}`}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <p className={`mt-2 text-sm ${steps.indexOf(currentStep) >= index ? 'font-semibold' : 'text-gray-500'}`}>{step}</p>
                        </div>
                        {index < steps.length - 1 && <div className={`flex-1 h-1 ${steps.indexOf(currentStep) > index ? 'bg-soft-green' : 'bg-gray-200'}`}></div>}
                    </React.Fragment>
                ))}
            </div>
            <p className="text-center mt-4 text-gray-600">Estimated Delivery: Tomorrow, 5:00 PM</p>
        </div>
        
        <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">Items in this shipment</h2>
            <div className="flex items-center">
                <img src={orderItem.imageUrl} alt={orderItem.name} className="w-20 h-20 rounded-md object-cover"/>
                <div className="ml-4">
                    <p className="font-semibold">{orderItem.name}</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
