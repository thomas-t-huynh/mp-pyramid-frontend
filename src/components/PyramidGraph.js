import React, { useEffect, useState } from "react";
import axios from "axios";

function PyramidGraph({ name, id }) {
    const [ base64, setBase64 ] = useState("")
    useEffect(() => {
        const nameWithHyphen = name.replace(" ", "-")
        axios.post(`https://climbing-training-api.herokuapp.com/pyramid`, { 
            csv: `https://www.mountainproject.com/user/${id}/${nameWithHyphen}/tick-export` 
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Pyramid</h2>
            {base64 && <img src={`data:image/png;base64, ${base64}`} alt="pyramid-graph" />}
        </div>
    )
}

export default PyramidGraph;