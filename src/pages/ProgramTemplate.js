import React, { useState } from "react"
import styled from "styled-components"

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

const mapTrainingPlan = (weeks) => {
    let trainingPlan = []
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    for (let i = 0; i < weeks; i++) {
        trainingPlan.push(
            <CellsContainer>
                <WeekCell>{i + 1}</WeekCell>
                {days.map((day, i) => <DaysCell key={i}></DaysCell>)}
            </CellsContainer>
        )
    }
    return trainingPlan
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
            {mapTrainingPlan(17).map(cells => cells)}
        </Container>
    )
}

export default ProgramTemplate;