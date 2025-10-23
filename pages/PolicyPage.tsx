
import React from 'react';

interface PolicyPageProps {
  type: 'Shipping' | 'Returns' | 'Privacy' | 'Terms';
}

const policyContent = {
  Shipping: {
    title: 'Shipping Policy',
    content: 'We offer standard shipping on all orders. Orders are processed within 1-2 business days and typically arrive within 5-7 business days. You will receive a tracking number as soon as your order ships.'
  },
  Returns: {
    title: 'Returns & Exchanges',
    content: 'We accept returns within 30 days of purchase for a full refund or exchange. Items must be in their original condition. To initiate a return, please contact our support team.'
  },
  Privacy: {
    title: 'Privacy Policy',
    content: 'Your privacy is important to us. We do not sell your personal information to third parties. We use cookies to enhance your browsing experience and for analytical purposes.'
  },
  Terms: {
    title: 'Terms of Service',
    content: 'By using our website, you agree to our terms of service. All content on this site is the property of Lo-knits.in. We reserve the right to refuse service to anyone for any reason at any time.'
  }
};

const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  const { title, content } = policyContent[type];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center">{title}</h1>
        <div className="prose mt-8 mx-auto">
          <p>{content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
