"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="p-6 bg-gray-900 text-white rounded-lg shadow-md border border-gray-700">
      <h2 className="text-2xl font-bold mb-3 text-green-400">
        {ingredient
          ? `Meal Ideas for "${ingredient}"`
          : "Select an item to see meal ideas"}
      </h2>

      {!ingredient && (
        <p className="text-gray-400 text-sm">
          Click an item from your list to explore meal suggestions.
        </p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-400 text-sm">No meal ideas found.</p>
      )}

      {ingredient && meals.length > 0 && (
        <div className="divide-y divide-gray-700">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="py-2 hover:bg-gray-800 transition-colors rounded px-2"
            >
              <p className="font-semibold text-base text-green-300">
                {meal.strMeal}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
