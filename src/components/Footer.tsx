import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl">🌟</span>
          <span className="font-semibold">Echo Club</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-black">Events</a>
          <a href="#" className="hover:text-black">Community Guidelines</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">Discord</a>
        </div>
        <p className="text-xs text-gray-500">© 2026 Echo Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;