import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/RootR";
import {Home} from "./components/HomeR";
import {User} from "./components/UserR";

// use browserHistory to get URL like localhost/... instead of localhost/#/...
class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Home} />
					<Route path={"user"} component={User} />
					<Route path={"home"} component={Home} />
				</Route>
				<Route path={"user"} component={User} />
			</Router>
		);
	}
}

render(<App />, window.document.getElementById('app'));