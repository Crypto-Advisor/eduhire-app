import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './styles.css';

const JobList = () =>{
    return(
        <div className='job-list-container'>
            <Link to="/">Home</Link>

        </div>
    )
}

export default JobList;