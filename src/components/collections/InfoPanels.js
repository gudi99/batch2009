import React, { Component } from "react";
import { Menu, Segment, Responsive, Button, Dropdown } from "semantic-ui-react";
import BasicInfoPanel from "./BasicInfoPanel";
import SchoolInfoPanel from "./SchoolInfoPanel";
import AfterNavodayaPanel from "./AfterNavodayaPanel";
import SocialAccountsPanel from "./SocialAccountsPanel";
import FavouritesPanel from "./FavouritesPanel";
import FirstThingsPanel from "./FirstThingsPanel";
import PostsPanel from "./PostsPanel";
import GalleryPanel from "./GalleryPanel";

class InfoPanels extends Component {
	state = { activeItem: "BasicInfo" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = (e, { value }) => this.setState({ activeItem: value });

	returnSwitch = param => {
		switch (param) {
			case "BasicInfo":
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel />
					</div>
				];
			case "SchoolInfo":
				return [
					<div key={this.state.activeItem}>
						<SchoolInfoPanel />
					</div>
				];
			case "AfterNavodaya":
				return [
					<div key={this.state.activeItem}>
						<AfterNavodayaPanel />
					</div>
				];
			case "SocialAccounts":
				return [
					<div key={this.state.activeItem}>
						<SocialAccountsPanel />
					</div>
				];
			case "Favourites":
				return [
					<div key={this.state.activeItem}>
						<FavouritesPanel />
					</div>
				];
			case "FirstThings":
				return [
					<div key={this.state.activeItem}>
						<FirstThingsPanel />
					</div>
				];
			case "Posts":
				return [
					<div key={this.state.activeItem}>
						<PostsPanel />
					</div>
				];
			case "Gallery":
				return [
					<div key={this.state.activeItem}>
						<GalleryPanel />
					</div>
				];
			default:
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel />
					</div>
				];
		}
	};

	render() {
		const { activeItem } = this.state;
		const options = [
			{
				key: "BasicInfo",
				icon: "info",
				text: "Basic Info",
				value: "BasicInfo"
			},
			{
				key: "SchoolInfo",
				icon: "university",
				text: "School Info",
				value: "SchoolInfo"
			},
			{
				key: "AfterNavodaya",
				icon: "wait",
				text: "After Navodaya",
				value: "AfterNavodaya"
			},
			{
				key: "SocialAccounts",
				icon: "at",
				text: "Social Accounts",
				value: "SocialAccounts"
			},
			{
				key: "Favourites",
				icon: "favorite",
				text: "Favourites",
				value: "Favourites"
			},
			{
				key: "FirstThings",
				icon: "first order",
				text: "First Things",
				value: "FirstThings"
			},
			{
				key: "Posts",
				icon: "list",
				text: "Posts",
				value: "Posts"
			},
			{
				key: "Gallery",
				icon: "photo",
				text: "Gallery",
				value: "Gallery"
			}
		];

		return (
			<div style={{ marginLeft: "-15px" }}>
				<Responsive minWidth={Responsive.onlyTablet.minWidth} as="menu">
					<Segment color="teal">
						<Menu attached="top" tabular stackable color="teal">
							<Menu.Item
								icon="info"
								name="BasicInfo"
								active={activeItem === "BasicInfo"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="university"
								name="SchoolInfo"
								active={activeItem === "SchoolInfo"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="wait"
								name="AfterNavodaya"
								active={activeItem === "AfterNavodaya"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="at"
								name="SocialAccounts"
								active={activeItem === "SocialAccounts"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="favorite"
								name="Favourites"
								active={activeItem === "Favourites"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="first order"
								name="FirstThings"
								active={activeItem === "FirstThings"}
								onClick={this.handleItemClick}
							/>

							{/* Menu right side */}
							<Menu.Menu position="right">
								<Menu.Item
									icon="list"
									name="Posts"
									active={activeItem === "Posts"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="photo"
									name="Gallery"
									active={activeItem === "Gallery"}
									onClick={this.handleItemClick}
								/>
							</Menu.Menu>
						</Menu>

						<Segment attached="bottom">
							{this.returnSwitch(activeItem)}
						</Segment>
					</Segment>
				</Responsive>

				<Responsive {...Responsive.onlyMobile} as="Menu">
					<div style={{ marginLeft: "-25px" }}>
						<Button.Group color="teal">
							<Button>Tabs</Button>
							<Dropdown
								button
								floating
								openOnFocus
								className="icon"
								options={options}
								onChange={this.handleChange}
							/>
						</Button.Group>
						<Segment attached="bottom">
							{this.returnSwitch(activeItem)}
						</Segment>
					</div>
				</Responsive>
			</div>
		);
	}
}

export default InfoPanels;
