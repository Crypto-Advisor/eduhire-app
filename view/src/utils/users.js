import axios from 'axios'
import {S_PORT} from '../misc'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/users'

export const login = async (data) =>{
    const req = axios.post(`${S_PORT}${baseUrl}/login`, {data})
    return req.then(response => response.data);
}

export const register = (data) => {
    const req = axios.post(`${S_PORT}${baseUrl}/register`, {data})
    return req.then(response => response.data);
}

export const updateUser = (token, data) => {
    const req = axios.post(`${S_PORT}${baseUrl}/update`, {data}, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}

export const authenticate = (token) => {
    console.log(token)
    const req = axios.get(`${S_PORT}${baseUrl}/authenticate`, {
        headers: {
            'Authorization': token
        }
    })
    return req.then(response => response.data);
}
