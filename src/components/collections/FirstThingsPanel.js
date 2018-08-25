import React from "react";
import { Table, Icon, Responsive } from "semantic-ui-react";

import EditFirstThings from "../modals/EditFirstThings";

class FirstThingsPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Responsive minWidth={Responsive.onlyTablet.minWidth}>
							<EditFirstThings mode="computer" />
						</Responsive>

						<Responsive {...Responsive.onlyMobile}>
							<EditFirstThings mode="mobile" />
						</Responsive>
					</div>
				}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First app you check when you wake up in the
								morning?
							</Table.Cell>
							<Table.Cell>WhatsApp</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First broken bone?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First foreign country you ever visited?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First Instagram, twitter or Facebook post?
							</Table.Cell>
							<Table.Cell>My pic in Instagram</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First make-up item
							</Table.Cell>
							<Table.Cell>Powder</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First plane ride you ever went on?
							</Table.Cell>
							<Table.Cell>None</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time I ever got into trouble at home and
								school?
							</Table.Cell>
							<Table.Cell>With PT Sir in 6th class.</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time you were allowed to put on make-up
							</Table.Cell>
							<Table.Cell>{"I don't do make-up"}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First YouTuber you subscribed to?
							</Table.Cell>
							<Table.Cell>Jabardast</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="first order" color="teal" />
								First time you went shopping on your own?
							</Table.Cell>
							<Table.Cell>In Btech 1st year</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default FirstThingsPanel;
