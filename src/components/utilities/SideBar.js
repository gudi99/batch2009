import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Sidebar,
	Menu,
	Header,
	Segment,
	Icon,
	Image,
	Label
} from "semantic-ui-react";
import logoImage from "../images/icon.png";

class SideBar extends React.Component {
	state = {};

	render() {
		const { visible, activeItem } = this.props;
		return (
			<Sidebar
				as={Menu}
				visible={visible}
				vertical
				width="wide"
				animation="overlay"
				onHide={this.props.handleSideBarHide}
				mobile="true"
				size="huge"
			>
				{/* Brand position */}
				<Menu.Item>
					<Segment
						raised
						role="presentation"
						onClick={this.props.handleSideBarHide}
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
						name="announcements"
						active={activeItem === "announcements"}
						onClick={this.props.handleItemClick}
					>
						<Label
							color="red"
							horizontal
							size="small"
							position="right"
						>
							2
						</Label>
						<Icon name="bullhorn" />
						Announcements
					</Menu.Item>

					<Menu.Item
						name="status"
						active={activeItem === "status"}
						onClick={this.props.handleItemClick}
					>
						<Icon name="address card" />
						Status
					</Menu.Item>

					<Menu.Item
						name="feed"
						active={activeItem === "feed"}
						onClick={this.props.handleItemClick}
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
					name="myprofile"
					active={activeItem === "myprofile"}
					onClick={this.props.handleItemClick}
				>
					<Icon name="dashboard" />
					MyProfile
				</Menu.Item>
				<Menu.Item
					name="sitegallery"
					active={activeItem === "sitegallery"}
					onClick={this.props.handleItemClick}
				>
					<Icon name="images" />
					Site Gallery
				</Menu.Item>
				<Menu.Item
					name="contact"
					active={activeItem === "contact"}
					onClick={this.props.handleItemClick}
				>
					<Icon name="alarm" />
					Contact Developer
				</Menu.Item>
			</Sidebar>
		);
	}
}

SideBar.propTypes = {
	activeItem: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	handleSideBarHide: PropTypes.func.isRequired,
	handleItemClick: PropTypes.func.isRequired
};

export default SideBar;
