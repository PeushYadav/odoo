import React from 'react';

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden m-4">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Simple Card</h2>
        <p className="text-gray-600 mb-4">
          This is a simple card component with some basic styling.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Card;