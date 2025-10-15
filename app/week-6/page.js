import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-left">Shopping List</h1>
      <ItemList />
    </main>
  );
}