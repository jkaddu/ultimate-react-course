import Friend from "./Friend";

export default function FriendsList({
  Button,
  friends,
  selectedFriend,
  handleSelection,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          Button={Button}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
      ))}
    </ul>
  );
}
