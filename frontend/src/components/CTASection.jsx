import React from "react";
import { ArrowRight, Leaf, Sparkles, Users } from "lucide-react";

const CTASection = () => (
  <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20 px-6 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-white bg-opacity-15 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
    </div>

    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <div className="flex items-center justify-center mb-6">
        <Leaf className="w-8 h-8 text-white mr-3" />
        <Sparkles className="w-8 h-8 text-white" />
        <Users className="w-8 h-8 text-white ml-3" />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Ready to make fashion sustainable?
      </h2>
      
      <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
        Join thousands of fashion-forward individuals who are making sustainable choices while looking amazing. Start swapping, earning, and saving the planet today!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/add-item"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          List an Item
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        
        <a
          href="/signup"
          className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          Join Community
          <Users className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">10K+</div>
          <div className="text-green-100">Active Members</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">50K+</div>
          <div className="text-green-100">Items Swapped</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">95%</div>
          <div className="text-green-100">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
