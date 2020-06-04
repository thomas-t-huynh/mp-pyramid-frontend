import React from "react"
import ProgramTemplate from "../components/ProgramTemplate"
import { WeekTemplateContext } from "../contexts"
function UserTemplate({template, setTemplate, setSelectedWorkout, setSelectedWeek}) {
    return (
        <div>
            <h1>User template</h1>
            <ProgramTemplate template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} setSelectedWeek={setSelectedWeek}/>
        </div>
    )
}

export default UserTemplate