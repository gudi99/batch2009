import React from "react";
import { Card, Label, Icon, Popup } from "semantic-ui-react";

import AddNewAfterNavodaya from "../modals/AddNewAfterNavodaya";

class AfterNavodayaPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<AddNewAfterNavodaya />
					</div>
				}
				<Card.Group centered>
					<Card color="teal">
						<Card.Content>
							<Card.Header>
								B.Tech Computer Science
								{
									// It should display for the profile user only.
									// Other user viewing another user's profile should not get this.
									<Popup
										trigger={
											<Label attached="top right" as="a">
												<Icon name="delete" />
											</Label>
										}
										content="Delete this card"
									/>
								}
							</Card.Header>
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
							<Card.Header>
								B.Tech Computer Science
								{
									// It should display for the profile user only.
									// Other user viewing another user's profile should not get this.

									<Popup
										trigger={
											<Label attached="top right" as="a">
												<Icon name="delete" />
											</Label>
										}
										content="Delete this card"
									/>
								}
							</Card.Header>
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
