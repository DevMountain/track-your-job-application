import authReducer from './authReducer';
import jobReducer from './jobReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({authReducer, jobReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

//console.log props - because this adds another level (props.authReducer.user...etc.). Fix this in the components that subscribe to redux.