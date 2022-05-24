import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/fontawesome-free-solid'

import './styles.css';

fontawesome.library.add(faGraduationCap);

const Navbar = () =>{
    return(
        <div className='navbar-container'>
            <div className='logo nav-element'>
                <FontAwesomeIcon className='logo-icon' icon="fa-graduation-cap" />
            </div>
            <div className='nav-element'>
                <Link className='nav-button' to="/">Home</Link>
            </div>
            <div className='nav-element'>
                <Link className='nav-button' to="/login">Login</Link>
            </div>
            <div className='nav-element'>
                <Link className='nav-button' to="/apply">Apply</Link>
            </div>
            <div className='nav-element'>
                <Link className='nav-button' to="/applicants">Applicants</Link>
            </div>
            <div className='nav-element'>
                <Link className='nav-button' to="/account">Account</Link>
            </div>
        </div>
    )
}

export default Navbar;