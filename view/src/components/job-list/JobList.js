import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

import { fetchFormsThunk } from './JobListSlice'

const JobList = () =>{
    const joblist = useSelector(state => state.joblist.forms)
    const dispatch = useDispatch()

    const loadForm = () =>{
        dispatch(fetchFormsThunk)
        console.log(joblist)
    }


    loadForm()
    return(
        <div className='job-list-container'>
            <Link to="/">Home</Link>

        </div>
    )
}

export default JobList;