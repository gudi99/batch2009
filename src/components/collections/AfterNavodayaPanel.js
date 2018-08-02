import React from "react";
import { Card } from "semantic-ui-react";

class AfterNavodayaPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
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
