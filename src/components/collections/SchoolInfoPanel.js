import React from "react";
import { Table, Icon } from "semantic-ui-react";

class SchoolInfoPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Table celled striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>
								<Icon name="calendar" />Studied from
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
								<Icon name="home" />Junior House
							</Table.Cell>
							<Table.Cell>Nilagiri</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="home" />Senior House
							</Table.Cell>
							<Table.Cell>Nilagiri</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				{/* Games and Sports */}
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
								<Icon name="volleyball ball" />Volleyball
							</Table.Cell>
							<Table.Cell>Clusters</Table.Cell>
							<Table.Cell>3</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="kickstarter k" />Kabaddi
							</Table.Cell>
							<Table.Cell>Regionals</Table.Cell>
							<Table.Cell>2</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="gg" />Kho Kho
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="strikethrough" />Shuttle
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="chess knight" />Chess
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="futbol" />Football
							</Table.Cell>
							<Table.Cell>Nationals</Table.Cell>
							<Table.Cell>1</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<Icon name="table tennis" />Table Tennis
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
