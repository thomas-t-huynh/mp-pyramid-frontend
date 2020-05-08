import React, { useState } from "react";
import * as workouts from "../assets/data/workouts.json";
import DayTemplate from "./DayTemplate";

function WeekTemplate() {
    const [weekTemplate, setWeekTemplate] = useState({
        sun: {},
        mon: {},
        tue: {},
        wed: {},
        thu: {},
        fri: {},
        sat: {}
    })
    console.log(weekTemplate)
    return (
        <div>
            <DayTemplate weekTemplate={weekTemplate} setWeekTemplate={setWeekTemplate} />
        </div>
    )
}

export default WeekTemplate;
