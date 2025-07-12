import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);
    // Initialize quantities
    setQuantities({
      1: 1,
      2: 1,
      3: 1
    });
  }, []);

  const cartItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      owner: "Sarah",
      points: 180,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      size: "M",
      condition: "Excellent",
      status: "Available"
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      owner: "Emma",
      points: 220,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      size: "S",
      condition: "Like New",
      status: "Available"
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      owner: "Priya",
      points: 150,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      size: "One Size",
      condition: "Good",
      status: "Available"
    }
  ];

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({
        ...prev,
        [itemId]: newQuantity
      }));
    }
  };

  const handleItemSelect = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    }
  };

  const removeItem = (itemId) => {
    // In a real app, this would remove from cart
    console.log(`Removing item ${itemId}`);
  };

  const totalPoints = cartItems
    .filter(item => selectedItems.has(item.id))
    .reduce((sum, item) => sum + (item.points * quantities[item.id]), 0);

  const selectedCount = selectedItems.size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
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
            <button className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
              Continue Shopping
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-semibold">P</span>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Your <span className="bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Swap Cart</span>
          </h2>
          <p className="text-gray-600">Review your selected items and proceed with your sustainable fashion swaps</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Header */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedItems.size === cartItems.length}
                      onChange={handleSelectAll}
                      className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 transition-all duration-300"
                    />
                    <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                      Select All ({cartItems.length} items)
                    </span>
                  </label>
                </div>
                <div className="text-sm text-gray-500">
                  {selectedCount} of {cartItems.length} selected
                </div>
              </div>
            </div>

            {/* Cart Items List */}
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Checkbox */}
                    <div className="pt-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.id)}
                        onChange={() => handleItemSelect(item.id)}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 transition-all duration-300"
                      />
                    </div>

                    {/* Item Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span>Owner: {item.owner}</span>
                            <span>Size: {item.size}</span>
                            <span>Condition: {item.condition}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              {item.status}
                            </span>
                            <div className="flex items-center space-x-1 text-yellow-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-sm">4.8</span>
                            </div>
                          </div>
                        </div>

                        {/* Points and Actions */}
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-3">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            <span className="font-bold text-green-600">{item.points} pts</span>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2 mb-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                              className="w-8 h-8 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="w-8 text-center font-medium text-gray-700">{quantities[item.id]}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                              className="w-8 h-8 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-300 flex items-center space-x-1 group"
                          >
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>
              
              {/* Summary Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Items ({selectedCount})</span>
                  <span className="font-medium text-gray-800">{selectedCount} items</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Points</span>
                  <span className="font-bold text-green-600 text-lg">{totalPoints} pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium text-gray-800">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-green-600">{totalPoints} pts</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  disabled={selectedCount === 0}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  <span>Proceed to Swap ({selectedCount})</span>
                </button>
                
                <button className="w-full border-2 border-green-500 text-green-600 py-3 px-6 rounded-xl font-medium hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                  Save for Later
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Secure Swap</h4>
                    <p className="text-sm text-green-700">
                      All swaps are protected by our secure verification system and quality guarantee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                {[
                  { label: 'Browse More Items', icon: '🔍', color: 'green' },
                  { label: 'View Swap History', icon: '📋', color: 'teal' },
                  { label: 'Points Balance', icon: '⭐', color: 'emerald' }
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span className="text-xl">{action.icon}</span>
                    <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                      {action.label}
                    </span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-green-500 ml-auto transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;