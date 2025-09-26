import ItemList from "./item-list";

// Page Component
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}