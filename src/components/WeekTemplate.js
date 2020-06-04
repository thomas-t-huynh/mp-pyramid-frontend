import React, { useState, useEffect } from "react"
import DayCard from './DayCard'
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function WeekTemplate({ selectedWeek, template }) {
    const { start, end } = selectedWeek
    const weekTemplate = template.slice(start, end)
    return (
        <Container>
            {weekTemplate && days.map((dayName, i) => <DayCard key={i} currIndex={start + i} dayName={dayName} day={weekTemplate[i]}/>)}
        </Container>
    )
}

export default WeekTemplate;
