import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserThunk, updateUserThunk, setContactThunk } from './AccountSettingsSlice';

import './styles.css';

const AccountSettings = () =>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.accountsettings.user)

    const fetchUser = async() =>{
        dispatch(fetchUserThunk())
    }

    function getLoginInfo(){
        let {uname, pass, newpass} = document.forms[0]
        let username = uname.value.toString()
        let oldPassword = pass.value.toString()
        let password = newpass.value.toString()
        return {username, password, oldPassword}
    }

    const triggerUpdate = () =>{
        const data = getLoginInfo()
        dispatch(updateUserThunk(data))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        triggerUpdate()
        document.getElementById("password-update").reset();
    }

    const triggerContact = (data) =>{
        dispatch(setContactThunk(data))
    }

    const handleContact = (event) =>{
        event.preventDefault()
        let { email, telegram } = document.forms[1]
        let emailValue = email.value.toString()
        let telegramValue = telegram.value.toString()
        triggerContact({
            email: emailValue, 
            telegram: telegramValue
        })
        document.getElementById("contact-update").reset();
    }

    useEffect(() =>{
        fetchUser()
        console.log(user)
    }, [])

    return(
        <div className='account-settings-container'>
            <div className='account-settings-sub'>
                <div>
                    <h2>Settings</h2>
                </div>
                <div className='settings-item'>
                    <p><b>Update Password</b></p>
                    <form id='password-update'>
                        <div className='login-input-container'>            
                            <label>Username </label>
                            <input className='login' type="text" name="uname" required />
                        </div>
                        <div className='login-input-container'>            
                            <label>Current Password </label>
                            <input className='login' type="password" name="pass" required />
                        </div>
                        <div className='login-input-container'>            
                            <label>New Password </label>
                            <input className='login' type="password" name="newpass" required />
                        </div>
                        <div className='button-container'>
                            <button onClick={handleSubmit}>Update</button>
                        </div>
                    </form>
                </div>
                <div className='settings-item'>
                    <p><b>Contact Information</b></p>
                    <form id='contact-update'>
                        <div className='login-input-container'>            
                            <label>Email </label>
                            <input className='login' type="email" name="email" required />
                        </div>
                        <div className='login-input-container'>            
                            <label>Telegram @name </label>
                            <input className='login' type="text" name="telegram" />
                        </div>
                        <div className='button-container'>
                            <button onClick={handleContact}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;