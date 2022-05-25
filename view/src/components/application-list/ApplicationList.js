import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteApplicationThunk, getApplicationListThunk } from './ApplicationListSlice'

import './styles.css';

const ApplicationList = () =>{
    const list = useSelector(state => state.applicationlist.list)
    const loading = useSelector(state => state.applicationlist.loading)
    const dispatch = useDispatch()

    const loadList = async () =>{
        await dispatch(getApplicationListThunk())
            .catch(err => console.log(err))
    }

    const handleSubmit = (item) =>{
        window.location.href = `../applicants/${item._id}`;
    }

    const handlePopup = (item) =>{
        //event.preventDefault();
        const modal = document.getElementById(item._id);
        modal.classList.toggle("show-modal");
    }

    const handleDelete = (item) =>{
        dispatch(deleteApplicationThunk(item))
        loadList()
    }

    useEffect(() =>{
        loadList()
    }, [])

    return(
        <div className='application-list-container'>
            {list?.map((item) =>(
                <div key={item._id} className='application-list-item job-post-container'>
                    <div className='job-title'>
                        <h2>Company: {item.form.company_name}</h2>
                    </div>
                    <div className='job-position'>
                        <h2>Position: {item.form.position}</h2>
                        <p>Company Description: {item.form.company_description}</p>
                    </div>
                    <div className='job-button'>
                        <button onClick={() => handlePopup(item)} id='dbutton'>Delete</button>
                        <button onClick={() => handleSubmit(item)} id='jbutton'>Review</button>
                    </div>
                    <div className='modal' id={item._id}>
                                <span className='modal-content'>
                                    <div>
                                        <span className="close-button" onClick={() => handlePopup(item)}>&times;</span>
                                    </div>
                                    <div>
                                        <h2>Are you sure you want to delete this job post?</h2>
                                        <button onClick={() => handleDelete(item)} id='dbutton'>Yes</button>
                                        <button onClick={() => handlePopup(item)} id='jbutton'>No</button>
                                    </div>
                                </span>
                            </div> 
                </div>
            ))}
        </div>
    )
}

export default ApplicationList;