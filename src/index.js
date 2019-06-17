import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';


const feedbackReducer = (state = {}, action) => {
    if (action.type === 'SET_FEEDBACK') {
        console.log('FEEDBACK', action.payload);
        return {...state, ...action.payload}
    }
    return state;
}

//    if (action.type === 'SET_UNDERSTANDING') {
//     console.log('FEEDBACK UNDERSTANDING', action.payload.understanding);
//     state.understanding = action.payload.understanding;
// } return state;
// }


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


