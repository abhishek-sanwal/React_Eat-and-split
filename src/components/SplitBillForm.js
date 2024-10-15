import { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ onAddBalance, selectedFriend }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("You");

  function handleSplitFormSubmit(event) {
    event.preventDefault();

    // Guard Condition
    if (!bill || !expense) return;

    onAddBalance(payer === "You" ? friendExpense : -expense);

    setBill(0);
    setExpense(0);
    setPayer("You");
  }

  function handleExpense(event) {
    if (Number(event.target.value) > bill) {
      return;
    }
    setExpense(() => Number(event.target.value));
  }

  // It should be a derived state
  const friendExpense = bill && expense ? bill - expense : "";

  return (
    <form
      action="#"
      onSubmit={(event) => handleSplitFormSubmit(event)}
      className="form-split-bill"
    >
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) =>
          event.target.value >= expense
            ? setBill(Number(event.target.value))
            : null
        }
      />

      <label>🧍Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(event) => handleExpense(event)}
      />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>👭 Who is paying the bill?</label>
      <select value={payer} onChange={(event) => setPayer(event.target.value)}>
        <option value="You"> You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
