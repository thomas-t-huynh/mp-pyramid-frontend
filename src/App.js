import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import WeekTemplate from "./components/WeekTemplate";
import DayTemplate from "./components/DayTemplate";
import ProgramTemplate from "./pages/ProgramTemplate";

function App() {
  const [userData, setUserData] = useState();
  const [selectedWorkout, setSelectedWorkout] = useState()
  console.log(selectedWorkout)
  // Auto login for development purposes
  useEffect(() => {
    axios
      .get(`https://www.mountainproject.com/data/get-user?userId=109791883&key=200690742-42241ba1e91a3117df55a44758abbb73`)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {/* <Route exact path="/" component={WelcomePage} /> */}
      <Route
        path="/login"
        render={props => <Login {...props} setUserData={setUserData} />}
      />
      <Route
        exact
        path="/user/:id"
        render={props => <UserProfile {...props} userData={userData} />}
      />
      <Route
        path="/template"
        component={() => <DayTemplate selectedWorkout={selectedWorkout}/>}
      />
      <Route
        exact
        path="/"
        component={() => <ProgramTemplate setSelectedWorkout={setSelectedWorkout} />}
      />
    </div>
  );
}

export default App;
