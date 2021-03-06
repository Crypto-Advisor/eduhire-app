import axios from 'axios'
import {S_PORT} from '../misc'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/responses'

export const fetchResponses = async (token, id) =>{
    const req = axios.get(`${S_PORT}${baseUrl}/${id}`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data)
}

export const createResponse = async (token, data) => {
    const req = axios.put(`${S_PORT}${baseUrl}/add`, data, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data)
}

export const updateResponse = async (user, form, response) => {

}

export const removeResponse = async (user, response) => {
    
}