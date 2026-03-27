import React from 'react';

interface CardProps {
  emoji: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ emoji, title, description, buttonText }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="text-5xl mb-6">{emoji}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 flex-1">{description}</p>
      <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-amber-400 hover:text-black transition-all w-fit">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;