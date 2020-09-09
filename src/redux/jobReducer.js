import axios from 'axios';

const initialState = {
    jobs: []
}

const SET_JOBS = 'SET_JOBS';
// or SET_JOBS?

//need function to update state
// Don't need an action for each axios call type. Just use setjob to update redux state.

// getting response from axios and putting response into jobs array on state. But the axios call doesn't happen here, it happens in the separate components, and the results of the actions are stored in redux state.


export function setJobs(jobs){
    return {
        type: SET_JOBS,
        payload: jobs
    }
}


export default function jobReducer(state = initialState, action) {
    switch(action.type){
        case SET_JOBS:
            console.log('hit setJob redux', action.payload)
            return {...state, jobs: action.payload}
        default:
            return state
    }
}
// export default function reducer(state = initialState, action) {
//     switch(action.type){
//         case LOGIN_USER:
//             //the following creates a "user" object with three properties on it. This is the proper way to do this.
//             console.log('hit login user redux', action.payload)
//             return {...state, user: action.payload, isLoggedIn: true }
//             //The next example steps into the object and pulls each property out. It doesn't return an object. 
//             // return {...state, username: action.payload.username, id: action.payload.id, profilePic: action.payload.profilePic  }
//         // case REGISTER_USER:
//         //     return {...state, ...action.payload}  
//         case LOGOUT_USER:
//             return {...state, ...action.payload}
//         case GET_USER + "_PENDING":
//             return state
//         case GET_USER + "_FULFILLED":
//             console.log('action.payload', action.payload)
//             return {...state, user: action.payload, isLoggedIn: true}
//         case GET_USER + "_REJECTED":
//             return state
//         default:
//             return state
//     }
// }



//I don't need this hard coded anymore. I've included status as an empty array above, and it will get the values from the database, from an axios call.
// ['Researching', 'Networking', 'Applying', 'Application Submitted', 'Assessments', 'Interviewing', 'Thank You Sent', 'Waiting for Response', 'Offer', 'Rejected', 'Negotiating', 'Accepted Offer', 'Rejected Offer']