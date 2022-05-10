import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const ApplicationCreator = () =>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        
    }

    return(
        <div className='application-creator'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                <label for="resq">Research Question</label>
                <textarea id="resq" name="research-question"
                    placeholder='30 minute research question'></textarea>
                </div>
                <div className='input-container'>
                <label for="projq">Project Outline</label>
                <textarea id="projq" name="project-question"
                    placeholder='1 hour project'></textarea>
                <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default ApplicationCreator;