"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-md mb-6"
    >
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-800">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., milk, 4 L 🥛"
          className="w-full border rounded p-2 text-black placeholder-gray-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-800">Quantity (1–20)</label>
        <p className="text-sm text-gray-600 mb-2">Current: {quantity}</p>
        <div className="flex flex-row gap-4">
          <button
            type="button"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-50 hover:bg-gray-300"
            disabled={quantity === 1}
          >
            −
          </button>
          <button
            type="button"
            onClick={() => setQuantity(quantity < 20 ? quantity + 1 : 20)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600"
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-800">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded p-2 capitalize text-black"
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Frozen Foods</option>
          <option>Canned Goods</option>
          <option>Household</option>
          <option>Snacks</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Add Item
      </button>
    </form>
  );
}