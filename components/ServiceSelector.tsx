import React from 'react';
import { Service } from '../types';

interface ServiceSelectorProps {
  services: Service[];
  activeId: number;
  onSelect: (id: number) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ services, activeId, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onSelect(service.id)}
          className={`p-3 h-full text-center text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 flex items-center justify-center
            ${activeId === service.id
              ? 'bg-gray-900 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
            }
          `}
        >
          {service.title}
        </button>
      ))}
    </div>
  );
};

export default ServiceSelector;
