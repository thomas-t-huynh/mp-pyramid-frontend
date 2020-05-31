import React from "react"
import ProgramTemplate from "../components/ProgramTemplate"

function UserTemplate({template, setTemplate, setSelectedWorkout}) {
    return (
        <div>
            <h1>User template</h1>
            <ProgramTemplate template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} />
        </div>
    )
}

export default UserTemplate