import Friends from "./Friends";

export default function ListOfFriends({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
