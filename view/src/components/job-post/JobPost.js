import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const JobPost = (props) =>{

    const handleSubmit = (item) =>{
        window.location.href = `../apply/${props.item._id}`;
    }

    return(
        <div className='job-post-container'>
            <div className='job-title'>
                <h2>Company: {props.item.form.company_name}</h2>
            </div>
            <div className='job-position'>
                <h3>Position: {props.item.form.position}</h3>
                <p>Company Description: {props.item.form.company_description}</p>
            </div>
            <div className='job-button'>
                <button id='jbutton' onClick={handleSubmit}>Apply</button>
            </div>
        </div>
    )
}

export default JobPost;