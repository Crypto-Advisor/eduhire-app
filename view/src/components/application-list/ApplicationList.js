import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getApplicationListThunk } from './ApplicationListSlice'

import './styles.css';

const ApplicationList = () =>{
    const list = useSelector(state => state.applicationlist.list)
    const loading = useSelector(state => state.applicationlist.loading)
    const dispatch = useDispatch()

    const loadList = async () =>{
        await dispatch(getApplicationListThunk())
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        loadList()
    }, [])

    return(
        <div className='application-list-container'>
            {list?.map((item) =>(
                <div className='application-list-item'>
                    {item.form.company_name}
                </div>
            ))}
        </div>
    )
}

export default ApplicationList;