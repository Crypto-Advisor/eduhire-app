import axios from 'axios'
import {S_PORT} from '../misc'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/forms'

export const fetchForms = async () =>{
    const req = await axios.get(`${S_PORT}${baseUrl}`)
    return req.then(response => response.data);
}

export const createForm = async (data) => {
    const req = await axios.put(`${S_PORT}${baseUrl}/add`, data)
    return req.then(response => response.data);
}

export const updateForm = async (data) => {
    const req = await axios.post(`${S_PORT}${baseUrl}/update`, data)
    return req.then(response => response.data);
}

export const removeForm = async (data) => {
    const req = await axios.delete(`${S_PORT}${baseUrl}/delete`, data)
    return req.then(response => response.data);
}