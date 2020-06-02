import React, { useContext } from "react";

function DayCard({ day, dayName }) {

    const sortSessions = day.sessions && day.sessions.sort((a, b) => a.intTime - b.intTime)

    return (
        <div>
            <h2>{dayName}</h2>
            <h3>{day.name}</h3>
            {sortSessions && sortSessions.map(session => {
                return (<h3>{session.time}</h3>)
            })}
        </div>
    )
}

export default DayCard