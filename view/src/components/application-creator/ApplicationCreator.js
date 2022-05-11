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
                <label htmlFor="project-name">Company Name</label>
                <input id="project-name" name="project-name"
                    placeholder='Company name'></input>
                </div>
                <div className='input-container'>
                <label htmlFor="description">Company Description</label>
                <textarea id="description" name="description"
                    placeholder='Describe your company'></textarea>
                </div>
                <div className='input-container'>
                <label htmlFor="position">Hiring Position</label>
                <textarea id="position" name="position"
                    placeholder='Position'></textarea>
                </div>
                <div className='input-container'>
                <label htmlFor="requirements">Position Requirements</label>
                <textarea id="requirements" name="requirements"
                    placeholder='Required skills'></textarea>
                </div>
                <div className='input-container'>
                <label htmlFor="resq">Research Question</label>
                <textarea id="resq" name="research-question"
                    placeholder='30 minute research question'></textarea>
                </div>
                <div className='input-container'>
                <label htmlFor="projq">Project Outline</label>
                <textarea id="projq" name="project-question"
                    placeholder='1 hour project'></textarea>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ApplicationCreator;