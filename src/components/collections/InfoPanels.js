import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu, Segment, Responsive, Button, Dropdown } from "semantic-ui-react";
import BasicInfoPanel from "./BasicInfoPanel";
import SchoolInfoPanel from "./SchoolInfoPanel";
import AfterNavodayaPanel from "./AfterNavodayaPanel";
import SocialAccountsPanel from "./SocialAccountsPanel";
import FavouritesPanel from "./FavouritesPanel";
import FirstThingsPanel from "./FirstThingsPanel";
import ArticlesPanel from "./ArticlesPanel";
import GalleryPanel from "./GalleryPanel";

const routes = [
	{
		id: BasicInfoPanel,
		path: "/myprofile/basic",
		exact: true,
		component: BasicInfoPanel,
		key: "BasicInfo",
		icon: "info",
		text: "Basic Info",
		value: "BasicInfo"
	},
	{
		id: SchoolInfoPanel,
		path: "/myprofile/school",
		exact: true,
		component: SchoolInfoPanel,
		key: "SchoolInfo",
		icon: "university",
		text: "School Info",
		value: "SchoolInfo"
	},
	{
		id: AfterNavodayaPanel,
		path: "/myprofile/afternavodaya",
		exact: true,
		component: AfterNavodayaPanel,
		key: "AfterNavodaya",
		icon: "wait",
		text: "After Navodaya",
		value: "AfterNavodaya"
	},
	{
		id: SocialAccountsPanel,
		path: "/myprofile/social",
		exact: true,
		component: SocialAccountsPanel,
		key: "SocialAccounts",
		icon: "at",
		text: "Social Accounts",
		value: "SocialAccounts"
	},
	{
		id: FavouritesPanel,
		path: "/myprofile/favorites",
		exact: true,
		component: FavouritesPanel,
		key: "Favourites",
		icon: "favorite",
		text: "Favourites",
		value: "Favourites"
	},
	{
		id: FirstThingsPanel,
		path: "/myprofile/firstthings",
		exact: true,
		component: FirstThingsPanel,
		key: "FirstThings",
		icon: "first order",
		text: "First Things",
		value: "FirstThings"
	},
	{
		id: ArticlesPanel,
		path: "/myprofile/articles",
		exact: true,
		component: ArticlesPanel,
		key: "Articles",
		icon: "newspaper",
		text: "Articles",
		value: "Articles"
	},
	{
		id: GalleryPanel,
		path: "/myprofile/gallery",
		exact: true,
		component: GalleryPanel,
		key: "Gallery",
		icon: "photo",
		text: "Gallery",
		value: "Gallery"
	}
];

class InfoPanels extends Component {
	constructor(props) {
		super(props);

		this.state = { activeItem: this.props.subcomponent };
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = (e, { value }) => this.setState({ activeItem: value });

	returnSwitch = param => {
		switch (param) {
			case "default":
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel />
					</div>
				];
			case "basic":
				return [
					<div key={this.state.activeItem}>
						<BasicInfoPanel />
					</div>
				];
			case "school":
				return [
					<div key={this.state.activeItem}>
						<SchoolInfoPanel />
					</div>
				];
			case "afternavodaya":
				return [
					<div key={this.state.activeItem}>
						<AfterNavodayaPanel />
					</div>
				];
			case "social":
				return [
					<div key={this.state.activeItem}>
						<SocialAccountsPanel />
					</div>
				];
			case "favourites":
				return [
					<div key={this.state.activeItem}>
						<FavouritesPanel />
					</div>
				];
			case "firstthings":
				return [
					<div key={this.state.activeItem}>
						<FirstThingsPanel />
					</div>
				];
			case "articles":
				return [
					<div key={this.state.activeItem}>
						<ArticlesPanel />
					</div>
				];
			case "gallery":
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

		return (
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Segment color="teal">
						<Menu attached="top" tabular stackable color="teal">
							<Menu.Item
								icon="info"
								as={NavLink}
								to="/myprofile/basic"
								name="BasicInfo"
								active={
									activeItem === "basic" ||
									activeItem === "default"
								}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="university"
								as={NavLink}
								to="/myprofile/school"
								name="SchoolInfo"
								active={activeItem === "school"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="wait"
								as={NavLink}
								to="/myprofile/afternavodaya"
								name="AfterNavodaya"
								active={activeItem === "afternavodaya"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="at"
								as={NavLink}
								to="/myprofile/social"
								name="SocialAccounts"
								active={activeItem === "social"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="favorite"
								as={NavLink}
								to="/myprofile/favorites"
								name="Favourites"
								active={activeItem === "favourites"}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								icon="first order"
								as={NavLink}
								to="/myprofile/firstthings"
								name="FirstThings"
								active={activeItem === "firstthings"}
								onClick={this.handleItemClick}
							/>

							{/* Menu right side */}
							<Menu.Menu position="right">
								<Menu.Item
									icon="newspaper"
									as={NavLink}
									to="/myprofile/articles"
									name="Articles"
									active={activeItem === "articles"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="photo"
									as={NavLink}
									to="/myprofile/gallery"
									name="Gallery"
									active={activeItem === "gallery"}
									onClick={this.handleItemClick}
								/>
							</Menu.Menu>
						</Menu>

						<Segment attached="bottom">
							{this.returnSwitch(activeItem)}
						</Segment>
					</Segment>
				</Responsive>

				<Responsive {...Responsive.onlyMobile}>
					<Button.Group color="teal" attached="top">
						<Button>Tabs</Button>
						<Dropdown
							button
							floating
							openOnFocus
							className="icon"
							defaultValue="BasicInfo"
							// options={options}
							onChange={this.handleChange}
						>
							<Dropdown.Menu>
								{routes.map(route => (
									<Dropdown.Item
										as={NavLink}
										to={route.path}
										key={route.key}
										value={route.value}
										text={route.text}
										icon={route.icon}
									/>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</Button.Group>
					<div attached="bottom" style={{ marginTop: "5px" }}>
						{this.returnSwitch(activeItem)}
					</div>
				</Responsive>
			</div>
		);
	}
}

InfoPanels.propTypes = {
	subcomponent: PropTypes.string.isRequired
};

export default withRouter(InfoPanels);
