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
				style={{ minHeight: window.innerHeight }}
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
					{/* <Responsive minWidth={Responsive.onlyTablet.minWidth}> */}
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
									floated="right"
									size="mini"
								/>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image src={gImg} floated="right" size="mini" />
								<Card.Header>Saka Sai Trinath</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Tech at Lovely Professional
									University, Punjab
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
									floated="right"
									size="mini"
								/>
								<Card.Header>Elliot Baker</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
									floated="right"
									size="mini"
								/>
								<Card.Header>Steve Sanders</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/molly.png"
									floated="right"
									size="mini"
								/>
								<Card.Header>Molly Thomas</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
									floated="right"
									size="mini"
								/>
								<Card.Header>Jenny Lawrence</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
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
					<Grid.Column width={4}>
						<Card color="teal">
							<Card.Content>
								<Image
									src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
									floated="right"
									size="mini"
								/>
								<Card.Header>Daniel</Card.Header>
								<Card.Meta>
									<span className="date">
										2009 (6th) - 2016 (12th)
									</span>
								</Card.Meta>
								<Card.Description>
									Studying B.Sc at Gitam University,
									Visakhapatnam
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button basic color="teal">
										<Icon name="pencil" />
										Articles
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button basic color="teal">
										<Icon name="images" />
										Gallery
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default StatusPage;
