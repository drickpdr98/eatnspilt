import Button from "./Button";
export default function Friends({ friend, onSelection, selectedFriend }) {
  // const isSelected = selectedFriend.id === friend.id;
  // className={isSelected ? "selected" : ""}

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p> {friend.name} and you are even</p>}

      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}
