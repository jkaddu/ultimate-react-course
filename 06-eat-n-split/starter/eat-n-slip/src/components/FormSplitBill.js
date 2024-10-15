export default function FormSplitBill({ Button }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with O</h2>
      <label>💲Bill Total</label>
      <input type="text" />
      <label>🧍🏿Your total</label>
      <input type="text" />
      <label>💁🏿‍♂️O's total</label>
      <input type="text" disabled />
      <label>🤷🏿Who's paying the bill?</label>
      <select>
        <option valie="user">You</option>
        <option valie="friend">O</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
