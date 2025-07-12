import React from "react";
import { Shirt, Users, Baby, Sparkles, ArrowRight } from "lucide-react";

const categories = [
  { 
    name: "Men", 
    icon: <Shirt className="w-8 h-8" />, 
    description: "Men's fashion & accessories",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Women", 
    icon: <Sparkles className="w-8 h-8" />, 
    description: "Women's clothing & style",
    color: "from-pink-500 to-rose-500"
  },
  { 
    name: "Kids", 
    icon: <Baby className="w-8 h-8" />, 
    description: "Children's clothing",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    name: "Unisex", 
    icon: <Users className="w-8 h-8" />, 
    description: "Gender-neutral fashion",
    color: "from-purple-500 to-indigo-500"
  },
];

const CategorySection = () => (
  <section id="categories" className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 py-20 px-6 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-lime-400 rounded-full opacity-25 animate-ping"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover sustainable fashion across all categories and find your perfect style match
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <div className="relative p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  {cat.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                {cat.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {cat.description}
              </p>
              
              <div className="flex items-center justify-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                <span className="text-sm font-medium mr-2">Explore</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
