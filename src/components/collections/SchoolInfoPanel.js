import React from "react";
import { Table, Icon } from "semantic-ui-react";

import EditSchoolInfo from "../modals/EditSchoolInfo";
import EditGames from "../modals/EditGames";

class SchoolInfoPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<EditSchoolInfo />
				}
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="calendar" color="teal" />
								Studied from
							</Table.Cell>
							<Table.Cell>2009</Table.Cell>
							<Table.Cell>to</Table.Cell>
							<Table.Cell>2016</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				{/* House */}
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="2">
								House
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Junior House
							</Table.Cell>
							<Table.Cell>Nilagiri</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" color="teal" />
								Senior House
							</Table.Cell>
							<Table.Cell>Nilagiri</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				{/* Games and Sports */}
				{/* This should appear if user is viewing his profile in My profile time only.
					If he come to this page from status cards, then this should not display */}
				<EditGames />
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="3">
								Games and Sports
							</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>Game</Table.HeaderCell>
							<Table.HeaderCell>Level reached</Table.HeaderCell>
							<Table.HeaderCell>Number of times</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="volleyball ball" color="teal" />
								Volleyball
							</Table.Cell>
							<Table.Cell>Clusters</Table.Cell>
							<Table.Cell>3</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="kickstarter k" color="teal" />
								Kabaddi
							</Table.Cell>
							<Table.Cell>Regionals</Table.Cell>
							<Table.Cell>2</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="gg" color="teal" />
								Kho Kho
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="strikethrough" color="teal" />
								Shuttle
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="chess knight" color="teal" />
								Chess
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="futbol" color="teal" />
								Football
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="table tennis" color="teal" />
								Table Tennis
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default SchoolInfoPanel;
