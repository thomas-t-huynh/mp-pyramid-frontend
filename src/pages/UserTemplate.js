import React from "react"
import ProgramTemplate from "../components/ProgramTemplate"
import moment from "moment"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

function UserTemplate({template, setTemplate, setSelectedWorkout, setSelectedWeek}) {
    const handleSetSelectedWeek = () => {
        const date = moment()
        if (date.day() !== 0) {
            date.subtract(date.day(), 'days')
        }
        const currWeekStart = date.format('L')
        const currWeekStartIndex = template.findIndex(day => day.date === currWeekStart)
        if (currWeekStartIndex === -1) {
            // date.add(7, 'days')
            return setSelectedWeek({start: 0, end: 7 })
        }
        setSelectedWeek({ start: currWeekStartIndex, end: currWeekStartIndex + 7})
        
    }
    console.log(template)
    return (
        <div>
            <h1>User template</h1>
            <StyledLink to="/template/week"><div onClick={() => handleSetSelectedWeek()}>View Current week</div></StyledLink>
            <ProgramTemplate template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} setSelectedWeek={setSelectedWeek}/>
        </div>
    )
}

export default UserTemplate