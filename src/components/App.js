import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FriendList from "./FriendList";
import SplitBillForm from "./SplitBillForm";
import { useState } from "react";

// Sample Demo data
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

export default function App() {
  // State for opening and closing add friend option
  // (Default don't display)
  const [isOpen, setIsOpen] = useState(false);

  // State for adding friend into friendList after adding friend
  const [friends, setFriends] = useState(initialFriends);

  // State for showing current selected friend
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Set current selected friend if already same de-select
  function handleSelect(friend) {
    setSelectedFriend(selectedFriend !== friend ? friend : null);
    setIsOpen(false);
  }

  function addBalance(expense) {
    // Update Item
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + expense }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  // Set newFriend in our friendList and update FriendList
  function addNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  // Set and display add friend from
  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          selectedFriend={selectedFriend}
          friends={friends}
          handleSelect={handleSelect}
        />
        {isOpen && <AddFriendForm onAddFriend={addNewFriend} />}
        <Button handleClick={handleClick}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          onAddBalance={addBalance}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}
