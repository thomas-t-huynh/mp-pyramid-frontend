import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

import "./App.css";

function App() {
  const [userData, setUserData] = useState();

  // Auto login for development purposes
  useEffect(() => {
    axios
      .get(`https://www.mountainproject.com/data/get-user?userId=109791883&key=200690742-42241ba1e91a3117df55a44758abbb73`)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => console.log(err))
  })
  
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
