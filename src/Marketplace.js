import React from "react";
import { Search } from "lucide-react";

const products = [
  { id: 1, name: "React Admin Dashboard", price: "$25", image: "https://via.placeholder.com/300" },
  { id: 2, name: "E-commerce Template", price: "$30", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Portfolio Website", price: "$15", image: "https://via.placeholder.com/300" }
];

export default function Marketplace() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Code Marketplace</h1>
        <div className="flex items-center border rounded-lg px-3 py-2">
          <Search className="w-5 h-5 mr-2" />
          <input placeholder="Search products..." className="border-none outline-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
