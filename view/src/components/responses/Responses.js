import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchResponsesThunk } from './ResponsesSlice';

import './styles.css';

const Responses = () =>{
    const responses = useSelector(state => state.responses.responses);
    const loaded = useSelector(state => state.responses.loaded);
    const {id} = useParams();
    const dispatch = useDispatch();

    const fetchResponses = async() =>{
        await dispatch(fetchResponsesThunk(id))
            .catch(err => console.log(err))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    useEffect(() =>{
        fetchResponses()
    }, [id])

    return(
        <div className='responses-container'>
            <div className='responses-sub'>
                {
                    loaded ? responses?.map((item) =>(
                        <div className='job-post-container'>
                            <div className='job-title'>
                                <h2>Username: {item.user.username}</h2>
                            </div>    
                            <div className='job-position'>
                                <p><b>{item.form.form.research_q}:</b> {item.response.research_question}</p>
                            </div> 
                            <div className='job-position'>
                                <p><b>{item.form.form.project_q}:</b> {item.response.project}</p>
                            </div>
                            <div>
                                <button onClick={handleSubmit} id='jbutton'>Contact</button>
                            </div> 
                        </div>
                    )) : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Responses;