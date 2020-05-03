import React from 'react';

function RouteCard({ name, type, rating, longitude, latitude,  url, imgSmall, location }) {
    return (
        <div>
            <h3>{name}</h3>
            {imgSmall ? <img alt={name} src={imgSmall} /> : <img alt={name} src={require("../assets/images/filler-image.jpg")} />}
            <ul>
                <li>Type: {type}</li>
                <li>Rating: {rating}</li>
                {/* <li>Lng: {longitude}, Lat: {latitude}</li> */}
                <li>Location: {location.join(" > ")}</li>
                <li><a href={url}>Mountain Project Route Link</a></li>
            </ul>
        </div>
    )
}

export default RouteCard;