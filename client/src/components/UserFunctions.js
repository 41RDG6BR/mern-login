import axios from 'axios'
const baseUrl = 'http://localhost:5000/'
export const register = newUser=>{
    return axios
        .post(baseUrl + 'users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res=>{
            console.log('Registred!')
        })
}

export const login = user =>{
    return axios
        .post(baseUrl + 'users/login', {
            email: user.email,
            password: user.password
        })
        .then(res =>{
            console.log('token', res.data)
            localStorage.setItem('userToken', res.data)
            return res.data
        })
        .catch(err =>{
            console.log(err)
        })

}