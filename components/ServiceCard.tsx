import React from 'react';
import { Service } from '../types';
import { CheckIcon } from './Icons';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isPackage = service.isPackage;

  const cardClasses = `
    relative flex-shrink-0 w-80 md:w-96 h-full flex flex-col p-8 rounded-2xl 
    border transition-all duration-300 ease-in-out transform hover:-translate-y-2
    ${isPackage 
      ? 'bg-gray-900 text-white border-gray-700 shadow-2xl shadow-indigo-500/20' 
      : 'bg-white border-gray-200 shadow-lg'
    }
  `;

  return (
    <div className={cardClasses}>
      {service.badge && (
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {service.badge}
          </div>
        )}
      <div className="flex-grow">
        <h3 className={`text-2xl font-bold ${isPackage ? 'text-white' : 'text-gray-900'}`}>
          {service.title}
        </h3>
        <p className={`mt-2 text-lg font-semibold ${isPackage ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {service.price}
        </p>
        <ul className="mt-6 space-y-4">
          {service.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className={`flex-shrink-0 mr-3 mt-1 ${isPackage ? 'text-indigo-400' : 'text-indigo-500'}`} />
              <span className={isPackage ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <button className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-300
         ${isPackage 
            ? 'bg-indigo-500 text-white hover:bg-indigo-400' 
            : 'bg-gray-900 text-white hover:bg-gray-700'
          }`}>
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
