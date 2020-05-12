import React, { useState } from "react";
import * as workouts from "../assets/data/workouts.json";
import DayTemplate from "./DayTemplate";
import DayCard from './DayCard'

function WeekTemplate() {
    const [weekTemplate, setWeekTemplate] = useState({
        sun: { name: "Sunday", sessions: [] },
        mon: { name: "Monday"},
        tue: { name: "Tuesday" },
        wed: { name: "Wednesday" },
        thu: { name: "Thursday" },
        fri: { name: "Friday" },
        sat: { name: "Saturday" }
    })
    console.log(weekTemplate)
    return (
        <div>
            {Object.keys(weekTemplate).map((day, i) => <DayCard key={i} day={weekTemplate[day]}/>)}
            <DayTemplate weekTemplate={weekTemplate} setWeekTemplate={setWeekTemplate} />
        </div>
    )
}

export default WeekTemplate;
