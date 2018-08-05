import React from "react";
import _ from "lodash";
import faker from "faker";
import {
	Header,
	Grid,
	Dropdown,
	Search,
	Card,
	Responsive,
	Icon,
	Image
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
			<Grid centered textAlign="center" stackable>
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
				<Grid.Row>
					<Responsive minWidth={Responsive.onlyTablet.minWidth}>
						<Card.Group itemsPerRow={4} color="teal">
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src={gImg} />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
						</Card.Group>
					</Responsive>
					<Responsive {...Responsive.onlyMobile}>
						<Card.Group itemsPerRow={1} color="teal">
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src={gImg} />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
							<Card>
								<Image src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
								<Card.Content>
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
									<a>
										<Icon name="pencil" />
										Articles
									</a>&nbsp;&nbsp;&nbsp;
									<a>
										<Icon name="images" />
										Gallery
									</a>
								</Card.Content>
							</Card>
						</Card.Group>
					</Responsive>
				</Grid.Row>
			</Grid>
		);
	}
}

export default StatusPage;
