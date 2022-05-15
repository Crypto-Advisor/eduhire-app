import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { login, register } from '../../utils/users';

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

    const triggerLogin = async (username, password) =>{
        await dispatch(login({username, password}))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const triggerRegister = async(username, password) =>{
        await dispatch(register({username, password}))
            .then(res => console.log(res))
            .catch(err => console.log(err))
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
                    <button onClick={handleRegister}>Register</button>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me 
                </div>
            </form>
        </div>
    )
}

export default Login;