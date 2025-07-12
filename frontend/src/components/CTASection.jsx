import React from "react";

const CTASection = () => (
  <section className="bg-green-600 py-16 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">
      Ready to make fashion sustainable?
    </h2>
    <p className="mb-6">Start swapping, earning, and saving the planet today!</p>
    <a
      href="/add-item"
      className="inline-block bg-white text-green-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
    >
      List an Item
    </a>
  </section>
);

export default CTASection;
