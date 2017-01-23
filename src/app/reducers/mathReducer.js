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

// to export a function, we first make it a const variable
export default mathReducer;