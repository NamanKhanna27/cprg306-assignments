// Item Component

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 m-2 rounded-lg bg-slate-900 text-slate-100 shadow-md hover:shadow-xl transition">
      <p className="text-lg font-bold text-indigo-400">{name}</p>
      <p className="text-sm text-slate-300">Quantity: {quantity}</p>
      <p className="text-sm italic text-slate-400">Category: {category}</p>
    </li>
  );
}