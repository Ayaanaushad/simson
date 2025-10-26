import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto flex items-center h-16 px-4">
        <img 
          src="https://static.wixstatic.com/media/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png/v1/fill/w_186,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png" 
          alt="AD-IT Yadi Logo" 
          className="h-9 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;