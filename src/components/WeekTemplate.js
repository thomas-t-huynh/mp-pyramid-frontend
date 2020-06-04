import React, { useState } from "react"
import DayCard from './DayCard'
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function WeekTemplate({ selectedWeek }) {
    const [weekTemplate, setWeekTemplate] = useState(selectedWeek ? selectedWeek : undefined)
    console.log(weekTemplate.slice(0,7))
    return (
        <Container>
            {weekTemplate && days.map((dayName, i) => <DayCard key={i} dayName={dayName} day={weekTemplate[i]}/>)}
        </Container>
    )
}

export default WeekTemplate;
