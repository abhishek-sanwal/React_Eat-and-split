import Button from "./Button";

export default function SplitBillForm({ selectedFriend }) {
  return (
    <form action="#" className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🧍Your expense</label>
      <input type="text" />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>👭 Who is paying the bill?</label>
      <select>
        <option value="You"> You</option>
        <option value={selectedFriend.name}>X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
