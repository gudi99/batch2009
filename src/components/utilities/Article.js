import React from "react";
import {
	Header,
	Image,
	Dropdown,
	Segment,
	Label,
	Icon
} from "semantic-ui-react";
import BImg from "../images/my pic.jpg";

class Article extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Segment attached="top" color="teal">
					<Header>
						<Image avatar src={BImg} /> Saka Sai Trinath
						<Header floated="right" as="h4">
							<Dropdown
								options={[
									{
										key: "Edit",
										icon: "pencil",
										text: "Edit",
										value: "Edit"
									},
									{
										key: "Delete",
										icon: "trash alternate",
										text: "Delete",
										value: "Delete"
									}
								]}
							/>
						</Header>
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
			</div>
		);
	}
}

export default Article;
