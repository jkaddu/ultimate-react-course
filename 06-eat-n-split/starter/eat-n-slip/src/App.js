import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import { useState } from "react";

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList Button={Button} />
        {showAddFriend && <FormAddFriend Button={Button} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill Button={Button} />
    </div>
  );
}
