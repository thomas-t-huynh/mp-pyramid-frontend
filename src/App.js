import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import DayTemplate from "./components/DayTemplate";
import SetTemplate from "./pages/SetTemplate"
import UserTemplate from "./pages/UserTemplate"

import emptyTemplate from "./assets/data/EmptyTemplate"

function App() {
  const [userData, setUserData] = useState();
  const [selectedWorkout, setSelectedWorkout] = useState()
  const [template, setTemplate] = useState(emptyTemplate)
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
        path="/user"
        render={props => <UserProfile {...props} userData={userData} />}
      />
      <Route
        path="/template"
        component={props => <DayTemplate {...props} template={template} setTemplate={setTemplate} selectedWorkout={selectedWorkout}/>}
      />
      <Route
        exact
        path="/"
        component={props => <SetTemplate {...props} template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} />}
      />
      <Route
        path="/user/template"
        component={props => <UserTemplate {...props} template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout}/>}
      />
    </div>
  );
}

export default App;
