import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [friends, setFriends] = useState([]);
  const [friend, addFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    addFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend({ id: Date.now(), name: "", age: "", email: "" });
    axiosWithAuth()
      .post("/api/friends", friend)
      .then((res) => {
        console.log(res, "res inside submit a friend");
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err, "error in submit");
      });
  };
  return (
    <div className="addFriend">
      <h1>ADD A FRIEND </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Add Name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Add Age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Add Email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>ADD FRIEND</button>
      </form>
    </div>
  );
};

export default AddFriend;
