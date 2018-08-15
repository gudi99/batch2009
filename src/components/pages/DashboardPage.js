import React from "react";
import {
	Sidebar,
	Segment,
	Menu,
	Image,
	Header,
	Button,
	Icon,
	Responsive,
	Label
} from "semantic-ui-react";
import logoImage from "../images/icon.png";
import AnnouncementsPage from "./AnnouncementsPage";
import StatusPage from "./StatusPage";
import FeedPage from "./FeedPage";
import MyProfilePage from "./MyProfilePage";
import SiteGalleryPage from "./SiteGalleryPage";
import ContactPage from "./ContactPage";
import DefaultDashboard from "./DefaultDashboard";

class DashboardPage extends React.Component {
	state = { activeItem: "", visible: false };

	handleItemClick = (e, { name }) =>
		this.setState({
			activeItem: name,
			visible: false
		});

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
			activeItem: "Dashboard"
		});
	};

	returnSwitch = param => {
		switch (param) {
			case "Announcements":
				return [
					<div key={this.state.activeItem}>
						<AnnouncementsPage />
					</div>
				];
			case "Status":
				return [
					<div key={this.state.activeItem}>
						<StatusPage />
					</div>
				];
			case "Feed":
				return [
					<div key={this.state.activeItem}>
						<FeedPage />
					</div>
				];
			case "MyProfile":
				return [
					<div key={this.state.activeItem}>
						<MyProfilePage />
					</div>
				];
			case "SiteGallery":
				return [
					<div key={this.state.activeItem}>
						<SiteGalleryPage />
					</div>
				];
			case "Contact":
				return [
					<div key={this.state.activeItem}>
						<ContactPage />
					</div>
				];
			case "Dashboard":
				return [
					<div key={this.state.activeItem}>
						<DefaultDashboard />
					</div>
				];
			default:
				return [
					<div key={this.state.activeItem}>
						<DefaultDashboard />
					</div>
				];
		}
	};

	render() {
		const { activeItem } = this.state || {};
		const { visible } = this.state;

		return (
			<div>
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						visible={visible}
						vertical
						width="wide"
						animation="overlay"
						onHide={this.handleSideBarHide}
						mobile="true"
						size="huge"
					>
						{/* Brand position */}
						<Menu.Item>
							<Segment
								raised
								role="presentation"
								onClick={this.handleSideBarHide}
							>
								<Header as="h2">
									<Image
										src={logoImage}
										style={{
											height: "80px",
											width: "80px"
										}}
									/>
									Batch 2009
								</Header>
							</Segment>
						</Menu.Item>
						<Menu.Item />

						<Segment raised size="big">
							<Menu.Item
								name="Announcements"
								active={activeItem === "Announcements"}
								onClick={this.handleItemClick}
							>
								<Label color="red" horizontal size="small">
									2
								</Label>
								<Icon name="bullhorn" />
								Announcements
							</Menu.Item>

							<Menu.Item
								name="Status"
								active={activeItem === "Status"}
								onClick={this.handleItemClick}
							>
								<Icon name="address card" />
								Status
							</Menu.Item>

							<Menu.Item
								name="Feed"
								active={activeItem === "Feed"}
								onClick={this.handleItemClick}
							>
								<Label color="red" horizontal size="small">
									10
								</Label>
								<Icon name="feed" />
								Feed
							</Menu.Item>
						</Segment>

						<Menu.Item />
						<Menu.Item
							name="MyProfile"
							active={activeItem === "MyProfile"}
							onClick={this.handleItemClick}
						>
							<Icon name="dashboard" />
							MyProfile
						</Menu.Item>
						<Menu.Item
							name="SiteGallery"
							active={activeItem === "SiteGallery"}
							onClick={this.handleItemClick}
						>
							<Icon name="images" />
							Site Gallery
						</Menu.Item>
						<Menu.Item
							name="Contact"
							active={activeItem === "Contact"}
							onClick={this.handleItemClick}
						>
							<Icon name="alarm" />
							Contact Developer
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher>
						<Segment basic>
							<Responsive
								minWidth={Responsive.onlyTablet.minWidth}
							>
								<Button
									labelPosition="left"
									content="Sidebar"
									icon="bars"
									onClick={this.handleButtonClick}
									color="teal"
									size="tiny"
								/>

								{/* <NavBar /> */}

								{activeItem === "Announcements" ||
								activeItem === "Status" ||
								activeItem === "Feed" ||
								activeItem === "Contact" ||
								activeItem === "SiteGallery" ? (
									<Button.Group floated="right" size="tiny">
										<Button
											icon
											labelPosition="right"
											color="blue"
											onClick={this.toDashboard}
										>
											Dashboard
											<Icon name="dashboard" />
										</Button>
										<Button
											icon
											labelPosition="right"
											color="grey"
										>
											Settings
											<Icon name="setting" />
										</Button>
										<Button
											icon
											labelPosition="right"
											color="red"
										>
											logout
											<Icon name="sign out alternate" />
										</Button>
									</Button.Group>
								) : (
									<Button.Group floated="right" size="tiny">
										<Button
											icon
											labelPosition="right"
											color="grey"
										>
											Settings
											<Icon name="setting" />
										</Button>
										<Button
											icon
											labelPosition="right"
											color="red"
										>
											logout
											<Icon name="sign out alternate" />
										</Button>
									</Button.Group>
								)}

								{/* Page Content */}
								<div>
									<Segment
										style={{
											marginTop: "10px",
											minHeight: window.innerHeight
										}}
									>
										{this.returnSwitch(activeItem)}
									</Segment>
								</div>
							</Responsive>

							<Responsive {...Responsive.onlyMobile}>
								<Button
									icon="bars"
									onClick={this.handleButtonClick}
									color="teal"
									size="tiny"
								/>

								{activeItem === "Announcements" ||
								activeItem === "Status" ||
								activeItem === "Feed" ||
								activeItem === "Contact" ||
								activeItem === "SiteGallery" ? (
									<Button.Group floated="right">
										<Button
											icon="dashboard"
											color="blue"
											size="tiny"
											onClick={this.toDashboard}
										/>
										<Button
											icon="setting"
											color="grey"
											size="tiny"
										/>
										<Button
											icon="sign out alternate"
											color="red"
											size="tiny"
										/>
									</Button.Group>
								) : (
									<Button.Group floated="right">
										<Button
											icon="setting"
											color="grey"
											size="tiny"
										/>
										<Button
											floated="right"
											icon="sign out alternate"
											color="red"
											size="tiny"
										/>
									</Button.Group>
								)}

								{/* Page Content */}
								<Segment
									style={{
										marginTop: "10px",
										marginLeft: "-10px",
										marginRight: "-10px",
										marginBottom: "-10px"
									}}
								>
									{this.returnSwitch(activeItem)}
								</Segment>
							</Responsive>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}

export default DashboardPage;
