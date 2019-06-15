import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleWare } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';


get storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleWare(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));


