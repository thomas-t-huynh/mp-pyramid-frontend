import React from "react";

import RouteList from "../components/RouteList";
import PyramidGraph from "../components/PyramidGraph";

function UserProfile({ userData }) {
    // auto route search for dev
    // useEffect(getNearbyRoutes, [])
    console.log(userData)
    if (userData) {
      return (
        <div>
          <h1>Welcome {userData.name}</h1>
          <img alt={userData.name} src={userData.avatar} />
          <PyramidGraph {...userData} />
          <RouteList />
        </div>
      );
  } else {
    return <div><h1>Loading</h1></div>
  }
 
}

export default UserProfile;
