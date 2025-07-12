
import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import ProductPreview from "./ProductPreview";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";

const LandingPage = () => {
  return (
    <div className="text-gray-800 dark:text-white">
      <HeroSection />
      <CategorySection />
      <ProductPreview />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
