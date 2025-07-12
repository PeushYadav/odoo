
import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import ProductPreview from "./ProductPreview";
import CTASection from "./CTASection";

const LandingPage = () => {
  return (
    <div className="text-gray-800 dark:text-white">
      <HeroSection />
      <CategorySection />
      <ProductPreview />
      <CTASection />
    </div>
  );
};

export default LandingPage;
