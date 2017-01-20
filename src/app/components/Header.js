import React from "react";

// stateless components
export const Header = (props) => {
	// props input is get by ReactJS function
	return (
		<nav className="navbar navbar-default"> 
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><a href="#">{props.homeLink}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

// export class Header extends React.Component {
// 	render() {
// 		return (
// 			<nav className="navbar navbar-default"> 
// 				<div className="container">
// 					<div className="navbar-header">
// 						<ul className="nav navbar-nav">
// 							<li><a href="#">Home</a></li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		);
// 	}
// }
Header.propTypes = {
	homeLink: React.PropTypes.string,
};