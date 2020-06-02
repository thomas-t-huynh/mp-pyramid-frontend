import React, { useState } from "react"
import ProgramTemplate from "../components/ProgramTemplate"
import beginnerSport from "../assets/data/BeginnerSport"
import emptyTemplate from "../assets/data/EmptyTemplate"

function SetTemplate({template, setTemplate, setSelectedWorkout, setUserTemplate, setSelectedWeek, history}) {
    const handleSetUserTemplate = () => {
        // add later - save template in db
        history.push('/user/template')
    }

    return (
        <div>
            <h1>Predefined Templates</h1>
            <button onClick={() => setTemplate(beginnerSport)}>Beginner Sport</button>
            <button onClick={() => setTemplate(emptyTemplate)}>None</button>
            <button onClick={() => handleSetUserTemplate()}>Set Template</button>
            <ProgramTemplate template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} setSelectedWeek={setSelectedWeek} />
        </div>
    )
}   

export default SetTemplate