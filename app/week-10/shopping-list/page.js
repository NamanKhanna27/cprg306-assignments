"use client";
import { useUserAuth } from "../../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    const loadedItems = await getItems(user.uid);
    setItems(loadedItems);
  }

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    newItem.id = id;
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

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Access Denied</h1>
        <p className="mb-4 text-gray-700">
          You must be logged in to view the shopping list.
        </p>
        <Link
          href="/week-10"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Login Page
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List + Meal Ideas
      </h1>
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