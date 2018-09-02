import React from "react";
import { Header, Grid, Segment, Icon, Label, Image } from "semantic-ui-react";
import BImg from "../images/my pic.jpg";

class FeedPage extends React.Component {
	state = {};

	render() {
		return (
			<Grid centered textAlign="center" stackable>
				<Grid.Row centered>
					<Header as="h1" content="Feed" color="teal" />
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Segment.Group>
							<Segment color="teal">
								<Header>
									<Image avatar src={BImg} /> Saka Sai Trinath
								</Header>
								<Label.Group color="teal" size="mini">
									<Label as="a">Memory</Label>
									<Label as="a">Navodaya Days</Label>
									<Label as="a">12th class</Label>
								</Label.Group>
							</Segment>
							<Segment.Group>
								<Segment>
									<Header as="h3">Sample Article</Header>
									<Label as="a" color="teal" ribbon="right">
										August 3, 2018
									</Label>
									<p>
										{
											"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture."
										}
										<br />
										{
											"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
										}
									</p>
								</Segment>
							</Segment.Group>
							<Segment stacked>
								<Icon link name="like" color="red" /> 5 Likes
							</Segment>
						</Segment.Group>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Segment.Group>
							<Segment color="teal">
								<Header>
									<Image avatar src={BImg} /> Saka Sai Trinath
								</Header>
								<div>
									<Label size="mini" as="a" color="teal">
										Memory
									</Label>
									<Label size="mini" as="a" color="teal">
										Navodaya Days
									</Label>
									<Label size="mini" as="a" color="teal">
										12th class
									</Label>
								</div>
							</Segment>
							<Segment.Group>
								<Segment>
									<Header as="h3">Sample Article</Header>
									<Label as="a" color="teal" ribbon="right">
										August 3, 2018
									</Label>
									<p>
										{
											"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture."
										}
										<br />
										{
											"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
										}
									</p>
								</Segment>
							</Segment.Group>
							<Segment stacked>
								<Icon link name="like" color="red" /> 5 Likes
							</Segment>
						</Segment.Group>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default FeedPage;
