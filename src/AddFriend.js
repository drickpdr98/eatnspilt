import { useState } from "react";
import Button from "./Button";

const initialState = {
  name: "",
  image: "",
  id: crypto.randomUUID(),
  balance: 0,
};
export default function AddFriend({ onGetfriends }) {
  const [getFriend, setGetFriend] = useState(initialState);

  const inputHandler = function (inputID, inputValue) {
    setGetFriend((prev) => {
      return {
        ...prev,
        [inputID]: inputValue,
      };
    });
  };

  const getNewFriend = function (event) {
    event.preventDefault();

    if (getFriend.name.trim().length <= 0) return;

    onGetfriends(getFriend);

    setGetFriend(initialState);
  };
  return (
    <form className="form-add-friend" onSubmit={getNewFriend}>
      <label>Friend Name</label>
      <input
        id="name"
        type="text"
        value={getFriend.name}
        onChange={(event) => inputHandler("name", event.target.value)}
      />

      <label>image url</label>
      <input
        id="image"
        type="text"
        value={getFriend.image}
        onChange={(event) =>
          inputHandler(
            "image",
            `https://i.pravatar.cc/48?u${event.target.value}`
          )
        }
      />

      <Button>Add</Button>
    </form>
  );
}
