
import React from "react";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import FAQ from "./faq";


const LandingPage = () => {
  return (
    <div className="text-gray-800 dark:text-white">
      <HeroSection />
      <TestimonialSection />
      <FAQ />
    </div>
  );
};

export default LandingPage;
