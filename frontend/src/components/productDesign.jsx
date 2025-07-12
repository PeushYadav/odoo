import React, { useState, useEffect } from "react";

const ProductListings = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🌟' },
    { id: 'tops', name: 'Tops', icon: '👕' },
    { id: 'bottoms', name: 'Bottoms', icon: '👖' },
    { id: 'dresses', name: 'Dresses', icon: '👗' },
    { id: 'accessories', name: 'Accessories', icon: '👜' }
  ];

  const products = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      owner: "Sarah",
      points: 180,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "tops",
      status: "available"
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      owner: "Emma",
      points: 220,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "dresses",
      status: "available"
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      owner: "Priya",
      points: 150,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "accessories",
      status: "available"
    },
    {
      id: 4,
      name: "High-Waist Jeans",
      owner: "Maria",
      points: 200,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "bottoms",
      status: "available"
    },
    {
      id: 5,
      name: "Silk Blouse",
      owner: "Anna",
      points: 160,
      image: "https://images.unsplash.com/photo-1564257631407-3deb5f3d8060?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "tops",
      status: "available"
    },
    {
      id: 6,
      name: "Wool Scarf",
      owner: "Lisa",
      points: 90,
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "accessories",
      status: "available"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 left-20 w-28 h-28 bg-teal-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-emerald-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className={`relative z-10 p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-teal-800 bg-clip-text text-transparent">
              ReWear
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-semibold">P</span>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Discover <span className="bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Sustainable Fashion</span>
          </h2>
          <p className="text-gray-600">Find your next favorite piece from our community</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="lg:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-full font-medium shadow-lg transform hover:scale-110 transition-transform duration-200">
                      View Details
                    </button>
                    <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transform hover:scale-110 transition-transform duration-200">
                      Request Swap
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{product.owner.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{product.owner}</p>
                    <p className="text-sm text-gray-500">Verified Member</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="font-bold text-green-600">{product.points} pts</span>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Swap
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-green-600 border-2 border-green-500 px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-green-50">
            Load More Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListings;