import React from "react";
import _ from "lodash";
import faker from "faker";
import {
	Header,
	Grid,
	Dropdown,
	Search,
	Card,
	Icon,
	Image,
	Button
} from "semantic-ui-react";
import gImg from "../images/my pic.jpg";

const users = [
	{
		id: 1,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
		name: "Matthew",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 2,
		imgUrl: gImg,
		name: "Saka Sai Trinath",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus:
			"Studying B.Tech at Lovely Professional University, Punjab"
	},
	{
		id: 3,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Elliot Baker",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 4,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
		name: "Steve Sanders",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 5,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 6,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 7,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 8,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 9,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 10,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 11,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 12,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 13,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
		name: "Molly Thomas",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 14,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
		name: "Jenny Lawrence",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 15,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	},
	{
		id: 16,
		imgUrl: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
		name: "Daniel",
		studyPeriod: "2009 (6th) - 2016 (12th)",
		currentStatus: "Studying B.Sc at Gitam University, Visakhapatnam"
	}
];

const source = _.times(5, () => ({
	title: faker.company.companyName(),
	description: faker.company.catchPhrase(),
	image: faker.internet.avatar(),
	price: faker.finance.amount(0, 100, 2, "$")
}));

class StatusPage extends React.Component {
	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	handleResultSelect = (e, { result }) =>
		this.setState({ value: result.title });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(source, isMatch)
			});
			return null;
		}, 300);
	};

	render() {
		const { isLoading, value, results } = this.state;

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
					<Grid.Column width={8}>
						<Search
							loading={isLoading}
							onResultSelect={this.handleResultSelect}
							onSearchChange={_.debounce(
								this.handleSearchChange,
								500,
								{ leading: true }
							)}
							results={results}
							value={value}
							{...this.props}
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
								as="a"
							>
								<Card.Content>
									<Image
										src={user.imgUrl}
										floated="right"
										size="mini"
									/>
									<Card.Header>{user.name}</Card.Header>
									<Card.Meta>
										<span className="date">
											{user.studyPeriod}
										</span>
									</Card.Meta>
									<Card.Description>
										{user.currentStatus}
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<div className="ui two buttons">
										<Button basic color="teal">
											<Icon name="pencil" />
											Articles
										</Button>

										<Button basic color="teal">
											<Icon name="images" />
											Gallery
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
