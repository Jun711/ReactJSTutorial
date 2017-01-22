import React from "react";
import {connect} from "react-redux"

import { User } from '../components/UserRedux';
import { Main } from '../components/MainRedux';

class App extends React.Component {
    // constructor() {
    //     super();
    //     // state will be handled by redux
    //     // this.state = { 
    //     //     username: "Max"
    //     // };
    // }

    // changeUsername(newName) {
    //     // this.setState({
    //     //     username: newName
    //     // });
    // }

    render() {
    	// <User username={this.props.user.name}/>
    	// name is based of the variable name of the global state 
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

// which property of my global application state
// do I want to use in this component and then to 
// which local property that I want to map them to
// it gets a state passed from redux store
// return a JS object where the key is a property
// that we can use in the component
// we are using all the properties from the global state
// redux will populate the component's props so we can access the value via props
const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	};
};

// key is the props names
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch({
				type: "SET_NAME",
				payload: name
			});
		}
	};
};

// this App class is now passed to the connect function 
// tells react-redux that I want to connect this component to my redux store
// even though there is a provider on the index file that encompasses the App component
// using this, we can choose which property of the global state of the store
// that this component needs
// connect function returns a hooked-up function which is exported
export default connect(mapStateToProps, mapDispatchToProps)(App);

