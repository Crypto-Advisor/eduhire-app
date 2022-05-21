import axios from 'axios'
import {S_PORT} from '../misc'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/users'

export const login = async (data) =>{
    const req = axios.post(`${S_PORT}${baseUrl}/login`, {data})
    return req.then(response => response.data);

    // const req = fetch(`${S_PORT}${baseUrl}/login`,{
    //     method: 'POST',
    //     body: {data}
    // })
    // return req;
}

export const register = (data) => {
    const req = axios.post(`${S_PORT}${baseUrl}/register`, {data})
    return req.then(response => response.data);
}

export const admin = () => {
    const req = axios.get(`${S_PORT}${baseUrl}/admin`)
    return req.then(response => response.data);
}
