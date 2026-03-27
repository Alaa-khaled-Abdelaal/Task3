import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌟</span>
          <h1 className="text-2xl font-bold">Echo Club</h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-amber-600">Home</a>
          <a href="#" className="hover:text-amber-600">Events</a>
          <a href="#" className="hover:text-amber-600">Community</a>
          <a href="#" className="hover:text-amber-600">About</a>
        </div>

        <button className="bg-black text-white px-6 py-2.5 rounded hover:bg-amber-400 hover:text-black transition-all">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;