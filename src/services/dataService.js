import axios from 'axios'

const baseUrl = "http://localhost:8000"

const register =(data)=>{
    return axios.post(baseUrl+"/",data,{
        withCredentials:true
    })
}
const login =(data)=>{
    return axios.post(baseUrl+"/login",data,{
        withCredentials:true
    })
}

export default{
    register,
    login
}