import axios from 'axios'
import {S_PORT} from '../misc'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/forms'

export const fetchForms = async () =>{
    const req = await axios.get(`${S_PORT}${baseUrl}`)
    return req.data;
}

export const fetchForm = async (id) =>{
    const req = await axios.get(`${S_PORT}${baseUrl}/${id}`)
    return req.data;
}

export const createForm = async (token, data) => {
    const req = await axios.put(`${S_PORT}${baseUrl}/add`, data, {
        headers: {
            'Authorization': token
        }
    })
    return req.data;
}

export const updateForm = async (data) => {
    const req = await axios.post(`${S_PORT}${baseUrl}/update`, data)
    return req.data;
}

export const removeForm = async (data) => {
    const req = await axios.delete(`${S_PORT}${baseUrl}/delete`, data)
    return req.data;
}