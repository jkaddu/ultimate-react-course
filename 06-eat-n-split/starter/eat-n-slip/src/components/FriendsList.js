import Friend from "./Friend";

export default function FriendsList({ Button, friends, handleSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          Button={Button}
          handleSelection={handleSelection}
        />
      ))}
    </ul>
  );
}
