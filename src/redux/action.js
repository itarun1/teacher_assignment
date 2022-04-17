import * as types from "./actionType"
import axios from "axios"
const getUsers =(users)=>({

    type:types.GET_USERS,
    payload:users,
})

const useDeleted = ()=>({
    type:types.DELETE_USER,
})

const userUpdated = (user)=>({
    type:types.GET_CLASS,
    payload:user,
})
export const loadUsers=()=>{
    return function(dispatch){
        axios.get("http://localhost:8080/user").then((resp)=>{
            // console.log("resp",resp)
            dispatch(getUsers(resp.data))
        }).catch((err)=>{console.log(err)})
    }
}
export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete( "http://localhost:8080/user"`/${id}`).then((resp)=>{
            dispatch(useDeleted());
            dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}

export const updatecity=(id)=>{
    return function(dispatch){
        axios.get("http://localhost:8080/user"`/${id}`).then((resp)=>{
            dispatch(userUpdated(resp.data))
            console.log("resp",resp.data.class)
           // dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}