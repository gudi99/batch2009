import React from "react";
import { Grid, Segment, Header, Icon, Label } from "semantic-ui-react";

class AnnouncementsPage extends React.Component {
	state = {};

	render() {
		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="Announcements" color="teal" />
				</Grid.Row>
				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Segment attached="top" color="teal" secondary>
							<Header as="h3" color="teal">
								Lorem Ipsum
							</Header>
						</Segment>
						<Segment attached>
							<Label as="a" color="green" ribbon="right">
								August 3, 2018
							</Label>
							<p>
								{
									"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam."
								}
								<br />
								<br />
								{
									"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam."
								}
							</p>
						</Segment>
						<Segment attached="bottom" stacked tertiary>
							<Icon link name="like" color="red" /> 5 Likes
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered columns={2}>
					<Grid.Column>
						<Segment attached="top" color="teal" secondary>
							<Header as="h3" color="teal">
								Lorem Ipsum
							</Header>
						</Segment>
						<Segment attached>
							<Label as="a" color="green" ribbon="right">
								August 3, 2018
							</Label>
							<p>
								{
									"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam."
								}
								<br />
								<br />
								{
									"Ut sit amet nunc in nisi efficitur fermentum. Phasellus vehicula tellus et justo pharetra, eu accumsan magna placerat. Phasellus enim enim, tempus vel lectus in, finibus egestas tellus. Ut aliquam porttitor egestas. Etiam justo ipsum, fringilla a sodales et, lacinia lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in finibus leo. Sed aliquam ipsum mi, non rutrum odio viverra a. Etiam et laoreet diam."
								}
							</p>
						</Segment>
						<Segment attached="bottom" stacked tertiary>
							<Icon link name="like" color="red" /> 5 Likes
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default AnnouncementsPage;
