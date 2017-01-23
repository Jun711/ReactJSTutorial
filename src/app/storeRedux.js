import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

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
// const store = createStore(
//     combineReducers({mathReducer, userReducer}), 
//     {}, 
//     applyMiddleware(myLogger, logger())
// );

export default createStore(
	combineReducers({
		math,
		user
	}),
	{},
	applyMiddleware(logger())
);