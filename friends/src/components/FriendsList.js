//component will render grom GET and show friends list from server, work in progress
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = (props) => {
  //can also use props.friends and props.setFriends and pass use State in the App component
  //with useState hook, longer way, but it is also doable
  const [friends, setFriends] = useState([]);
  const [loading, isLoading] = useState(true);
  //added loading for first 2 seconds and after 2 seconds the data renders
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
      axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
          console.log(res, "res axios in friendsList");
          setFriends(res.data);
        })
        .catch((err) => {
          console.log(err, "error in Friendslist AXIOS");
        });
    }, 2000);
  }, []);

  // return list of friends from friends api
  return (
    <div className="friends">
      {loading ? (
        <h1>LOADING....</h1>
      ) : (
        friends.map((item) => (
          <div className="friend" key={item.id}>
            <h1>Name: {item.name}</h1>
            <h2>Age: {item.age}</h2>
            <h3>Email: {item.email}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default FriendsList;
