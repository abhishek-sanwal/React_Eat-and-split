import { useState } from "react";
import Button from "./Button";

const defaultUrl = "https://i.pravatar.cc/48";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(defaultUrl);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
    setImage(defaultUrl);
    setName("");
  }
  return (
    <form
      action="#"
      onSubmit={(event) => handleSubmit(event)}
      className="form-add-friend"
    >
      <label>🧍Friend Name</label>
      <input
        onChange={(event) => setName(() => event.target.value)}
        value={name}
        type="text"
      />
      <label>🎆 Image URL</label>
      <input
        onChange={(event) => setImage(() => event.target.value)}
        value={image}
        type="url"
      />
      <Button>Add</Button>
    </form>
  );
}
