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
    return (
        <div>
            <DayTemplate setWeekTemplate={setWeekTemplate} />
        </div>
    )
}

export default WeekTemplate;
