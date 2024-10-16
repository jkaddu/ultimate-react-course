import { useState } from "react";

export default function FormSplitBill({
  Button,
  selectedFriend,
  handleSplitBill,
}) {
  const [bill, setBill] = useState("");
  const [userPaid, setUserPaid] = useState("");
  const friendPaid = bill ? bill - userPaid : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !userPaid) return;

    handleSplitBill(whoIsPaying === "user" ? friendPaid : -userPaid);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💲Bill Total</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍🏿Your total</label>
      <input
        type="text"
        value={userPaid}
        onChange={(e) =>
          setUserPaid(
            Number(e.target.value) > bill ? userPaid : Number(e.target.value)
          )
        }
      />
      <label>💁🏿‍♂️{selectedFriend.name}'s total</label>
      <input type="text" value={friendPaid} disabled />
      <label>🤷🏿Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
