import React from "react";
import { Grid } from "semantic-ui-react";
import Article from "../utilities/Article";

class ArticlesPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Grid stackable centered>
					<Grid.Row columns="2">
						<Grid.Column>
							<Article />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns="2">
						<Grid.Column>
							<Article />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default ArticlesPanel;
