import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import DashboardPage from "./components/pages/DashboardPage";

const App = () => (
	<div>
		<Route path="/" exact component={WelcomePage} />
		<Route path="/dashboard" exact component={DashboardPage} />
	</div>
);

export default App;
