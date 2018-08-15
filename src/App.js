import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import DashboardPage from "./components/pages/DashboardPage";
import Page404 from "./components/pages/Page404";

const App = () => (
	<div>
		<Switch>
			<Route path="/" exact component={WelcomePage} />
			<Route path="/dashboard" component={DashboardPage} />
			<Route component={Page404} />
		</Switch>
	</div>
);

export default App;
