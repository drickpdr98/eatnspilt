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
  const [selectedFriend, setSelectedFriend] = useState(null);

  const showAddFriendFormHandler = function () {
    setShowAddFriend((prev) => !prev);
  };

  const getNewFriendHandler = function (friend) {
    setNewFriends((prevFriends) => {
      return [...prevFriends, friend];
    });

    setShowAddFriend(false);
  };

  const handleSelection = function (friend) {
    setSelectedFriend(friend);
    setShowAddFriend(false);
  };

  const handleSplitBill = function (value) {
    setNewFriends((friends) =>
      friends.map((friend) =>
        selectedFriend.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends
          friends={newFriends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <AddFriend onGetfriends={getNewFriendHandler} />}

        <Button onClick={showAddFriendFormHandler}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

export default App;
