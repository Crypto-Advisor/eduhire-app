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
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
    }

    useEffect(() =>{
        fetchResponses()
    }, [id])


    return(
        <div className='responses-container'>
            <div className='responses-sub'>
                {
                    responses.length == 0 ? <h1>No Responses</h1> :
                    loaded ? responses?.map((item) =>(
                        <div key={item._id} className='job-post-container'>
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
                            <div className='modal'>
                                <span className='modal-content'>
                                    <div>
                                        <span className="close-button" onClick={handleSubmit}>&times;</span>
                                    </div>
                                    <div>
                                        <p><b>Email: </b> {item.user.email}</p>
                                    </div>
                                    <div>
                                        <p><b>Telegram: </b> {item.user.telegram}</p>
                                    </div>
                                </span>
                            </div> 
                        </div>
                    )) : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default Responses;