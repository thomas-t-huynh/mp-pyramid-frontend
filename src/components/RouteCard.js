import React from 'react';

function RouteCard({ name, type, rating, longitude, latitude,  url, imgSmall}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={imgSmall} />
            <ul>
                <li>Type: {type}</li>
                <li>Rating: {rating}</li>
                <li>Lng: {longitude}, Lat: {latitude}</li>
                <li><a href={url}>Mountain Project Route Link</a></li>
            </ul>
        </div>
    )
}

export default RouteCard;