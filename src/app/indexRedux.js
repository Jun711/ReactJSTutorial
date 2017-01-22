import React from "react";
import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./containers/AppRedux"; // import a wired-up component by connect

const initialState = {
    result: 1,
    lastValues: []
};

// handle multiple actions
// reducer must return a state
// default value in the case when no state is set
// when we first create our store, there is no state, 
// and, thus, the initialState is used to initialize
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state, // result: state.result
                          // lastValues: []
                result: state.result + action.payload, // this will override the result's value
                lastValues: [...state.lastValues, action.payload]
            };
            //state.result += action.payload;
            //state.lastValues.push(action.payload)
            break;
        case "SUBTRACT":
            state = {
                ...state, // result: state.result
                          // lastValues: []
                result: state.result - action.payload, // this will override the result's value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "MULTIPLY":
            state = {
                ...state, // result: state.result
                          // lastValues: []
                result: state.result * action.payload, // this will override the result's value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state, // result: state.result
                          // lastValues: []
                name: action.payload
            };
            //state.result += action.payload;
            //state.lastValues.push(action.payload)
            break;
        case "SET_AGE":
            state = {
                ...state, // result: state.result
                          // lastValues: []
                age: action.payload
            };
            break;
    }
    return state;
};

// currying
const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action); // it is used to propagate the action further
};

// the first argument is the reducer(s)
// the second argument is the initial application state, it will be overriden by reducers which have their own initial state
// the third argument is middleware
// this reducer will give the store a new state
// const store = createStore(combineReducers({mathReducer: mathReducer, userReducer: userReducer}));
// create a store that has multiple reducers
// myLogger() - executing once, myLogger - not executing
// logger() is a function that is returned by redux-logger
const store = createStore(
    combineReducers({mathReducer, userReducer}), 
    {}, 
    applyMiddleware(myLogger, logger())
);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});
// // dispatch action to a reducer
// // other packages that enhance Redux usually use payload
// store.dispatch({
//     type: "ADD",
//     payload: 10
// });

// store.dispatch({
//     type: "SUBTRACT",
//     payload: 5
// });

// store.dispatch({
//     type: "MULTIPLY",
//     payload: 100
// });
// store.dispatch({
//     type: "SET_NAME",
//     payload: "Adam"
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload: 21
// });

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));


