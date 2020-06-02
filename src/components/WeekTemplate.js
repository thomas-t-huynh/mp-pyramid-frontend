import React, { useState } from "react";
import DayCard from './DayCard'
import WeekTemplateContext from "../contexts";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function WeekTemplate({ selectedWeek }) {
    const [weekTemplate, setWeekTemplate] = useState(selectedWeek ? selectedWeek : undefined)
    console.log(weekTemplate)
    return (
        <div>
            {weekTemplate && days.map((dayName, i) => <DayCard key={i} dayName={dayName} day={weekTemplate[i]}/>)}
        </div>
    )
}

export default WeekTemplate;
