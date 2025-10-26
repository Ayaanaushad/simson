
import React, { useState } from 'react';
import Header from './components/Header';
import { services } from './constants';
import ServiceSelector from './components/ServiceSelector';
import ServiceDetailView from './components/ServiceDetailView';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<number>(8);

  const selectedService = services.find(service => service.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        <Header />
        <main className="container mx-auto pt-8 pb-12 px-4 flex-grow">
            <div className="text-center mb-10">
              <p className="text-xl text-gray-500">
                Proposed for
              </p>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mt-2">
                SimSon
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                10/9C, M.L.Gupta Road, Kolkata - 700008
              </p>
            </div>
            
            <ServiceSelector 
              services={services}
              activeId={selectedServiceId}
              onSelect={setSelectedServiceId}
            />
            <div className="mt-10">
              <ServiceDetailView service={selectedService} />
            </div>
        </main>
        <Footer />
    </div>
  );
};

export default App;