import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/protectedAddFriend">Protected Page Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" component={FriendsList} />
          <PrivateRoute path="/protectedAddFriend" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
