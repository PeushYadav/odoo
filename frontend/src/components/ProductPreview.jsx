import React from "react";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";

const sampleItems = [
  {
    id: 1,
    name: "Floral Summer Dress",
    image: "https://images.unsplash.com/photo-1618354691413-6f7c3f6243c4?w=400&h=500&fit=crop",
    category: "Women",
    rating: 4.8,
    likes: 24,
    price: "Swap Value: $45"
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1611042553484-2f8a48e5e9d3?w=400&h=500&fit=crop",
    category: "Unisex",
    rating: 4.9,
    likes: 31,
    price: "Swap Value: $65"
  },
  {
    id: 3,
    name: "Cozy Kids Hoodie",
    image: "https://images.unsplash.com/photo-1602810312298-396da1445c3f?w=400&h=500&fit=crop",
    category: "Kids",
    rating: 4.7,
    likes: 18,
    price: "Swap Value: $25"
  },
  {
    id: 4,
    name: "Classic White Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    category: "Unisex",
    rating: 4.6,
    likes: 42,
    price: "Swap Value: $55"
  },
  {
    id: 5,
    name: "Elegant Evening Gown",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    category: "Women",
    rating: 4.9,
    likes: 56,
    price: "Swap Value: $120"
  },
  {
    id: 6,
    name: "Casual Men's Shirt",
    image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=400&h=500&fit=crop",
    category: "Men",
    rating: 4.5,
    likes: 22,
    price: "Swap Value: $35"
  }
];

const ProductPreview = () => (
  <section id="products" className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 py-20 px-6 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-1/4 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-lime-400 rounded-full opacity-25 animate-ping"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Listings</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing pre-loved fashion pieces from our community members
        </p>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sampleItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-80 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="p-3 bg-white rounded-full shadow-lg hover:bg-green-50 transition-colors duration-300">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-lg hover:bg-green-50 transition-colors duration-300">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-3 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
              
              {/* Rating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white bg-opacity-90 rounded-full">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs font-medium text-gray-700">{item.rating}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors duration-300">
                {item.name}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-green-600 font-semibold">{item.price}</span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{item.likes}</span>
                </div>
              </div>
              
              <button className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-2xl hover:bg-green-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          View All Listings
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

export default ProductPreview;
