import React, { useState } from "react";
import SearchExercise from "./SearchExercise";

function DayTemplate() {
    const [template, setTemplate] = useState([])
    
    return (
        <div>
            <SearchExercise />
        </div>
    )
}

export default DayTemplate;
