import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function WelcomePage() {

    return (
        <div>
            <h1>Welcome to MP Pyramid!</h1>
            <Link to="/login"><button>Login</button></Link>
        </div>
    );
}

export default WelcomePage;
