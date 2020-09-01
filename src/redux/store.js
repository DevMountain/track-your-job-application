import authReducer from './authReducer';
// import jobReducer from './jobReducer';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// rootReducer = combineReducers({authentication: authReducer, jobs: jobReducer})

export default createStore(authReducer, applyMiddleware(promiseMiddleware));