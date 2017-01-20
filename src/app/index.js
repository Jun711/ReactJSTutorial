import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { HomeEvent } from "./components/HomeEvent";

console.log("It works!")

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home"
		};
	}
	// component has a lot built-in methods
	// when reactjs thinks it needs to render a component
	onGreet() {
		alert("Hello!");
	}
	// when a function uses this then when we refer to it, we need to use bind

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}
	render() {
		var user = {
			name: "Anna",
			hobbies: ["Sports", "Reading"]
		};
		return( // we can only return one root element, nested elements are fine, no sibling element
			// it is not creating html code just like the following but it is telling ReactJS to sub Header
			// with the imported component 
			<div className="container">
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<Header homeLink={this.state.homeLink}/>
                   	</div>
			   	</div>
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<HomeEvent 
                  	 		name={"Max"} 
                  	 		initialAge={26} 
                  	 		greet={this.onGreet}
                  	 		changeLink={this.onChangeLinkName.bind(this)}
                  	 		initialLinkName={this.state.homeLink}
                  	 	/>         		
                   	</div>
			   	</div>
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<Home name={"Max"} age={26} user={user}>
                  	 		<p>This is a paragraph!</p>
                  	 	</Home>           		
                   	</div>
			   	</div>
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<h1>Hello!</h1>           		
                   	</div>
			   	</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app")); 
// similar to selector in Angular2
// the first argument is the object to render
// the second argument is the place to render it