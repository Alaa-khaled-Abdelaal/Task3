import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">Welcome to Echo Club</h1>
        <p className="text-xl text-gray-600 mb-10">
          Where ideas echo louder. Connect. Create. Celebrate.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-black text-white px-8 py-4 rounded font-medium hover:bg-amber-400 hover:text-black transition-all">
            Become a Member
          </button>
          <button className="border border-gray-400 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-all">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;