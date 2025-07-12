import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden m-4 transform transition-all duration-500 hover:-translate-y-2 group">
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
            Sustainable Card
          </h2>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          This is a beautifully designed card component that matches our sustainable fashion theme with modern styling and smooth animations.
        </p>
        
        <button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Explore More
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Card;