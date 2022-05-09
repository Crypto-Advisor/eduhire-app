import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './styles.css';

const Login = () =>{
    return(
        <div className='login-container'>
            <form>
                <label for="username">Username</label>
                <input type="text" placeholder="Enter Username" name="username" required></input>

                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required></input>

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me</input>
                </label>
            </form>
        </div>
    )
}

export default Login;