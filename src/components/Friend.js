import Button from "./Button";

export default function Friend({ friend, selectedFriend, onClick }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} ${" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes you {Math.abs(friend.balance)} ${" "}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button handleClick={() => onClick(friend)}>
        {selectedFriend === friend ? "Close" : "Select"}
      </Button>
    </li>
  );
}
