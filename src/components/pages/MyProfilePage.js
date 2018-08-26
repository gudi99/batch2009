import React from "react";
import {
	Route,
	withRouter,
	Switch,
	BrowserRouter as Router
} from "react-router-dom";
import {
	Header,
	Segment,
	Image,
	Grid,
	Label,
	Icon,
	Button
} from "semantic-ui-react";
import profileDummyPic from "../images/my pic.jpg";
import InfoPanels from "../collections/InfoPanels";
import EditStatus from "../modals/EditStatus";

const subroutes = [
	{
		id: "default",
		path: "/myprofile",
		exact: true
	},
	{
		id: "basic",
		path: "/myprofile/basic",
		exact: true
	},
	{
		id: "school",
		path: "/myprofile/school",
		exact: true
	},
	{
		id: "afternavodaya",
		path: "/myprofile/afternavodaya",
		exact: true
	},
	{
		id: "social",
		path: "/myprofile/social",
		exact: true
	},
	{
		id: "favourites",
		path: "/myprofile/favorites",
		exact: true
	},
	{
		id: "firstthings",
		path: "/myprofile/firstthings",
		exact: true
	},
	{
		id: "articles",
		path: "/myprofile/articles",
		exact: true
	},
	{
		id: "gallery",
		path: "/myprofile/gallery",
		exact: true
	}
];

class MyProfilePage extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<Router>
				<Grid
					centered
					textAlign="center"
					stackable
					verticalAlign="middle"
				>
					<Grid.Row centered>
						<Header as="h1" content="My Profile" color="teal" />
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column width={3}>
							<Segment textAlign="center" stacked raised>
								<Image
									src={profileDummyPic}
									size="medium"
									centered
								/>
								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<Label attached="top right" as="a">
										<Icon name="upload" />
										Upload
									</Label>
								}
							</Segment>
						</Grid.Column>
						{/* </Grid.Row>
				<Grid.Row centered columns={2}> */}
						<Grid.Column width={8}>
							<Segment.Group>
								<Segment color="teal" textAlign="center">
									<Header
										as="h3"
										content="Saka Sai Trinath"
									/>
								</Segment>
								<Segment.Group horizontal>
									<Segment as="h5">
										<Icon name="bullseye" />
										Current Status
									</Segment>
									<Segment>
										Studying B.Tech CSE at Lovely
										Professional University
									</Segment>
								</Segment.Group>

								{
									// This should appear if user is viewing his profile in My profile time only.
									// If he come to this page from status cards, then this should not display
									<EditStatus />
								}
							</Segment.Group>
							<Segment.Group horizontal>
								<Segment as="h5" color="teal">
									Articles
								</Segment>
								<Segment color="teal">4</Segment>
								<Segment as="h5" color="teal">
									Gallery
								</Segment>
								<Segment color="teal">16</Segment>
							</Segment.Group>
						</Grid.Column>
					</Grid.Row>

					{/* It should be displayed only for the own user. Not to the other */}
					<Grid.Row centered>
						<Grid.Column width={3}>
							<Button
								animated="fade"
								size="big"
								color="teal"
								basic
							>
								<Button.Content visible>
									Write Article
								</Button.Content>
								<Button.Content hidden>
									<Icon name="pencil" />
								</Button.Content>
							</Button>
						</Grid.Column>
						<Grid.Column width={3}>
							<Button
								animated="fade"
								size="big"
								color="teal"
								basic
							>
								<Button.Content visible>
									Upload to Gallery
								</Button.Content>
								<Button.Content hidden>
									<Icon name="photo" />
								</Button.Content>
							</Button>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<Switch>
								{subroutes.map(route => (
									<Route
										key={route.id}
										path={route.path}
										exact={route.exact}
										component={() => (
											<InfoPanels
												subcomponent={route.id}
											/>
										)}
									/>
								))}
							</Switch>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Router>
		);
	}
}

export default withRouter(MyProfilePage);
