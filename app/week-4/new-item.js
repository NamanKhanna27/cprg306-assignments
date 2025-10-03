"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg w-64">
      <p className="text-lg font-semibold text-black">Quantity: {quantity}</p>

      <div className="flex flex-row gap-4">
        <button onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 hover:bg-red-600"> - </button>

        <button onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"> + </button>
      </div>
    </div>
  );
}