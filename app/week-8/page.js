"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function cleanName(name) {
    const beforeComma = name.split(",")[0].trim();
    const withoutEmoji = beforeComma.replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,
      ""
    );
    return withoutEmoji.toLowerCase();
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanName(item.name));
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List + Meal Ideas</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
