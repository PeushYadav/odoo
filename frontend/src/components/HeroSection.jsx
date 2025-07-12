import React from "react";
import { ArrowRight, UserPlus } from "lucide-react";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-lime-200 to-green-300 py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        ReWear – Community Clothing Exchange
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Give your clothes a second life. Swap or redeem unused fashion pieces and join the sustainable style revolution!
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="#categories"
          className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
        >
          Start Swapping <ArrowRight className="ml-2" size={18} />
        </a>
        <a
          href="/signup"
          className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-100 transition"
        >
          Join Now <UserPlus className="ml-2" size={18} />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
