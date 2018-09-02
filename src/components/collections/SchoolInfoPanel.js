import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";

import EditSchoolInfo from "../modals/EditSchoolInfo";
import AddNewGames from "../modals/AddNewGames";

const gameData = [
	{
		id: 1,
		Game: "Volleyball",
		LevelReached: "Clusters",
		NumberOfTimes: 3
	},
	{
		id: 2,
		Game: "Kabaddi",
		LevelReached: "Regionals",
		NumberOfTimes: 2
	},
	{
		id: 3,
		Game: "Kho Kho",
		LevelReached: "Nationals",
		NumberOfTimes: 1
	},
	{
		id: 4,
		Game: "Shuttle",
		LevelReached: "Nationals",
		NumberOfTimes: 1
	},
	{
		id: 5,
		Game: "Chess",
		LevelReached: "Nationals",
		NumberOfTimes: 1
	},
	{
		id: 6,
		Game: "Football",
		LevelReached: "Nationals",
		NumberOfTimes: 1
	},
	{
		id: 7,
		Game: "Table Tennis",
		LevelReached: "Nationals",
		NumberOfTimes: 1
	}
];

class SchoolInfoPanel extends React.Component {
	state = { gameData };

	deleteItem = id => {
		gameData.splice(id, 1);
		this.setState({ gameData });
	};

	GameIconFinder = game => {
		switch (game) {
			case "Volleyball":
				return "volleyball ball";
			case "Kabaddi":
				return "kickstarter k";
			case "Kho Kho":
				return "gg";
			case "Shuttle":
				return "strikethrough";
			case "Chess":
				return "chess knight";
			case "Football":
				return "futbol";
			case "Table Tennis":
				return "table tennis";
			default:
				return null;
		}
	};

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

				{
					/* Games and Sports */
					/* This should appear if user is viewing his profile in My profile time only.
					If he come to this page from status cards, then this should not display */
					<AddNewGames />
				}
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan="4">
								Games and Sports
							</Table.HeaderCell>
						</Table.Row>
						<Table.Row>
							<Table.HeaderCell>Game</Table.HeaderCell>
							<Table.HeaderCell>Level reached</Table.HeaderCell>
							<Table.HeaderCell colSpan="2">
								Number of times
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.state.gameData.map((game, i) => {
							const name = game.Game;
							return (
								<Table.Row key={game.id}>
									<Table.Cell>
										<Icon
											name={this.GameIconFinder(name)}
											color="teal"
										/>
										{game.Game}
									</Table.Cell>
									<Table.Cell>{game.LevelReached}</Table.Cell>
									<Table.Cell>
										{game.NumberOfTimes}
									</Table.Cell>
									<Table.Cell collapsing textAlign="right">
										<Button
											size="mini"
											icon="close"
											onClick={() => this.deleteItem(i)}
										/>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default SchoolInfoPanel;
