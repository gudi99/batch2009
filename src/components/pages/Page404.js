import React from "react";
import {
	Header,
	Grid,
	Segment,
	Image,
	Container,
	Button
} from "semantic-ui-react";
import IconPic from "../images/icon.png";

const Page404 = () => {
	const h1 = "h1";

	return (
		<Grid
			centered
			verticalAlign="middle"
			style={{ height: window.innerHeight }}
		>
			<Grid.Row columns={2}>
				<Grid.Column textAlign="center">
					<Segment raised textAlign="center" color="teal">
						<Container align="center">
							<Image src={IconPic} size="small" />
						</Container>
						<Header color="red" as={h1}>
							Error 404
						</Header>
						<Header as="h3">
							This is not the page you are looking for!
						</Header>
					</Segment>
					<Button color="teal" content="Go to Home" size="medium" />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Page404;
