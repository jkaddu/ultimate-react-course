function PackingList({ items, handleDelete, handleToggle }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDelete, handleToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default PackingList;
