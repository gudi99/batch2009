import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import DashboardPage from "./components/pages/DashboardPage";
import Page404 from "./components/pages/Page404";

const subroutes = [
	{
		id: "dashboard",
		exact: true,
		strict: true,
		path: "/dashboard"
	},
	{
		id: "announcements",
		exact: true,
		strict: true,
		path: "/announcements"
	},
	{
		id: "status",
		exact: true,
		strict: true,
		path: "/status"
	},
	{
		id: "feed",
		exact: true,
		strict: true,
		path: "/feed"
	},
	{
		id: "myprofile",
		exact: true,
		path: "/myprofile"
	},
	{
		id: "sitegallery",
		exact: true,
		strict: true,
		path: "/sitegallery"
	},
	{
		id: "contact",
		exact: true,
		strict: true,
		path: "/contact"
	}
];

const App = () => (
	<div>
		<Switch>
			<Route path="/" exact component={WelcomePage} />
			{subroutes.map(route => (
				<Route
					key={route.id}
					path={route.path}
					exact={route.exact}
					strict={route.strict}
					component={() => <DashboardPage subcomponent={route.id} />}
				/>
			))}
			<Route component={Page404} />
		</Switch>
	</div>
);

export default App;
