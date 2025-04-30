import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Argon Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
