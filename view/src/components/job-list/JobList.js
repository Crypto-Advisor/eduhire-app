import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

import { fetchFormsThunk } from './JobListSlice'
import JobPost from '../job-post/JobPost';

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
            <div className='job-list-sub'>
            {joblist?.map((item) =>(
                <div>
                    <JobPost item={item} />
                </div>
            ))}
            <button onClick={handleSubmit}>Load</button>
            </div>
        </div>
    )
}

export default JobList;