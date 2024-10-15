import { useState } from "react";

function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guard clause, if nothing is typed in input form can't be submitted
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      {/* Creates an array of 20 elements aka numbers, "_" is the current value and "i" is the index */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
