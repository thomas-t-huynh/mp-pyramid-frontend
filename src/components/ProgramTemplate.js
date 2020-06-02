/* eslint-disable no-loop-func */
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import moment from "moment"

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
    height: ${prop => prop.first && "3rem"};
    font-weight: 700;
    &:hover {
        background: ${prop => !prop.first && 'mediumseagreen'};
    }
`

function ProgramTemplate({ setSelectedWorkout, template, setSelectedWeek }) {
    const mapProgram = (template) => {
        let trainingPlan = []
        const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        const date = moment()
        if (date.day() !== 0) {
            date.add(7 - date.day(), 'days')
        }
        date.subtract(1, 'days')
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
                    <StyledLink to="/template/week" onClick={() => setSelectedWeek(template.slice(i * 7, i * 7 + 7))} ><WeekCell>{i + 1}</WeekCell></StyledLink>
                    {days.map((day, j) => {
                        const currIndex = ((i * 7) + j)
                        date.add(1, 'days')
                        template[currIndex].date = date.format('L')
                        return (
                            <StyledLink key={j} onClick={() => setSelectedWorkout({ ...template[currIndex], index: currIndex })} to="/template/day">
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