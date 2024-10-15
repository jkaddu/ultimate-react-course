import Friend from "./Friend";

export default function FriendsList({ Button, friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} Button={Button} />
      ))}
    </ul>
  );
}
