import React, { useState, useEffect } from "react";

const ItemListingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    size: "",
    condition: "",
    brand: "",
    color: "",
    material: "",
    description: "",
    points: "",
    tags: [],
    images: []
  });
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: "tops", name: "Tops", icon: "👕", subcategories: ["T-Shirts", "Blouses", "Sweaters", "Jackets", "Hoodies"] },
    { id: "bottoms", name: "Bottoms", icon: "👖", subcategories: ["Jeans", "Pants", "Shorts", "Skirts", "Leggings"] },
    { id: "dresses", name: "Dresses", icon: "👗", subcategories: ["Casual", "Formal", "Summer", "Evening", "Maxi"] },
    { id: "accessories", name: "Accessories", icon: "👜", subcategories: ["Bags", "Jewelry", "Scarves", "Belts", "Hats"] },
    { id: "shoes", name: "Shoes", icon: "👠", subcategories: ["Sneakers", "Boots", "Sandals", "Heels", "Flats"] }
  ];

  const conditions = [
    { value: "new", label: "New with Tags", description: "Never worn, original tags attached" },
    { value: "like-new", label: "Like New", description: "Worn once or twice, excellent condition" },
    { value: "excellent", label: "Excellent", description: "Minimal wear, looks great" },
    { value: "good", label: "Good", description: "Some wear but still in good condition" },
    { value: "fair", label: "Fair", description: "Visible wear but functional" }
  ];

  const sizes = {
    tops: ["XS", "S", "M", "L", "XL", "XXL", "One Size"],
    bottoms: ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36", "38"],
    dresses: ["XS", "S", "M", "L", "XL", "XXL", "0", "2", "4", "6", "8", "10", "12", "14"],
    accessories: ["One Size", "S", "M", "L", "XS", "XL"],
    shoes: ["5", "6", "7", "8", "9", "10", "11", "12", "One Size"]
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Handle success
  };

  const steps = [
    { number: 1, title: "Basic Info", icon: "📝" },
    { number: 2, title: "Details", icon: "🔍" },
    { number: 3, title: "Photos", icon: "📸" },
    { number: 4, title: "Pricing", icon: "💰" },
    { number: 5, title: "Review", icon: "✅" }
  ];

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
              Save Draft
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-semibold">P</span>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            List Your <span className="bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Item</span>
          </h2>
          <p className="text-gray-600">Share your sustainable fashion piece with our community</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-110 ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
                        : 'bg-white text-gray-400 border-2 border-gray-200'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg">{step.icon}</span>
                    )}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${
                    currentStep >= step.number ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 rounded-full transition-all duration-300 ${
                    currentStep > step.number ? 'bg-gradient-to-r from-green-500 to-teal-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">📝</span>
                  Basic Information
                </h3>
                
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Item Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Vintage Denim Jacket, Summer Floral Dress"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Category *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => handleInputChange('category', category.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                            formData.category === category.id
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          <div className="text-2xl mb-2">{category.icon}</div>
                          <div className="font-medium">{category.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subcategory */}
                  {formData.category && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subcategory
                      </label>
                      <select
                        value={formData.subcategory}
                        onChange={(e) => handleInputChange('subcategory', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select subcategory</option>
                        {categories.find(cat => cat.id === formData.category)?.subcategories.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Size */}
                  {formData.category && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Size
                      </label>
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                        {sizes[formData.category]?.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleInputChange('size', size)}
                            className={`py-2 px-3 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                              formData.size === size
                                ? 'border-green-500 bg-green-500 text-white'
                                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">🔍</span>
                  Item Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Brand */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                      placeholder="e.g., Levi's, Zara, H&M"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Color */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <input
                      type="text"
                      value={formData.color}
                      onChange={(e) => handleInputChange('color', e.target.value)}
                      placeholder="e.g., Blue, Black, White"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material
                    </label>
                    <input
                      type="text"
                      value={formData.material}
                      onChange={(e) => handleInputChange('material', e.target.value)}
                      placeholder="e.g., Cotton, Denim, Silk"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Condition */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condition *
                    </label>
                    <div className="space-y-2">
                      {conditions.map((condition) => (
                        <label key={condition.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-all duration-300 cursor-pointer">
                          <input
                            type="radio"
                            name="condition"
                            value={condition.value}
                            checked={formData.condition === condition.value}
                            onChange={(e) => handleInputChange('condition', e.target.value)}
                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                          />
                          <div className="ml-3">
                            <div className="font-medium text-gray-700">{condition.label}</div>
                            <div className="text-sm text-gray-500">{condition.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    placeholder="Describe your item in detail. Include any special features, measurements, or notable details..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 text-green-600 hover:text-green-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add tags (press Enter to add)"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag(e.target.value);
                        e.target.value = '';
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Photos */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">📸</span>
                  Upload Photos
                </h3>
                
                <div className="space-y-6">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-all duration-300">
                    <div className="text-4xl mb-4">📷</div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Upload Photos</h4>
                    <p className="text-gray-500 mb-4">Add up to 6 photos of your item. First photo will be the main image.</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Choose Files
                    </label>
                  </div>

                  {/* Uploaded Images */}
                  {uploadedImages.length > 0 && (
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Uploaded Photos ({uploadedImages.length}/6)</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {uploadedImages.map((image, index) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.preview}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image.id)}
                              className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              ×
                            </button>
                            {index === 0 && (
                              <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                                Main
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Pricing */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">💰</span>
                  Set Points Value
                </h3>
                
                <div className="space-y-6">
                  {/* Points Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Points Value *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={formData.points}
                        onChange={(e) => handleInputChange('points', e.target.value)}
                        placeholder="Enter points value"
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Suggested range: 50-500 points based on item condition and brand
                    </p>
                  </div>

                  {/* Points Guide */}
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-medium text-green-800 mb-4">Points Guide</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Condition</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• New with tags: 400-500 points</li>
                          <li>• Like new: 300-400 points</li>
                          <li>• Excellent: 200-300 points</li>
                          <li>• Good: 100-200 points</li>
                          <li>• Fair: 50-100 points</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Brand Value</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Luxury brands: +100 points</li>
                          <li>• Premium brands: +50 points</li>
                          <li>• Fast fashion: Base value</li>
                          <li>• Vintage items: +75 points</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">✅</span>
                  Review & Submit
                </h3>
                
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-4">Item Details</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Title:</span> {formData.title}</div>
                        <div><span className="font-medium">Category:</span> {categories.find(c => c.id === formData.category)?.name}</div>
                        <div><span className="font-medium">Size:</span> {formData.size}</div>
                        <div><span className="font-medium">Condition:</span> {conditions.find(c => c.value === formData.condition)?.label}</div>
                        <div><span className="font-medium">Brand:</span> {formData.brand || 'Not specified'}</div>
                        <div><span className="font-medium">Color:</span> {formData.color || 'Not specified'}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-4">Pricing</h4>
                      <div className="text-2xl font-bold text-green-600">{formData.points} points</div>
                      <p className="text-sm text-gray-500 mt-2">Photos uploaded: {uploadedImages.length}</p>
                    </div>
                  </div>

                  {/* Description Preview */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Description</h4>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{formData.description}</p>
                  </div>

                  {/* Terms */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                      />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">I agree to the terms and conditions</p>
                        <p>I confirm that this item is authentic, accurately described, and I have the right to list it for swap.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Previous
              </button>

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Listing Item...</span>
                    </>
                  ) : (
                    <>
                      <span>List Item</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemListingPage;