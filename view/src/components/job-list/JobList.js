import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

import { fetchFormsThunk } from './JobListSlice'

const JobList = () =>{
    const joblist = useSelector(state => state.joblist.forms)
    const loading = useSelector(state => state.joblist.loading)
    const dispatch = useDispatch()
    

    const loadForm = async () =>{
        await dispatch(fetchFormsThunk())
            .catch(err => console.log(err))
    }   

    const handleSubmit = (e) =>{
        e.preventDefault();
        loadForm()
        console.log(joblist)
    }

    useEffect(()=>{
        loadForm()
        if(loading == false){
            console.log(joblist)
        }
    }, [])



    return(
        <div className='job-list-container'>
            {joblist?.map((item) =>(
                <div>
                    <h2> {item.form.company_name} </h2>
                    <h3> {item.form.position}</h3>
                </div>
            ))}
            <button onClick={handleSubmit}>Load</button>
        </div>
    )
}

export default JobList;