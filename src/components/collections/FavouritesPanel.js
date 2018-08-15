import React from "react";
import { Segment, Icon, Label, Responsive } from "semantic-ui-react";

class FavouritesPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				{
					// This should appear if user is viewing his profile in My profile time only.
					// If he come to this page from status cards, then this should not display
					<div>
						<Responsive minWidth={Responsive.onlyTablet.minWidth}>
							<Label attached="top right" as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Responsive>

						<Responsive {...Responsive.onlyMobile}>
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Responsive>
					</div>
				}
				<Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Color
						</Segment>
						<Segment>Green</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Dish
						</Segment>
						<Segment>{"My mother's Potato curry"}</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Holiday spot
						</Segment>
						<Segment>Vizag</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Singer
						</Segment>
						<Segment>SP Balasubrahmanyam</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Actor
						</Segment>
						<Segment>
							Max admires all. if to say, Nani, Jr.NTR
						</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Actress
						</Segment>
						<Segment>Samantha, Pranitha</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Car
						</Segment>
						<Segment>Benz</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Bike
						</Segment>
						<Segment>Duke</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Celebrities
						</Segment>
						<Segment>Jakie chan, Bruce lee</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Sportsperson
						</Segment>
						<Segment>Sachin</Segment>
					</Segment.Group>
					<Segment.Group horizontal>
						<Segment>
							<Icon name="favorite" color="teal" />
							Fav. Quote
						</Segment>
						<Segment>Do what you love!</Segment>
					</Segment.Group>
				</Segment.Group>
			</div>
		);
	}
}

export default FavouritesPanel;
