import React, { useState } from "react"
import styled from "styled-components"

import beginnerSport from "../assets/data/BeginnerSport"

const Container = styled.div`

`

const CellsContainer = styled.div`
    display: flex;
`

const Cell = styled.div`
    background: white;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
`

const DaysCell = styled(Cell)`
    width: 12rem;
    height: ${prop => prop.first === true && "3rem"};
`

const WeekCell = styled(Cell)`
    width: 5rem;
    height: ${prop => prop.first === true && "3rem"};
    font-weight: 700;
`
const renderDayCell = (template) => {
    let trainingPlan = []
    const phases = Object.keys(template.phases)
    let phaseIndex = 0
    let index = -1
    let currPhase = phases[phaseIndex]
    let phaseCount = 0
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    function getMainWorkout() {
        index++
        if (typeof template.workouts[index] === "string") {
            return template.workouts[index]
        }
        return template.workouts[index].exercisesOrder[0]
    }
    for (let i = 0; i < template.weeks; i++) {
        if (phaseCount >= template.phases[currPhase] && phaseIndex < phases.length) {
            currPhase = template.phases[phaseIndex + 1]
            phaseCount = 0
        }
        trainingPlan.push(
            <CellsContainer>
                <WeekCell>{i + 1}</WeekCell>
                {days.map((day, i) => <DaysCell key={i}>{getMainWorkout()}</DaysCell>)}
            </CellsContainer>
        )
        
    }
    return trainingPlan
    // const weekPlan = (phase) => (
    //     <CellsContainer>
    //         <WeekCell>{i + 1}</WeekCell>
    //         {template[phase].map((day, i) => {
    //             return <DaysCell key={i}></DaysCell>
    //         })}
    //     </CellsContainer>
    // )
    // for (const phase in template.slice(0, template.length - 2)) {
    //     const phaseLength = template[phase].length
    //     const quotient = ~~(phaseLength / 7)
    //     const remainder = phaseLength % 7
    //     for (let i = 0; i < quotient; i++) {
    //         trainingPlan.push(
    //             weekPlan(phase)
    //         )   
    //     }


    // }
}

function ProgramTemplate() {
    return (
        <Container>
            <CellsContainer>
                <WeekCell first={true}>Week</WeekCell>        
                <DaysCell first={true}>Sunday</DaysCell>        
                <DaysCell first={true}>Monday</DaysCell>        
                <DaysCell first={true}>Tuesday</DaysCell>        
                <DaysCell first={true}>Wednesday</DaysCell>        
                <DaysCell first={true}>Thursday</DaysCell>        
                <DaysCell first={true}>Friday</DaysCell>        
                <DaysCell first={true}>Saturday</DaysCell>       
            </CellsContainer>
            {renderDayCell(beginnerSport).map(cells => cells)}
        </Container>
    )
}

export default ProgramTemplate;