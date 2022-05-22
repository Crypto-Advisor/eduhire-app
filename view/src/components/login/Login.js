import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { loginThunk, registerThunk } from './LoginSlice';
import { login, register } from '../../utils/users';

import './styles.css';

const Login = () =>{
    const loggedIn = useSelector(state => state.login.loggedIn)
    const loading = useSelector(state => state.login.loading)
    const registered = useSelector(state => state.login.registered)
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

    useEffect(() =>{
        if(loading == false && loggedIn == false){
            document.getElementById('loading').innerHTML = "Login failed!"
        }
    }, [loading])

    useEffect(() =>{
        if(loggedIn == true){
            window.location.href = '../apply';
        }
    }, [loggedIn])

    useEffect(() =>{
        if(registered == 'true'){
            document.getElementById('loading').innerHTML = "Successfully Registered!"
        }
        if(registered == 'false'){
            document.getElementById('loading').innerHTML = "Failed to Register!"
        }
    }, [registered])


    const renderErrorMessage = (name) =>{
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }

    return(
        <div className='login-container'>
            <form>
                <div className="login-input-container">
                    <label>Username </label>
                    <input className='login' type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="login-input-container">
                    <label>Password </label>
                    <input className='login' type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
            <p id='loading'></p>
        </div>
    )
}

export default Login;