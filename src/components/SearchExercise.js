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

    // console.log(workouts)

    const searchResults = () => {
        const { type, subtype } = searchTypes
        const { exercises } = workouts;
        let searchRes = exercises.filter(workout => workout.type.toLowerCase().includes(type.toLowerCase()) && workout.subtype.toLowerCase().includes(subtype.toLowerCase()))
        if (searchWord !== "") {
            searchRes = searchRes.filter(workout => workout.name.toLowerCase().includes(searchWord.toLowerCase()))
            if (searchRes.length > 0) {
                return searchRes
            }
        }
    }

    const handleOnTypeChange = e => {
        setSearchTypes({ ...searchTypes, [e.target.name]: e.target.value })
    }
    console.log(searchTypes)
    return (
        <div>
            <h2>Add a workout</h2>
            <select name="type" onChange={handleOnTypeChange}>
                <option value="" />
                {Object.keys(workouts.types).map((type, i) => <option key={i} value={type}>{type}</option>)}
            </select>
            {searchTypes.type && 
            <select name="subtype" onChange={e => setSearchTypes({...searchTypes, subtype: e.target.value })}>
                <option value="" />
                {workouts.types[searchTypes.type].map((subtype, i) => <option key={i} value={subtype}>{subtype}</option>)}
            </select>}
            <input type="text" onChange={e => setSearchWord(e.target.value)} value={searchWord} />
            {searchResults() ? searchResults().map((res, i) => <p key={i}>{res.name}</p>) : <p>No results</p>}
        </div>
    )
}

export default SearchExercise;
