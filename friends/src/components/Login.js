import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [person, setPerson] = useState({ username: "", password: "" });
  console.log(person, "person hook");

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", person)
      .then((res) => {
        console.log(res, "res inside acios with aut login");
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={person.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={person.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
