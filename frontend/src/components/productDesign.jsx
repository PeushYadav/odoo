import React from "react";

const ProductDetailPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">ReWear</h1>
        <button className="text-sm border border-teal-600 px-4 py-1 rounded hover:bg-teal-50">
          Dashboard
        </button>
      </header>

      {/* Product Section */}
      <div className="bg-white rounded-lg shadow-md p-6 md:flex gap-8">
        {/* Image Gallery */}
        <div className="flex-1 mb-4 md:mb-0 space-y-4">
          <img
            src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
            alt="Main Dress"
            className="rounded-lg w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg"
              alt="alt 1"
              className="rounded w-full h-24 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1030895/pexels-photo-1030895.jpeg"
              alt="alt 2"
              className="rounded w-full h-24 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg"
              alt="alt 3"
              className="rounded w-full h-24 object-cover"
            />
          </div>
        </div>

        {/* Item Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Beige Summer Linen Dress</h2>
          <p className="text-gray-600 mb-2">Category: Women’s Wear</p>
          <p className="text-sm text-gray-500 mb-4">
            Breathable linen dress perfect for summer outings. Barely worn, in great condition.
            Eco-friendly and stylish.
          </p>

          <div className="mb-3">
            <p><span className="font-semibold">Size:</span> M</p>
            <p><span className="font-semibold">Condition:</span> Excellent</p>
            <p><span className="font-semibold">Tags:</span> linen, eco-friendly, beige, casual</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700">
              Swap Request
            </button>
            <button className="border border-teal-600 text-teal-600 px-5 py-2 rounded hover:bg-teal-50">
              Redeem via Points
            </button>
          </div>

          <p className="mt-4 text-green-600 font-semibold">Available for swap</p>

          {/* Uploader Info */}
          <div className="mt-6 border-t pt-4">
            <p className="font-semibold">Uploaded by: Priya W.</p>
            <p className="text-sm text-gray-500">Member since Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;