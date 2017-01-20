import React from "react";

export class HomeEvent extends React.Component {
	constructor(props) {
		super(); // because we inherit from React.Component 
		// this.age = props.age;
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		},3000);
		setTimeout(() => {
			this.setState({
				status: 0
			});
		},5000);
		console.log("Constructor");
	}
	componentWillMount() {
		console.log("Component will mount!");
	}
	componentDidMount() {
		console.log("Component did mount!");
	}
	componentWillReceiveProps(nextProps) {
		console.log("Component will receive props!", nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		// should update when are new props or state
		console.log("Should component update?", nextProps, nextState);
		if (nextState.status === 1) {
			return false;
		}
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update", nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Component did update", prevProps, prevState);
	}
	componentWillUnmount() {
		console.log("Component will unmount");
	}

	onMakeOlder() {
		// this.age += 3;
		this.setState({
			age: this.state.age + 1
		}); // check if there is a need to re-render
	}
	onMakeYounger() {
		// this.age += 3;
		this.setState({
			age: this.state.age > 0 ? this.state.age - 1 : 0
		}); // check if there is a need to re-render
	}
	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}
	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		});
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
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
				<hr />
				<button onClick={() => this.onMakeYounger()} className="btn btn-primary">Make me younger!</button>
				<hr />
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr />
				<input type="text" 
				       value={this.state.homeLink} 
				       onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
			</div>
		);
	}
}

HomeEvent.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string
};