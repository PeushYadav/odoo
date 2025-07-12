import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Leaf } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "ReWear has completely transformed how I think about fashion. I've discovered amazing pieces while giving my wardrobe a sustainable makeover. The community is incredible!",
    rating: 5,
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Environmental Advocate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As someone passionate about reducing fashion waste, ReWear is exactly what I've been looking for. The quality of items and the seamless swapping experience is outstanding.",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Style Blogger",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "I've been using ReWear for 6 months now and my closet has never been more diverse. The platform makes sustainable fashion accessible and fun. Highly recommend!",
    rating: 5,
    location: "Miami, FL"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Tech Professional",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The app is incredibly intuitive and the verification process gives me confidence in every swap. It's refreshing to see technology used for environmental good.",
    rating: 5,
    location: "Seattle, WA"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "As a student on a budget, ReWear has been a game-changer. I can refresh my wardrobe without breaking the bank or harming the planet. Love this community!",
    rating: 5,
    location: "Austin, TX"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 py-20 px-6 overflow-hidden">
      {/* Jungle-themed decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-lime-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-800">What Our Community Says</h2>
            <Leaf className="w-8 h-8 text-green-600 ml-3 transform rotate-180" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of fashion-forward individuals who are making sustainable choices while looking amazing
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar Section */}
              <div className="relative flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-100 shadow-lg transform transition-all duration-300 hover:scale-110 hover:border-green-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            >
              <ChevronLeft className="w-6 h-6 text-green-600 group-hover:text-green-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentIndex
                      ? "bg-green-600 scale-125"
                      : "bg-green-300 hover:bg-green-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            >
              <ChevronRight className="w-6 h-6 text-green-600 group-hover:text-green-700" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Successful Swaps</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 