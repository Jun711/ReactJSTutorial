import React from "react";
import { render } from "react-dom";
console.log("It works!")

class App extends React.Component {
	// component has a lot built-in methods
	// when reactjs thinks it needs to render a component
	render() {
		return( // we can only return one root element, nested elements are fine, no sibling element
			<div>
			   <h1>Hello!</h1>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app")); 
// similar to selector in Angular2
// the first argument is the object to render
// the second argument is the place to render it