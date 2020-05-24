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
    background: ${prop => {
        if (prop.phase === 'baseFitness') { return 'lavender' } 
        if (prop.phase === 'strength') { return 'mediumorchid' }
        if (prop.phase === 'power') { return 'darkslateblue' }
        if (prop.phase === 'powerEndurance') { return 'salmon' }
        if (prop.phase === 'performance') { return 'seashell' }
        if (prop.phase === 'rest') { return 'palegreen' }
    }};
`

const WeekCell = styled(Cell)`
    width: 5rem;
    height: ${prop => prop.first === true && "3rem"};
    font-weight: 700;
`

function ProgramTemplate() {
    const [template, setTemplate] = useState()

    const mapProgram = (template) => {
        let trainingPlan = []
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        if (!template) {
            for (let i = 0; i < 17; i++) {                 
                trainingPlan.push(
                    <CellsContainer key={i}>
                        <WeekCell>{i + 1}</WeekCell>
                        {days.map((day, i) => <DaysCell key={i}></DaysCell>)}
                    </CellsContainer>
                )
            }
            return trainingPlan
        }
        const phases = Object.keys(template.phases)
        let phaseIndex = 0
        let index = -1
        let currPhase = phases[phaseIndex]
        let phaseCount = 0
        function getMainWorkout() {
            index++
            phaseCount++
            if (phaseCount >= template.phases[currPhase] && phaseIndex < phases.length) {
                phaseIndex++
                currPhase = phases[phaseIndex]
                
                phaseCount = 0
            }
            const workout = template.workouts[index]
            if (typeof workout === "string") {
                return workout
            }
            return workout.exercisesOrder[0]
        }
        for (let i = 0; i < template.weeks; i++) {                 
            trainingPlan.push(
                <CellsContainer key={i}>
                    <WeekCell>{i + 1}</WeekCell>
                    {days.map((day, i) => <DaysCell phase={currPhase} key={i}>{template ? getMainWorkout() : undefined}</DaysCell>)}
                </CellsContainer>
            )
            
        }
        return trainingPlan
    }

    return (
        <Container>
            <h1>Predefined Templates</h1>
            <button onClick={() => setTemplate(beginnerSport)}>Beginner Sport</button>
            <button onClick={() => setTemplate()}>
                None
            </button>
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
            {mapProgram(template).map(cells => cells)}
        </Container>
    )
}

export default ProgramTemplate;