import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import { Sidebar, Segment, Responsive } from "semantic-ui-react";

import NavBar from "../utilities/NavBar";
import SideBar from "../utilities/SideBar";

import AnnouncementsPage from "./AnnouncementsPage";
import StatusPage from "./StatusPage";
import FeedPage from "./FeedPage";
import MyProfilePage from "./MyProfilePage";
import SiteGalleryPage from "./SiteGalleryPage";
import ContactPage from "./ContactPage";
import DefaultDashboard from "./DefaultDashboard";

const routes = [
	{
		id: "dashboard",
		exact: true,
		path: "/d/dashboard",
		sidebar: DefaultDashboard
	},
	{
		id: "announcements",
		exact: true,
		path: "/d/announcements",
		sidebar: AnnouncementsPage
	},
	{
		id: "status",
		exact: true,
		path: "/d/status",
		sidebar: StatusPage
	},
	{
		id: "feed",
		exact: true,
		path: "/d/feed",
		sidebar: FeedPage
	},
	{
		id: "myprofile",
		exact: true,
		path: "/d/myprofile",
		sidebar: MyProfilePage
	},
	{
		id: "sitegallery",
		exact: true,
		path: "/d/sitegallery",
		sidebar: SiteGalleryPage
	},
	{
		id: "contact",
		exact: true,
		path: "/d/contact",
		sidebar: ContactPage
	}
];

class DashboardPage extends React.Component {
	state = { activeItem: "dashboard", visible: false };

	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name,
			visible: false
		});
	};

	handleButtonClick = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	handleSideBarHide = () => {
		this.setState({
			visible: false
		});
	};

	toDashboard = () => {
		this.setState({
			activeItem: "dashboard"
		});
	};

	/* returnSwitch = param => {
		switch (param) {
			case "Announcements":
				this.props.history.push("/d/announcements");
				break;
			case "Status":
				this.props.history.push("/d/status");
				break;
			case "Feed":
				this.props.history.push("/d/feed");
				break;
			case "MyProfile":
				this.props.history.push("/d/myprofile");
				break;
			case "SiteGallery":
				this.props.history.push("/d/sitegallery");
				break;
			case "Contact":
				this.props.history.push("/d/contact");
				break;
			case "Dashboard":
				this.props.history.push("/d/dashboard");
				break;
			default:
				this.props.history.push("/d/dashboard");
				break;
		}
	}; */

	returnSwitch = param => {
		switch (param) {
			case "dashboard":
				return [
					<div key={this.state.activeItem}>
						{/* <DefaultDashboard /> */}
						<Redirect push to="/d/dashboard" />
					</div>
				];
			case "announcements":
				return [
					<div key={this.state.activeItem}>
						{/* <AnnouncementsPage /> */}
						<Redirect to="/d/announcements" />
					</div>
				];
			case "status":
				return [
					<div key={this.state.activeItem}>
						{/* <StatusPage /> */}
						<Redirect to="/d/status" />
					</div>
				];
			case "feed":
				return [
					<div key={this.state.activeItem}>
						{/* <FeedPage /> */}
						<Redirect to="/d/feed" />
					</div>
				];
			case "myprofile":
				return [
					<div key={this.state.activeItem}>
						{/* <MyProfilePage /> */}
						<Redirect to="/d/myprofile" />
					</div>
				];
			case "sitegallery":
				return [
					<div key={this.state.activeItem}>
						{/* <SiteGalleryPage /> */}
						<Redirect to="/d/sitegallery" />
					</div>
				];
			case "contact":
				return [
					<div key={this.state.activeItem}>
						{/* <ContactPage /> */}
						<Redirect to="/d/contact" />
					</div>
				];
			default:
				return null;
		}
	};

	render() {
		const { activeItem } = this.state || {};
		const { visible } = this.state;

		return (
			<Router>
				<div>
					<Sidebar.Pushable as={Segment}>
						<SideBar
							visible={visible}
							activeItem={activeItem}
							handleSideBarHide={this.handleSideBarHide}
							handleItemClick={this.handleItemClick}
						/>

						<Sidebar.Pusher>
							<Segment basic>
								<Responsive
									minWidth={Responsive.onlyTablet.minWidth}
								>
									<NavBar
										activeItem={activeItem}
										handleButtonClick={
											this.handleButtonClick
										}
										mode="computer"
										toDashboard={this.toDashboard}
									/>

									{/* Page Content */}
									<div>
										<Segment
											style={{
												marginTop: "10px",
												minHeight: window.innerHeight
											}}
										>
											<Switch>
												{routes.map(route => (
													<Route
														key={route.id}
														path={route.path}
														exact={route.exact}
														component={
															route.sidebar
														}
													/>
												))}
											</Switch>
											{this.returnSwitch(activeItem)}
										</Segment>
									</div>
								</Responsive>

								<Responsive {...Responsive.onlyMobile}>
									<NavBar
										activeItem={activeItem}
										handleButtonClick={
											this.handleButtonClick
										}
										mode="mobile"
										toDashboard={this.toDashboard}
									/>

									{/* Page Content */}
									<Segment
										style={{
											marginTop: "10px",
											marginLeft: "-10px",
											marginRight: "-10px",
											marginBottom: "-10px"
										}}
									>
										<Switch>
											{routes.map(route => (
												<Route
													key={route.id}
													path={route.path}
													exact={route.exact}
													component={route.sidebar}
												/>
											))}
										</Switch>
										{this.returnSwitch(activeItem)}
									</Segment>
								</Responsive>
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</div>
			</Router>
		);
	}
}

DashboardPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default DashboardPage;
