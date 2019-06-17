import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';


const feedbackReducer = ( state = {}, action ) => {
    if (action.type === 'SET_FEELING') {
        console.log('FEEDBACK FEELINGS', action.payload.feeling);
        state.feeling = action.payload.feeling;
    }
    return state;
}

// const reviewReducer = ( state = {}, action) => {
//     if (action.type === 'SUBMIT_FEEDBACK') {
//         console.log('SUBMIT_FEEDBACK');
//         return action.payload;
//     }
//     return state;
// }

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));


