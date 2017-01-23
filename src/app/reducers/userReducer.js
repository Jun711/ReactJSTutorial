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

// to export a function, we first make it a const variable
export default userReducer;