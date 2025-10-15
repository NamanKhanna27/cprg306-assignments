export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-md p-4 bg-black text-white">
      <p className="text-base font-semibold mb-1">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>
        Category: <span className="capitalize">{category}</span>
      </p>
    </li>
  );
}