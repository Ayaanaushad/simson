import React from 'react';
import { Service } from '../types';
import { CheckIcon } from './Icons';

interface ServiceDetailViewProps {
  service: Service | undefined;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service }) => {
  if (!service) {
    return (
      <div className="p-8 bg-white rounded-2xl shadow-lg text-center text-gray-500">
        Please select a service to see the details.
      </div>
    );
  }

  const isPackage = service.isPackage;

  const cardClasses = `
    p-8 rounded-2xl transition-all duration-500 ease-in-out
    ${isPackage 
      ? 'bg-gray-900 text-white border-gray-700 shadow-2xl shadow-indigo-500/20' 
      : 'bg-white border-gray-200 shadow-lg'
    }
  `;

  return (
    <div className={cardClasses}>
      {service.badge && (
        <div className="text-right -mt-4 mb-4">
          <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {service.badge}
          </span>
        </div>
      )}
      <h2 className={`text-3xl font-bold ${isPackage ? 'text-white' : 'text-gray-900'}`}>
        {service.title}
      </h2>
      <p className={`mt-2 text-xl font-semibold ${isPackage ? 'text-indigo-400' : 'text-indigo-600'}`}>
        {service.price}
      </p>
      <hr className={`my-6 ${isPackage ? 'border-gray-700' : 'border-gray-200'}`} />
      <ul className="space-y-4">
        {service.description.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className={`flex-shrink-0 mr-3 mt-1 h-5 w-5 ${isPackage ? 'text-indigo-400' : 'text-indigo-500'}`} />
            <span className={isPackage ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetailView;