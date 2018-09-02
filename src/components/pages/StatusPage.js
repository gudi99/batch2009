import React from "react";
import {
	Header,
	Grid,
	Dropdown,
	Card,
	Icon,
	Image,
	Button
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import gImg from "../images/my pic.jpg";

const users = [
	{
		id: 1,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
		name: "Matthew",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Matthew",
		value: "Matthew",
		text: "Matthew"
	},
	{
		id: 2,
		imgurl: gImg,
		name: "Saka Sai Trinath",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus:
			"Studying B.Tech at Lovely Professional University, Punjab",
		key: "Saka Sai Trinath",
		value: "Saka Sai Trinath",
		text: "Saka Sai Trinath"
	},
	{
		id: 3,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Elliot Baker",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Elliot Baker",
		value: "Elliot Baker",
		text: "Elliot Baker"
	},
	{
		id: 4,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Steve Sanders",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Steve Sanders",
		value: "Steve Sanders",
		text: "Steve Sanders"
	},
	{
		id: 5,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Molly Thomas",
		value: "Molly Thomas",
		text: "Molly Thomas"
	},
	{
		id: 6,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Jenny Lawrence",
		value: "Jenny Lawrence",
		text: "Jenny Lawrence"
	},
	{
		id: 7,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Daniel s",
		value: "Daniel s",
		text: "Daniel s"
	},
	{
		id: 8,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Daniel",
		value: "Daniel",
		text: "Daniel"
	},
	{
		id: 9,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam",
		key: "Molly Thomas1",
		value: "Molly Thomas1",
		text: "Molly Thomas1"
	},
	{
		id: 10,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 11,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 12,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 13,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 14,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 15,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 16,
		imgurl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyperiod: "2009 (6th) - 2016 (12th)",
		currentstatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	}
];

class StatusPage extends React.Component {
	state = {};

	render() {
		return (
			<Grid
				centered
				textAlign="center"
				stackable
				style={{
					minHeight: window.innerHeight,
					maxHeight:
						(window.innerHeight / 2) * (`${users.length}` / 2)
				}}
			>
				<Grid.Row centered>
					<Header as="h1" content="Status Page" color="teal" />
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={4}>
						<Dropdown
							placeholder="Search user"
							fluid
							search
							selection
							options={users}
						/>
					</Grid.Column>
					<Grid.Column width={2}>
						<Dropdown
							text="Filter"
							icon="filter"
							floating
							labeled
							button
							className="icon"
						>
							<Dropdown.Menu>
								<Dropdown.Header
									icon="tags"
									content="Filter by tag"
								/>
								<Dropdown.Divider />
								<Dropdown.Item>All</Dropdown.Item>
								<Dropdown.Item>Boys</Dropdown.Item>
								<Dropdown.Item>Girls</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row align="middle">
					{users.map(user => (
						<Grid.Column width={4} key={user.id}>
							<Card
								color="teal"
								style={{
									marginTop: "10px",
									marginBottom: "10px"
								}}
								as={Link}
								to="/myprofile#"
							>
								<Card.Content>
									<Image
										src={user.imgurl}
										floated="right"
										size="mini"
									/>
									<Card.Header>{user.name}</Card.Header>
									<Card.Meta>
										<span className="date">
											{user.studyperiod}
										</span>
									</Card.Meta>
									<Card.Description>
										{user.currentstatus}
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className="ui two buttons">
										<Button basic color="teal">
											<Icon name="newspaper" />
											Articles
											{"	"} 16
										</Button>

										<Button basic color="teal">
											<Icon name="images" />
											Gallery
											{"	"} 25
										</Button>
									</div>
								</Card.Content>
							</Card>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		);
	}
}

export default StatusPage;
