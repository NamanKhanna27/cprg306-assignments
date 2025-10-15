"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      // First sort by category, then by name within the same category
      if (a.category === b.category) {
        return a.name.localeCompare(b.name);
      }
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4 text-left">
        <span className="text-gray-400 text-sm">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded text-sm ${sortBy === "name"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
            }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded text-sm ${sortBy === "category"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
            }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
