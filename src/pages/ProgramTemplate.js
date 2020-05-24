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
    cursor: pointer;
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
console.log(beginnerSport)
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
        let index = 0
        function getMainWorkout() {
            const currIndex = index
            index++
            return template[currIndex].exercisesOrder[0]
            
        }
        const weeks = ~~(template.length/7)

        for (let i = 0; i < weeks; i++) {                 
            trainingPlan.push(
                <CellsContainer key={i}>
                    <WeekCell>{i + 1}</WeekCell>
                    {days.map((day, i) => <DaysCell phase={template[index].name} key={i}>{getMainWorkout()}</DaysCell>)}
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