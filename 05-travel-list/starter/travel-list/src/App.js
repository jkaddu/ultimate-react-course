import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
// import FlashCards from "./components/FlashCards";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items."
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleClearList={handleClearList}
      />
      {/* <FlashCards /> */}
      <Stats items={items} />
    </div>
  );
}

export default App;
