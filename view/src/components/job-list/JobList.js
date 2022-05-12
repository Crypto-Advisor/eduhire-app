import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
    fetchForms
} from '../../utils/forms';

import './styles.css';

const JobList = () =>{
    const [list, setList] = useState([]);

    const forms = async() =>{
        const forms = await fetchForms();
        setList(forms);
    }

    const displayForms = () =>{
        list.forEach((form) =>{
            {}
        })
    }
    forms()
    return(
        <div className='job-list-container'>
            <Link to="/">Home</Link>
            {list.forEach((form) => <h1>form: {form}</h1>)}
        </div>
    )
}

export default JobList;