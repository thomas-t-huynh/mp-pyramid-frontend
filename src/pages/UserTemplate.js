import React from "react"
import ProgramTemplate from "../components/ProgramTemplate"
import moment from "moment"

function UserTemplate({template, setTemplate, setSelectedWorkout, setSelectedWeek}) {
    const handleSetSelectedWeek = () => {
        const date = moment()
        if (date.day() !== 0) {
            date.subtract(date.day(), 'days')
        }
        const currWeekStart = date.format('L')
        const currWeekStartIndex = template.findIndex(day => day.date === currWeekStart)
        if (currWeekStartIndex === -1) {
            date.add(7, 'days')
            console.log(date.format('L'))
        }
        
    }
    console.log(template)
    return (
        <div>
            <h1>User template</h1>
            <button onClick={() => handleSetSelectedWeek()}>View Current week</button>
            <ProgramTemplate template={template} setTemplate={setTemplate} setSelectedWorkout={setSelectedWorkout} setSelectedWeek={setSelectedWeek}/>
        </div>
    )
}

export default UserTemplate