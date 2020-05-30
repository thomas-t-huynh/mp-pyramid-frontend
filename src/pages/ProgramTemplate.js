/* eslint-disable no-loop-func */
import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import beginnerSport from "../assets/data/BeginnerSport"
import emptyTemplate from "../assets/data/EmptyTemplate"

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
    height: 6rem;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`
const NameDaysCell = styled(Cell)`
    width: 12rem;
    height: 3rem;
`

const DaysCell = styled(Cell)`
    width: 12rem;
    cursor: pointer;
    flex-direction: column;
    align-items: flex-start;
    background: ${prop => {
        if (prop.phase === 'baseFitness') { return 'lavender' } 
        if (prop.phase === 'strength') { return 'mediumorchid' }
        if (prop.phase === 'power') { return 'darkslateblue' }
        if (prop.phase === 'powerEndurance') { return 'salmon' }
        if (prop.phase === 'performance') { return 'seashell' }
        if (prop.phase === 'rest') { return 'palegreen' }
    }};
    &:hover {
        background: yellow;
    };
    li {
        margin-left: 1rem;
    }
`

const WeekCell = styled(Cell)`
    width: 5rem;
    height: ${prop => prop.first === true && "3rem"};
    font-weight: 700;
`

const emptyDayTemplate = {
  name: "",
  day: "",
  time: "",
  exercises: {},
  exercisesOrder: []
}

function ProgramTemplate({ setSelectedWorkout, template, setTemplate }) {
    const mapProgram = (template) => {
        let trainingPlan = []
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        // if (!template) {
        //     for (let i = 0; i < 17; i++) {                 
        //         trainingPlan.push(
        //             <CellsContainer key={i}>
        //                 <WeekCell>{i + 1}</WeekCell>
        //                 {days.map((day, j) => <StyledLink onClick={() => setSelectedWorkout({...emptyDayTemplate, index: ((i * 7) + j) })} key={j} to="/template"><DaysCell></DaysCell></StyledLink>)}
        //             </CellsContainer>
        //         )
        //     }
        //     return trainingPlan
        // }
        function getMainWorkout(index) {
            const mainWorkouts = []
            for (const workout of template[index].exercisesOrder) {
                mainWorkouts.push(workout)
            }
            return mainWorkouts.slice(0,3)
        }
        const weeks = ~~(template.length/7)
        for (let i = 0; i < weeks; i++) {                 
            trainingPlan.push(
                <CellsContainer key={i}>
                    <WeekCell>{i + 1}</WeekCell>
                    {days.map((day, j) => {
                        const currIndex = ((i * 7) + j)
                        return (
                            <StyledLink key={j} onClick={() => setSelectedWorkout({ ...template[currIndex], index: currIndex })} to="/template">
                                <DaysCell phase={template[currIndex].name} >{getMainWorkout(currIndex).map((workout, k) => <li key={k}>{workout}</li>)}</DaysCell>
                            </StyledLink>
                        )
                    })}
                </CellsContainer>
            )
            
        }
        return trainingPlan
    }

    return (
        <Container>
            <h1>Predefined Templates</h1>
            <button onClick={() => setTemplate(beginnerSport)}>Beginner Sport</button>
            <button onClick={() => setTemplate(emptyTemplate)}>
                None
            </button>
            <CellsContainer>
                <WeekCell first={true}>Week</WeekCell>        
                <NameDaysCell first={true}>Sunday</NameDaysCell>        
                <NameDaysCell first={true}>Monday</NameDaysCell>        
                <NameDaysCell first={true}>Tuesday</NameDaysCell>        
                <NameDaysCell first={true}>Wednesday</NameDaysCell>        
                <NameDaysCell first={true}>Thursday</NameDaysCell>        
                <NameDaysCell first={true}>Friday</NameDaysCell>        
                <NameDaysCell first={true}>Saturday</NameDaysCell>       
            </CellsContainer>
            {mapProgram(template).map(cells => cells)}
        </Container>
    )
}

export default ProgramTemplate;