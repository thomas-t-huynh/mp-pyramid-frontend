import React, { useState } from "react";
import * as workouts from "../assets/data/workouts.json";
import DayTemplate from "./DayTemplate";

function WeekTemplate() {
    const [template, setTemplate] = useState({
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
            <DayTemplate />
        </div>
    )
}

export default WeekTemplate;
