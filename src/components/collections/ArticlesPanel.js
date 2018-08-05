import React from "react";
import { Grid, Image, Icon, Label, Header, Segment } from "semantic-ui-react";
import BImg from "../images/my pic.jpg";

class ArticlesPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Grid stackable centered>
					<Grid.Row columns="2">
						<Grid.Column>
							<Segment attached="top" color="teal">
								<Header>
									<Image avatar src={BImg} /> Saka Sai Trinath
								</Header>
							</Segment>
							<Segment attached>
								<Header as="h3">Sample Article</Header>
								<Label as="a" color="teal" ribbon="right">
									August 3, 2018
								</Label>
								<p>
									{
										"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
									}
								</p>
								<a>more</a>
							</Segment>
							<Segment attached="bottom" stacked>
								<Icon link name="like" color="red" /> 5 Likes
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns="2">
						<Grid.Column>
							<Segment attached="top" color="teal">
								<Header>
									<Image avatar src={BImg} /> Saka Sai Trinath
								</Header>
							</Segment>
							<Segment attached>
								<Header as="h3">Sample Article</Header>
								<Label as="a" color="teal" ribbon="right">
									August 3, 2018
								</Label>
								<p>
									{
										"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
									}
								</p>
								<a>more</a>
							</Segment>
							<Segment attached="bottom" stacked>
								<Icon link name="like" color="red" /> 5 Likes
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default ArticlesPanel;
