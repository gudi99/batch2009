import React from "react";
import { Segment, Icon, Label } from "semantic-ui-react";

class FavouritesPanel extends React.Component {
	state = {};

	render() {
		return (
			<Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Color
					</Segment>
					<Segment>Green</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Dish
					</Segment>
					<Segment>{"My mother's Potato curry"}</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Holiday spot
					</Segment>
					<Segment>Vizag</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Singer
					</Segment>
					<Segment>SP Balasubrahmanyam</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Actor
					</Segment>
					<Segment>Max admires all. if to say, Nani, Jr.NTR</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Actress
					</Segment>
					<Segment>Samantha, Pranitha</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Car
					</Segment>
					<Segment>Benz</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Bike
					</Segment>
					<Segment>Duke</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Celebrities
					</Segment>
					<Segment>Jakie chan, Bruce lee</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Sportsperson
					</Segment>
					<Segment>Sachin</Segment>
				</Segment.Group>
				<Segment.Group horizontal>
					<Segment>
						<Icon name="favorite" />
						Fav. Quote
					</Segment>
					<Segment>Do what you love!</Segment>
				</Segment.Group>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<Label attached="top right" as="a">
						<Icon name="edit" />
						Edit
					</Label>
				}
			</Segment.Group>
		);
	}
}

export default FavouritesPanel;
