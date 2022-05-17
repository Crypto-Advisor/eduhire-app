import axios from 'axios'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/users'

export const login = async (data) =>{
    const res = await axios.post(`${baseUrl}/login`, data)
        .catch(err => console.log(err));
    return res;
}

export const register = async (data) => {
    const res = await axios.post(`${baseUrl}/register`, data)
        .catch(err => console.log(err));
    return res;
}

export const admin = async () => {
    const res = await axios.get(`${baseUrl}/admin`)
        .catch(err => console.log(err));
    return res;
}
