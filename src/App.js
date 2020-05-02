import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

import "./App.css";

function App() {
  const [userData, setUserData] = useState();

  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/login"
        render={props => <Login {...props} setUserData={setUserData} />}
      />
      <Route
        path="/user/:id"
        render={props => <UserProfile {...props} userData={userData} />}
      />
    </div>
  );
}

export default App;
