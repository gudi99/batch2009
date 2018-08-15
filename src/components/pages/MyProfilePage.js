import React from "react";
import { Header, Segment, Image, Grid, Label, Icon } from "semantic-ui-react";
import profileDummyPic from "../images/my pic.jpg";
import InfoPanels from "../collections/InfoPanels";

class MyProfilePage extends React.Component {
	state = {};

	render() {
		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="My Profile" color="teal" />
				</Grid.Row>
				<Grid.Row centered columns={5}>
					<Grid.Column>
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
				</Grid.Row>
				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Segment.Group>
							<Segment color="teal" textAlign="center">
								<Header as="h3" content="Saka Sai Trinath" />
							</Segment>
							<Segment.Group horizontal>
								<Segment as="h5">Current Status</Segment>
								<Segment>
									Studying B.Tech CSE at Lovely Professional
									University
								</Segment>
							</Segment.Group>
							{
								// This should appear if user is viewing his profile in My profile time only.
								// If he come to this page from status cards, then this should not display
								<Label attached="top right" as="a">
									<Icon name="edit" />
									Edit
								</Label>
							}
						</Segment.Group>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<InfoPanels />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default MyProfilePage;
