import React from "react"

function DayCard({ day }) {
    const sortSessions = day.sessions && day.sessions.sort((a, b) => a.intTime - b.intTime)

    return (
        <div>
            <h2>{day.name}</h2>
            {sortSessions && sortSessions.map(session => {

                return (<h3>{session.time}</h3>)
            })}
        </div>
    )
}

export default DayCard