import React from "react";

// stateless components
export const Header = (props) => {
	// props input is get by ReactJS function
	return (
		<nav className="navbar navbar-default"> 
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><a href="">Home</a></li>
						<li><a href="">User</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};