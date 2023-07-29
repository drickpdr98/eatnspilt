import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = function (event) {
    event.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    // setBill("");
    // setPaidByUser("");
    // setWhoIsPaying("user");
  };
  return (
    <form className="form-split-bill " onSubmit={handleSubmit}>
      <h2>{`Split Bill with ${selectedFriend.name}`} </h2>

      <label> Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(+event.target.value)}
      />

      <label> Your Expense </label>
      <input
        type="text"
        value={paidByUser}
        onChange={(event) =>
          setPaidByUser(
            +event.target.value > bill ? paidByFriend : +event.target.value
          )
        }
      />

      <label> {`${selectedFriend.name} Expense`}</label>
      <input type="text" disabled value={paidByFriend} />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
