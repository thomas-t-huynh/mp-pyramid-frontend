import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//  Production link -> `https://www.mountainproject.com/data/get-user?email=${email}&key=200690742-42241ba1e91a3117df55a44758abbb73`
// Dev link -> `https://www.mountainproject.com/data/get-user?userId=109791883&key=200690742-42241ba1e91a3117df55a44758abbb73`

function Login({ setUserData }) {
    const [ email, setEmail ] = useState("")
    const [ error, setError ] = useState()
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .get(`https://www.mountainproject.com/data/get-user?userId=109791883&key=200690742-42241ba1e91a3117df55a44758abbb73`)
            .then((res) => {
                setUserData(res.data)
                setError(undefined)
                history.push(`/user/${res.data.id}`)
            })
            .catch((err) => setError("Please enter a valid email"))
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <h1>Enter your Mountin Project account email</h1>
                {error && <h2>{error}</h2>}
                <input type="text" placeholder="Enter your email here" value={email} onChange={e => setEmail(e.target.value)} />
                <button>Enter</button>
            </form>
        </div>
    );
}

export default Login;
