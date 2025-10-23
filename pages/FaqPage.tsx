
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-6">
            <dt>
                <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-start text-left text-gray-600">
                    <span className="font-medium text-charcoal-grey">{q}</span>
                    <span className="ml-6 h-7 flex items-center">
                       <svg className={`h-6 w-6 transform ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                       </svg>
                    </span>
                </button>
            </dt>
            {isOpen && <dd className="mt-2 pr-12 text-base text-gray-500">{a}</dd>}
        </div>
    )
}


const FaqPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-600">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
        </div>
        <div className="mt-12">
            <dl className="space-y-4">
                {FAQS.map((faq, index) => <FaqItem key={index} q={faq.q} a={faq.a} />)}
            </dl>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
