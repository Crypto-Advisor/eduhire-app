export const login = async (data) =>{
    const res = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: data
    })
    .catch(err => console.log(err))
    return res;
}

export const register = async (data) => {
    const res = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        body: data
    })
    .catch(err => console.log(err))
    return res;
}

export const admin = async () => {
    const res = await fetch('/admin');
    return res;
}
