import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const JobPost = (props) =>{
    return(
        <div className='job-post-container'>
            <div className='job-title'>
                <h2>Company: {props.name}</h2>
            </div>
            <div className='job-position'>
                <h3>Position: {props.position}</h3>
                <p>Company Description: {props.description}</p>
            </div>
            <div className='job-button'>
                <button id='jbutton'>Apply</button>
            </div>
        </div>
    )
}

export default JobPost;