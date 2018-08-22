import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
	Redirect
} from "react-router-dom";
import { connect } from "react-redux";
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
		path: "/dashboard",
		sidebar: DefaultDashboard
	},
	{
		id: "announcements",
		exact: true,
		path: "/announcements",
		sidebar: AnnouncementsPage
	},
	{
		id: "status",
		exact: true,
		path: "/status",
		sidebar: StatusPage
	},
	{
		id: "feed",
		exact: true,
		path: "/feed",
		sidebar: FeedPage
	},
	{
		id: "myprofile",
		exact: true,
		path: "/myprofile",
		sidebar: MyProfilePage
	},
	{
		id: "sitegallery",
		exact: true,
		path: "/sitegallery",
		sidebar: SiteGalleryPage
	},
	{
		id: "contact",
		exact: true,
		path: "/contact",
		sidebar: ContactPage
	}
];

class DashboardPage extends React.Component {
	state = { activeItem: "", visible: false };

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
			activeItem: ""
		});
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
														path={
															this.props.match
																.path +
															route.path
														}
														exact={route.exact}
														component={
															route.sidebar
														}
													/>
												))}
												<Route
													component={DefaultDashboard}
												/>
											</Switch>
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
													component={route.component}
												/>
											))}
											<Route
												render={() => (
													<DefaultDashboard />
												)}
											/>
										</Switch>
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
		push: PropTypes.func.isRequired,
		match: PropTypes.shape({
			path: PropTypes.string.isRequired
		}),
		isConfirmend: PropTypes.bool.isRequired
	}).isRequired
};

function mapStateToProps(state) {
	return {
		isConfirmend: !!state.user
	};
}

export default withRouter(connect(mapStateToProps)(DashboardPage));
