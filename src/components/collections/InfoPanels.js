import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	withRouter,
	Redirect
} from "react-router-dom";
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
		path: "/d/myprofile/basic",
		exact: true,
		component: BasicInfoPanel
	},
	{
		id: SchoolInfoPanel,
		path: "/d/myprofile/school",
		exact: true,
		component: SchoolInfoPanel
	},
	{
		id: AfterNavodayaPanel,
		path: "/d/myprofile/afternavodaya",
		exact: true,
		component: AfterNavodayaPanel
	},
	{
		id: SocialAccountsPanel,
		path: "/d/myprofile/social",
		exact: true,
		component: SocialAccountsPanel
	},
	{
		id: FavouritesPanel,
		path: "/d/myprofile/favorites",
		exact: true,
		component: FavouritesPanel
	},
	{
		id: FirstThingsPanel,
		path: "/d/myprofile/firstthings",
		exact: true,
		component: FirstThingsPanel
	},
	{
		id: ArticlesPanel,
		path: "/d/myprofile/articles",
		exact: true,
		component: ArticlesPanel
	},
	{
		id: GalleryPanel,
		path: "/d/myprofile/gallery",
		exact: true,
		component: GalleryPanel
	}
];

class InfoPanels extends Component {
	state = { activeItem: "BasicInfo" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleChange = (e, { value }) => this.setState({ activeItem: value });

	/* returnSwitch = param => {
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
			case "Articles":
				return [
					<div key={this.state.activeItem}>
						<ArticlesPanel />
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
	}; */

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
				key: "Articles",
				icon: "list",
				text: "Articles",
				value: "Articles"
			},
			{
				key: "Gallery",
				icon: "photo",
				text: "Gallery",
				value: "Gallery"
			}
		];

		return (
			<Router>
				<div>
					<Responsive minWidth={Responsive.onlyTablet.minWidth}>
						<Segment color="teal">
							<Menu attached="top" tabular stackable color="teal">
								<Menu.Item
									icon="info"
									as={NavLink}
									to="/d/myprofile/basic"
									name="BasicInfo"
									active={activeItem === "BasicInfo"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="university"
									as={NavLink}
									to="/d/myprofile/school"
									name="SchoolInfo"
									active={activeItem === "SchoolInfo"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="wait"
									as={NavLink}
									to="/d/myprofile/afternavodaya"
									name="AfterNavodaya"
									active={activeItem === "AfterNavodaya"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="at"
									as={NavLink}
									to="/d/myprofile/social"
									name="SocialAccounts"
									active={activeItem === "SocialAccounts"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="favorite"
									as={NavLink}
									to="/d/myprofile/favorites"
									name="Favourites"
									active={activeItem === "Favourites"}
									onClick={this.handleItemClick}
								/>
								<Menu.Item
									icon="first order"
									as={NavLink}
									to="/d/myprofile/firstthings"
									name="FirstThings"
									active={activeItem === "FirstThings"}
									onClick={this.handleItemClick}
								/>

								{/* Menu right side */}
								<Menu.Menu position="right">
									<Menu.Item
										icon="list"
										as={NavLink}
										to="/d/myprofile/articles"
										name="Articles"
										active={activeItem === "Articles"}
										onClick={this.handleItemClick}
									/>
									<Menu.Item
										icon="photo"
										as={NavLink}
										to="/d/myprofile/gallery"
										name="Gallery"
										active={activeItem === "Gallery"}
										onClick={this.handleItemClick}
									/>
								</Menu.Menu>
							</Menu>

							<Segment attached="bottom">
								<Switch>
									{routes.map(route => (
										<Route
											key={route.id}
											path={route.path}
											exact={route.exact}
											component={route.component}
										/>
									))}
								</Switch>
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
								options={options}
								onChange={this.handleChange}
							/>
						</Button.Group>
						<div attached="bottom" style={{ marginTop: "5px" }}>
							<Switch>
								<Redirect
									exact
									from="/d/myprofile"
									to="/d/myprofile/basic"
								/>
								<Route
									path="/d/myprofile/basic"
									component={BasicInfoPanel}
								/>
								{routes.map(route => (
									<Route
										key={route.id}
										path={route.path}
										exact={route.exact}
										component={route.component}
									/>
								))}
							</Switch>
						</div>
					</Responsive>
				</div>
			</Router>
		);
	}
}

export default withRouter(InfoPanels);
