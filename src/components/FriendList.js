import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend, handleSelect }) {
  console.log(friends);
  return (
    <ul>
      {friends.map((element) => (
        <Friend
          selectedFriend={selectedFriend}
          onClick={handleSelect}
          key={element.id}
          friend={element}
        />
      ))}
    </ul>
  );
}
