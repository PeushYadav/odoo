import React from "react";

const sampleItems = [
  {
    id: 1,
    name: "Floral Summer Dress",
    image:
      "https://images.unsplash.com/photo-1618354691413-6f7c3f6243c4?w=400&h=500&fit=crop",
    category: "Women",
  },
  {
    id: 2,
    name: "Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1611042553484-2f8a48e5e9d3?w=400&h=500&fit=crop",
    category: "Unisex",
  },
  {
    id: 3,
    name: "Kids Hoodie",
    image:
      "https://images.unsplash.com/photo-1602810312298-396da1445c3f?w=400&h=500&fit=crop",
    category: "Kids",
  },
];

const ProductPreview = () => (
  <section id="products" className="py-16 bg-gray-50 dark:bg-gray-950">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Featured Listings</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {sampleItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-60 w-full object-cover"
            />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <button className="mt-3 px-4 py-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700">
                View Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductPreview;
