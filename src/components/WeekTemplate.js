import React, { useState } from "react";
import * as workouts from "../assets/data/workouts.json";
import DayTemplate from "./DayTemplate";
import DayCard from './DayCard'
import WeekTemplateContext from "../contexts";

function WeekTemplate() {
    const [weekTemplate, setWeekTemplate] = useState({
        sun: { name: "Sunday", sessions: [] },
        mon: { name: "Monday", sessions: []},
        tue: { name: "Tuesday", sessions: [] },
        wed: { name: "Wednesday", sessions: [] },
        thu: { name: "Thursday", sessions: [] },
        fri: { name: "Friday", sessions: [] },
        sat: { name: "Saturday", sessions: [] }
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
