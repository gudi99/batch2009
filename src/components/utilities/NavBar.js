import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

class NavBar extends React.Component {
	state = {};

	render() {
		const { activeItem, mode } = this.props;

		return (
			<div>
				{mode === "computer" && (
					<div>
						<Button
							labelPosition="left"
							content="Sidebar"
							icon="bars"
							onClick={this.props.handleButtonClick}
							color="teal"
							size="tiny"
						/>

						{/* <NavBar /> */}
						{activeItem === "announcements" ||
						activeItem === "status" ||
						activeItem === "feed" ||
						activeItem === "contact" ||
						activeItem === "sitegallery" ? (
							<Button.Group floated="right" size="tiny">
								<Button
									to="/d/dashboard"
									as={NavLink}
									icon
									labelPosition="right"
									color="blue"
									onClick={this.props.toDashboard}
								>
									Dashboard
									<Icon name="dashboard" />
								</Button>
								<Button icon labelPosition="right" color="grey">
									Settings
									<Icon name="setting" />
								</Button>
								<Button icon labelPosition="right" color="red">
									logout
									<Icon name="sign out alternate" />
								</Button>
							</Button.Group>
						) : (
							<Button.Group floated="right" size="tiny">
								<Button icon labelPosition="right" color="grey">
									Settings
									<Icon name="setting" />
								</Button>
								<Button icon labelPosition="right" color="red">
									logout
									<Icon name="sign out alternate" />
								</Button>
							</Button.Group>
						)}
					</div>
				)}
				{mode === "mobile" && (
					<div>
						<Button
							icon="bars"
							onClick={this.props.handleButtonClick}
							color="teal"
							size="tiny"
						/>

						{activeItem === "announcements" ||
						activeItem === "status" ||
						activeItem === "feed" ||
						activeItem === "contact" ||
						activeItem === "sitegallery" ? (
							<Button.Group floated="right">
								<Button
									icon="dashboard"
									to="/d/dashboard"
									as={NavLink}
									color="blue"
									size="tiny"
									onClick={this.props.toDashboard}
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
					</div>
				)}
			</div>
		);
	}
}

NavBar.propTypes = {
	activeItem: PropTypes.string.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
	mode: PropTypes.string.isRequired,
	toDashboard: PropTypes.func.isRequired
};

export default withRouter(NavBar);
