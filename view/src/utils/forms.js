import axios from 'axios'

axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

const baseUrl = '/forms'

export const fetchForms = async () =>{
    const res = await axios.get(baseUrl)
        .catch(err => console.log(err));
    return res;
}

export const createForm = async (data) => {
    const res = await axios.put(`${baseUrl}/add`, data)
        .catch(err => console.log(err));
    return res;
}

export const updateForm = async (data) => {
    const res = await axios.post(`${baseUrl}/update`, data)
        .catch(err => console.log(err));
    return res;
}

export const removeForm = async (data) => {
    const res = await axios.delete(`${baseUrl}/delete`, data)
        .catch(err => console.log(err));
    return res;
}