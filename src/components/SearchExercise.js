import React, { useState } from "react";
import * as data from "../assets/data/workouts.json";

function SearchExercise() {
    const mapDataToWorkouts = () => {
        let res = {
            exercises: [],
            types: {}
        }
        Object.keys(data.default).forEach(type => {
            res.types[type] = []
            Object.keys(data.default[type]).forEach(subtype => {
                res.types[type].push(subtype)
                Object.keys(data.default[type][subtype]).forEach(exercise => {
                    res.exercises.push({
                        name: exercise,
                        ...data.default[type][subtype][exercise],
                        type,
                        subtype
                    })
                })
            })
        })
        return res
    }
    const [ workouts, setWorkouts ] = useState(mapDataToWorkouts());
    const [ searchWord, setSearchWord ] = useState("");
    const [ searchTypes, setSearchTypes ] = useState({ type: "", subtype: "" })
    console.log(workouts)
    const searchResults = () => {
        const { type, subtype } = searchTypes
        const { exercises } = workouts;
        let searchRes = exercises.filter(workout => workout.type.toLowerCase().includes(type) && workout.type.toLowerCase().includes(type))
        if (searchWord !== "") {
            searchRes = exercises.filter(workout => workout.name.toLowerCase().includes(searchWord.toLowerCase()))
            if (searchRes.length > 0) {
                return searchRes
            }
        }
    }

    return (
        <div>
            <h2>Add a workout</h2>
            <input type="text" onChange={e => setSearchWord(e.target.value)} value={searchWord} />
            {searchResults() ? searchResults().map((res, i) => <p key={i}>{res.name}</p>) : <p>No results</p>}
        </div>
    )
}

export default SearchExercise;
