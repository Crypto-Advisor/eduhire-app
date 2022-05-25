import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

import { createFormThunk, getUserThunk } from './ApplicationCreatorSlice';
import { getApplicationListThunk } from '../application-list/ApplicationListSlice';

const ApplicationCreator = () =>{
    const dispatch = useDispatch();

    const addForm = async (event) =>{
        const appli = {
            company_name: event.target[0].value,
            company_description: event.target[1].value,
            position: event.target[2].value,
            position_req: event.target[3].value,
            research_q: event.target[4].value,
            project_q: event.target[5].value,
        }

        console.log(appli)
        await dispatch(createFormThunk(appli))
        .catch(err => console.log(err))
        await dispatch(getApplicationListThunk())
        .catch(err => console.log(err))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addForm(event)
        document.getElementById("application-creator-form").reset();

    }

    return(
        <div className='application-creator'>
            <form id="application-creator-form" onSubmit={handleSubmit}>
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