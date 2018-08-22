import React from "react";
import { Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";
import WelcomePage from "./components/pages/WelcomePage";
import DashboardPage from "./components/pages/DashboardPage";
import Page404 from "./components/pages/Page404";

const routes = [
	{
		id: WelcomePage,
		path: "/",
		exact: true,
		component: WelcomePage
	},
	{
		id: DashboardPage,
		path: "/d",
		component: DashboardPage
	},
	{
		id: Page404,
		component: Page404
	}
];

const App = () => (
	<div>
		<Switch>
			{routes.map(route => (
				<Route
					key={route.id}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
			<Route component={Page404} />
		</Switch>
	</div>
);

export default App;
