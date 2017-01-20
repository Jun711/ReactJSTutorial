import React from "react";

export class HomeEvent extends React.Component {
	constructor(props) {
		super(); // because we inherit from React.Component 
		// this.age = props.age;
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: "ChangedLink"
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		},3000);
	}
	onMakeOlder() {
		// this.age += 3;
		this.setState({
			age: this.state.age + 3
		}); // check if there is a need to re-render
	}
	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}
	render() {
		let content = "";
		if (true) {
			content = <p>New content!</p>;
		}
		return (
			<div>
				<hr />
				<p>In a new component!</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr />
				<button onClick={() => this.onMakeOlder} className="btn btn-primary">Make me older!</button>
				<hr />
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr />
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
			</div>
		);
	}
}

HomeEvent.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func
};