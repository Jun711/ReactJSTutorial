import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
console.log("It works!")

class App extends React.Component {
	// component has a lot built-in methods
	// when reactjs thinks it needs to render a component
	render() {
		return( // we can only return one root element, nested elements are fine, no sibling element
			// it is not creating html code just like the following but it is telling ReactJS to sub Header
			// with the imported component 
			<div className="container">
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<Header />
                   	</div>
			   	</div>
			   	<div className="row">
                  	 <div className="col-xs-10 col-xs-offset-1">
                  	 	<Home />           		
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