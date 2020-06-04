import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { WeekTemplateContext } from "../contexts"

const Container = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`

function DayCard({ day, dayName }) {
    const { setSelectedWorkout } = useContext(WeekTemplateContext)
    return (
        <StyledLink to="/template/day" onClick={() => setSelectedWorkout(day)}>    
            <Container>
                <h2>{dayName}</h2>
                <h3>{day.name}</h3>
                {day.exercisesOrder.map(exercise => {
                    return (<h3>{exercise}</h3>)
                })}
            </Container>
        </StyledLink>
    )
}

export default DayCard