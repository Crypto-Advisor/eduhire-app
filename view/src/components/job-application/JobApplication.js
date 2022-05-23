import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { fetchFormThunk } from './JobApplicationSlice';

import './styles.css';

const JobApplication = () =>{
    const form = useSelector(state => state.jobapplication.form)
    const done = useSelector(state => state.jobapplication.done)
    const {id} = useParams()
    const dispatch = useDispatch()

    const loadForm = async() =>{
        await dispatch(fetchFormThunk(id))
            .catch(err => console.log(err))
    }

    const handleSubmit = (event) =>{

    }

    useEffect(() =>{
        loadForm()
    },[id])

    useEffect(() =>{
        if(done == true){
            console.log(form[0])
        }
    }, [done])

    return(
        <div className='job-application-container'>
            <div id='form'>
                {form?.map((item) => (
                    <div className='job-application-container'>
                        <div className='job-application-description'>
                            <div>
                                <h1>Company: {item.form.company_name}</h1>
                            </div>
                            <div>
                                <p>Description: {item.form.company_description}</p>
                            </div>
                            <div>
                                <h2>Position: {item.form.position}</h2>
                            </div>
                            <div>
                                <p>Position Requirements: {item.form.position_req}</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='input-container'>
                                <label htmlFor='projq'>{item.form.research_q}</label>
                                <textarea id="resq" name="research-question"
                                    placeholder='30 minute research question'></textarea>
                            </div>
                            <div className='input-container'>
                                <label htmlFor='projq'>{item.form.project_q}</label>
                                <textarea id="projq" name="project-question"
                                    placeholder='1 hour project'></textarea>
                            </div>
                            <input type="submit"/>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobApplication;