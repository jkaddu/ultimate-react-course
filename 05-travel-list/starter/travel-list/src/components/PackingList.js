const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
