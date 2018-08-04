import React from "react";
import { Grid, Divider, Image, Icon, Header, Segment, Responsive } from "semantic-ui-react";
import BImg from "../images/my pic.jpg";

class ArticlesPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Grid stackable centered>
					<Grid.Row columns="2">
						<Grid.Column>
							<Responsive minWidth={Responsive.onlyTablet.minWidth}>
								<Segment>
									<Header as="h3">
										<Image src={BImg} /> Saka Sai Trinath
									</Header>
									<Divider />
									<Segment attached="top">
										<Header as="h4">Sample Article</Header>
										<p>2/8/2018</p>
										<p>
											{
												"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
											}
										</p>
										<a>more</a>
									</Segment>
									<Segment attached="bottom">
										<Icon link color="red" name="like" /> 56
										Likes
									</Segment>
								</Segment>
							</Responsive>

							<Responsive {...Responsive.onlyMobile}>
								<Segment>
									<Header as="h3">
										<Image src={BImg} /> Saka Sai Trinath
									</Header>

									<Segment attached="top">
										<Header as="h4">Sample Article</Header>
										<p>2/8/2018</p>
										<p>
											{
												"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
											}
										</p>
										<a>more</a>
									</Segment>
									<Segment attached="bottom">
										<Icon link color="red" name="like" /> 56
										Likes
									</Segment>
								</Segment>
							</Responsive>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns="2">
						<Grid.Column>
							<Segment>
								<Header as="h3">
									<Image src={BImg} /> Saka Sai Trinath
								</Header>
								<Divider />
								<Segment attached="top">
									<Header as="h4">Sample Article</Header>
									<p>2/8/2018</p>
									<p>
										{
											"Interior decorator and small-business owner Deborah Wiener, 46, has carved out a special place in her Silver Spring, Maryland, market. She doesn't just help clients pick out colorful fabrics and comfy furniture"
										}
									</p>
									<a>more</a>
								</Segment>
								<Segment attached="bottom">
									<Icon link color="red" name="like" /> 56
									Likes
								</Segment>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default ArticlesPanel;
