export const fetchForms = async () =>{
    const res = await fetch('http://localhost:3000/forms');
    return res;
}

export const createForm = async (data) => {
    const res = await fetch('http://localhost:3000/forms/add', {
        method: 'PUT',
        body: data
    })
    .catch(err => console.log(err))
    return res;
}

export const updateForm = async (data) => {
    const res = await fetch('/forms/update', {
        method: 'POST',
        body: data
    });
    return res;
}

export const removeForm = async (data) => {
    const res = await fetch('/forms/delete', {
        method: 'DELETE',
        body: data
    });
    return res;
}