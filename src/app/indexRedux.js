// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/UserRedux';
// import { Main } from './components/MainRedux';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from "redux";

const initialState = {
    result: 1,
    lastValues: [],
    userName: "Max"
};

// handle multiple actions
// reducer must return a state
// default value in the case when no state is set
// when we first create our store, there is no state, 
// and, thus, the initialState is used to initialize
const reducer = (state = initialState, action) => {
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

// first argument is the reducer(s)
// the second argument is the initial application state
// this reducer will give the store a new state
const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});
// dispatch action to a reducer
// other packages that enhance Redux usually use payload
store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "SUBTRACT",
    payload: 5
});

store.dispatch({
    type: "MULTIPLY",
    payload: 100
});

