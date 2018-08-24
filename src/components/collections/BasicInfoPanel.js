import React from "react";
import { Table, Icon, Responsive } from "semantic-ui-react";

import EditBasicInfo from "../modals/EditBasicInfo";

class BasicInfoPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Responsive minWidth={Responsive.onlyTablet.minWidth}>
							<EditBasicInfo mode="computer" />
						</Responsive>

						<Responsive {...Responsive.onlyMobile}>
							<EditBasicInfo mode="mobile" />
						</Responsive>
					</div>
				}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="address book" color="teal" />
								Full Name
							</Table.Cell>
							<Table.Cell>Saka Sai Trinath</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="talk" color="teal" />
								You can call me
							</Table.Cell>
							<Table.Cell>Trinath</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="birthday" color="teal" />
								Candles Day
							</Table.Cell>
							<Table.Cell>September 17</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="heterosexual" color="teal" />
								Gender
							</Table.Cell>
							<Table.Cell>Male</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="chess" color="teal" />I am
							</Table.Cell>
							<Table.Cell>Single</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="phone volume" color="teal" />
								Ring me at
							</Table.Cell>
							<Table.Cell>9866153176</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Reside at
							</Table.Cell>
							<Table.Cell>
								Vissannapeta(Village), Kasimkota(Mandal),
								Visakhapatnam
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="language" color="teal" />I Know
							</Table.Cell>
							<Table.Cell>Telugu, Hindi, English</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="puzzle" color="teal" />
								Zodiac
							</Table.Cell>
							<Table.Cell>Pisces</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="book" color="teal" />
								Hobbies
							</Table.Cell>
							<Table.Cell>
								Sleeping, Coding, Learning something new
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="grab" color="teal" />
								Goal
							</Table.Cell>
							<Table.Cell>
								Take care of parents with a good life.
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default BasicInfoPanel;
