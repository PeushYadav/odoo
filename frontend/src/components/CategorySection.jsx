import React from "react";
import { Shirt } from "lucide-react";

const categories = [
  { name: "Men", icon: <Shirt /> },
  { name: "Women", icon: <Shirt /> },
  { name: "Kids", icon: <Shirt /> },
  { name: "Unisex", icon: <Shirt /> },
];

const CategorySection = () => (
  <section id="categories" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-md transition"
          >
            <div className="text-green-600 mb-2">{cat.icon}</div>
            <span className="font-semibold">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
