import React from "react";
import { Table, Icon, Label } from "semantic-ui-react";

class BasicInfoPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<Label size="medium" as="a">
						<Icon name="edit" />
						Edit
					</Label>
				}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="address book" />
								Full Name
							</Table.Cell>
							<Table.Cell>Saka Sai Trinath</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="talk" />
								You can call me
							</Table.Cell>
							<Table.Cell>Trinath</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="birthday" />
								Candles Day
							</Table.Cell>
							<Table.Cell>September 17</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="heterosexual" />
								Gender
							</Table.Cell>
							<Table.Cell>Male</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="chess" />I am
							</Table.Cell>
							<Table.Cell>Single</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="phone volume" />
								Ring me at
							</Table.Cell>
							<Table.Cell>9866153176</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" />
								Reside at
							</Table.Cell>
							<Table.Cell>
								Vissannapeta(Village), Kasimkota(Mandal),
								Visakhapatnam
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="language" />I Know
							</Table.Cell>
							<Table.Cell>Telugu, Hindi, English</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="puzzle" />
								Zodiac
							</Table.Cell>
							<Table.Cell>Pisces</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="book" />
								Hobbies
							</Table.Cell>
							<Table.Cell>
								Sleeping, Coding, Learning something new
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="grab" />
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
