export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-md p-4 mb-4 bg-black text-white w-full max-w-md">
      <p className="text-lg font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: <span className="capitalize">{category}</span></p>
    </li>
  );
}