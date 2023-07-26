import ListOfFriends from "./ListOfFriends";
import AddFriend from "./AddFriend";
import Button from "./Button";
import SplitBill from "./SplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [newFriends, setNewFriends] = useState(initialFriends);

  const showAddFriendFormHandler = function () {
    setShowAddFriend((prev) => !prev);
  };

  const getNewFriendHandler = function (friend) {
    setNewFriends((prevFriends) => {
      return [...prevFriends, friend];
    });
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends friends={newFriends} />
        {showAddFriend && <AddFriend onGetfriends={getNewFriendHandler} />}
        <Button onClick={showAddFriendFormHandler}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
        <SplitBill />
      </div>
    </div>
  );
}

export default App;
