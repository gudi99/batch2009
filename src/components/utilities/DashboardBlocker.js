import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import DefaultDashboard from "../pages/DefaultDashboard";
import AnnouncementsPage from "../pages/AnnouncementsPage";
import StatusPage from "../pages/StatusPage";
import FeedPage from "../pages/FeedPage";
import MyProfilePage from "../pages/MyProfilePage";
import SiteGalleryPage from "../pages/SiteGalleryPage";
import ContactPage from "../pages/ContactPage";

const DashboardBlocker = ({ location }) => ({
	render() {
		return (
			<div>
				<Route
					path="/d/dashboard"
					render={props => (
						{location === { pathname: "/d/dashboard" }
							return <DefaultDashboard />;}
					)}
				/>
			</div>
		);
	}
});

DashboardBlocker.propTypes = {
	location: PropTypes.string.isRequired
};

export default DashboardBlocker;
