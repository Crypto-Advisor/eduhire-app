import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { loginThunk, registerThunk } from './LoginSlice';
import { login } from '../../utils/users';

import './styles.css';

const Login = () =>{

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch();

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    function getLoginInfo(){
        var {uname, pass} = document.forms[0];
        let username = uname.value.toString()
        let password = pass.value.toString()
        return {username, password}
    }

    const triggerLogin = (username, password) =>{
        // login({username, password})
        //     .then(data => console.log(data))
        dispatch(loginThunk({username, password}))
        
    }

    const triggerRegister = (username, password) =>{
        dispatch(registerThunk({username, password}))

    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        let {username, password} = getLoginInfo()

        triggerLogin(username, password)

        console.log(username +  " " + password);

    }

    const handleRegister = (event) =>{
        event.preventDefault()

        let {username, password} = getLoginInfo()

        triggerRegister(username, password)

        console.log(username + " " + password)
        console.log(typeof username)
    }


    const renderErrorMessage = (name) =>{
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }

    return(
        <div className='login-container'>
            <form>
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
                    <button onClick={handleSubmit}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;