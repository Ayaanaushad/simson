import React from 'react';
import { PhoneIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="border-t border-gray-200"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm text-gray-500">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            Copyright © 2025 AD-Ityaadi Creative Solutions. All Rights Reserved
          </p>
          <div className="flex items-center space-x-6">
            <a href="tel:8100108145" className="flex items-center hover:text-gray-900 transition-colors">
              <PhoneIcon className="h-4 w-4 mr-2" />
              8100 108 145
            </a>
            <a href="mailto:info@adityaadi.in" className="flex items-center hover:text-gray-900 transition-colors">
              <MailIcon className="h-4 w-4 mr-2" />
              info@adityaadi.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;