import React from "react";

export class Home extends React.Component {
	render() {
		let content = "";
		if (true) {
			content = <p>New content!</p>;
		}
		console.log(this.props); //props from React.Component
		var text = "Some text";
		return (
			<div>
				<p>{text}</p>
				<p>In a new Component</p>
				<p>{ 2 + 2 }</p>
				{content}
				{ content.length > 5 ? "content is longer than 5" : "content is shorter than 5" }
				<p>Your name is {this.props.name}, your age is {this.props.age}</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr />
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
};