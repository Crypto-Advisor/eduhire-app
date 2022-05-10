import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const Login = () =>{

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        console.log(uname.value +  " " + pass.value);

    }


    const renderErrorMessage = (name) =>{
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }

    return(
        <div className='login-container'>
            <Link to="/">Home</Link>

            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                    <input type="checkbox" checked="checked" name="remember"/> Remember me 
                </div>
            </form>
        </div>
    )
}

export default Login;