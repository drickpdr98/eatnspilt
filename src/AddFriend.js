import Button from "./Button";

export default function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" />

      <label>image url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
