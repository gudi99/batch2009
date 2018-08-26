import React from "react";
import { Card, Label, Icon, Container } from "semantic-ui-react";

class AfterNavodayaPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Container fluid textAlign="right">
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Container>
					</div>
				}
				<Card.Group centered>
					<Card color="teal">
						<Card.Content>
							<Card.Header>B.Tech Computer Science</Card.Header>
							<Card.Meta>2016 - Present</Card.Meta>
							<Card.Description>
								Lovely Professional University, Punjab, India.
							</Card.Description>
						</Card.Content>
					</Card>
				</Card.Group>
				<Card.Group centered>
					<Card color="teal">
						<Card.Content>
							<Card.Header>B.Tech Computer Science</Card.Header>
							<Card.Meta>2016 - Present</Card.Meta>
							<Card.Description>
								Lovely Professional University, Punjab, India.
							</Card.Description>
						</Card.Content>
					</Card>
				</Card.Group>
			</div>
		);
	}
}

export default AfterNavodayaPanel;
