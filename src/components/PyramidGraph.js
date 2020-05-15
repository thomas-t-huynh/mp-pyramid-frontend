import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PyramidImg = styled.img`
    
`

function PyramidGraph({ name, id }) {
    const [ base64, setBase64 ] = useState("")
    useEffect(() => {
        const nameWithHyphen = name.replace(" ", "-")
        axios.post(`https://climbing-training-api.herokuapp.com/pyramid?csv=https%3A%2F%2Fwww.mountainproject.com%2Fuser%2F${id}%2F${nameWithHyphen}%2Ftick-export`)
        .then(res => {
            setBase64(res.data.pyramid)
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>Pyramid</h2>
            {base64 && <PyramidImg src={`data:image/png;base64, ${base64}`} alt="pyramid-graph" />}
        </div>
    )
}

export default PyramidGraph;