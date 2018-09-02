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
import EditArticle from "../modals/EditArticle";

class Article extends React.Component {
	state = { open: false };

	onChange = (e, { value }) => {
		if (value === "Edit") {
			this.setState({
				open: true
			});
		}
	};

	onClose = () => {
		this.setState({
			open: false
		});
	};

	render() {
		return (
			<div>
				<Segment.Group>
					<Segment color="teal">
						<Header>
							<Image avatar src={BImg} /> Saka Sai Trinath
							<Header floated="right" as="h4">
								<Dropdown className="icon">
									<Dropdown.Menu>
										<Dropdown.Item
											key="Edit"
											icon="pencil"
											text="Edit"
											value="Edit"
											onClick={this.onChange}
										/>
										<Dropdown.Item
											key="Delete"
											icon="trash alternate"
											text="Delete"
											value="Delete"
											onClick={this.onChange}
										/>
									</Dropdown.Menu>
								</Dropdown>
								<EditArticle
									open={this.state.open}
									onClose={this.onClose}
								/>
							</Header>
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
			</div>
		);
	}
}

export default Article;
