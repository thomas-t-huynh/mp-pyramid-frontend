import React, { useState } from "react";
import axios from "axios";

import RouteCard from "./RouteCard";
import distance from "../utils/distance";

function RouteList() {
  const [address, setAddress] = useState("1814 robin road orange, ca 92868");
  const [error, setError] = useState();
  const [routes, setRoutes] = useState();
  const [location, setLocation] = useState();

  const getNearbyRoutes = e => {
    e.preventDefault();
    const addressQuery = address.split(" ").join("+");
    axios
    .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${addressQuery}&key=AIzaSyCVeIhK0QtZ--Y6VF8XmnSrLfVzPqo4nZs`
    )
    .then(res => {
        const { lat, lng: lon } = res.data.results[0].geometry.location;
        setLocation({ lat, lon });
    // console.log(res.data.results[0]);
        axios
        .get(
            `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=30&minDiff=5.6&maxDiff=5.10&key=200690742-42241ba1e91a3117df55a44758abbb73`
        )
        .then(res => {
            setRoutes(res.data.routes);
            setError(undefined);
        })
        .catch(err => setError("No routes were found"));
    })
    .catch(err => setError("Please enter a valid address"));
  };

  const sortRoute = () => {
    let sortedRoutes = routes;
    const getDistance = ({ latitude, longitude }) => {
      return distance(latitude, longitude, location.lat, location.lon);
    };
    sortedRoutes.sort((a, b) => {
      return getDistance(a) - getDistance(b);
    });
  };

  return (
    <div>
      <form onSubmit={e => getNearbyRoutes(e)}>
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
        {routes && <button onClick={sortRoute}>Sort by closest</button>}
        {routes && routes.map(route => <RouteCard key={route.id} {...route} />)}
      </div>
    </div>
  );
}

export default RouteList;
