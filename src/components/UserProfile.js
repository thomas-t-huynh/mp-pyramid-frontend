import React, { useState, useEffect } from "react";
import axios from "axios";

import RouteCard from "./RouteCard";

function UserProfile({ userData }) {
  // dummy profile for dev
  // const { name, avatar } = {name: 'thomas', avatar: 'https://storage.googleapis.com/kaggle-avatars/images/2678791-kg.jpg'};
  // const [ userData, setUserData ] = useState()
  const [address, setAddress] = useState("");
  const [error, setError] = useState();
  const [routes, setRoutes] = useState();

  // test useEffect, delete during prod
  // useEffect(() => {
  //     axios
  //         .get(`https://www.mountainproject.com/data/get-ticks?userId=109791883&key=200690742-42241ba1e91a3117df55a44758abbb73`)
  //         .then((res) => {
  //             setUserData(res.data)
  //         })
  // }, [])

  const getNearbyRoutes = e => {
    // example address query string 1600+Amphitheatre+Parkway,+Mountain+View,+CA
    e.preventDefault();
    const addressQuery = address.split(" ").join("+");

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addressQuery}&key=AIzaSyCVeIhK0QtZ--Y6VF8XmnSrLfVzPqo4nZs`
      )
      .then(res => {
        const coordinates = res.data.results[0].geometry.location;
        console.log(res.data.results[0]);
        axios
          .get(
            `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${
              coordinates.lat
            }&lon=${
              coordinates.lng
            }&maxDistance=30&key=200690742-42241ba1e91a3117df55a44758abbb73`
          )
          .then(res => {
            console.log(res.data);
            setRoutes(res.data.routes);
            setError(undefined);
          })
          .catch(err => setError("No routes were found"));
      })
      .catch(err => setError("Please enter a valid address"));
  };

  return (
    <div>
      <form onSubmit={e => getNearbyRoutes(e)}>
        <h1>Welcome {userData.name}</h1>
        <img src={userData.avatar} />
        <h2>Input an address to find nearby routes!</h2>
        {error && <h3>{error}</h3>}
        <input
          type="text"
          placeholder="Enter an address"
          onChange={e => setAddress(e.target.value)}
          value={address}
        />
        <button>Go!</button>
      </form>
      <div>
        {routes && routes.map(route => <RouteCard key={route.id} {...route} />)}
      </div>
    </div>
  );
}

export default UserProfile;
