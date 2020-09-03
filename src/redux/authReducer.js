import axios from 'axios';

const initialState = {
    user: {},
    isLoggedIn: false
}

// const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER;'
// const REGISTER_USER = 'REGISTER_USER;'
const GET_USER = 'GET_USER;'

//Look into this. Not sure about parameters and payload value:

//Not sure if I need registerUser also, since it does basically the same thing as loginUser. Check on this.
// export function registerUser(user){
//     return {
//         type: REGISTER_USER,
//         payload: user
//     }
// }

export function loginUser(user){
    //refer to Auth.js login method (res.data passed into this.props.loginUser)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser(){
    const user = axios.get('/auth/user')
        .then(res => res.data)
        .catch(err => console.log(err));
    return {
        type: GET_USER,
        payload: user
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            //the following creates a "user" object with three properties on it. This is the proper way to do this.
            return {...state, user: action.payload, isLoggedIn: true }
            //The next example steps into the object and pulls each property out. It doesn't return an object. 
            // return {...state, username: action.payload.username, id: action.payload.id, profilePic: action.payload.profilePic  }
        // case REGISTER_USER:
        //     return {...state, ...action.payload}  
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + "_PENDING":
            return state
        case GET_USER + "_FULFILLED":
            return {...state, user: action.payload, isLoggedIn: true}
        case GET_USER + "_REJECTED":
            return initialState
        default:
            return initialState
    }
}