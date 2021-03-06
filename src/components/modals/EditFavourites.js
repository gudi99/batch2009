import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import EditFavouritesForm from "../forms/EditFavouritesForm";

class EditFavourites extends Component {
	state = {};

	render() {
		return (
			<div>
				<Modal
					size="small"
					trigger={
						<Container fluid textAlign="right">
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						</Container>
					}
					closeIcon
				>
					<Header>
						<Icon.Group size="large">
							<Icon name="favorite" />
							<Icon corner name="edit" />
						</Icon.Group>{" "}
						Edit Favourites
					</Header>
					<Modal.Content>
						<Modal.Description>
							<EditFavouritesForm />
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button primary icon labelPosition="left">
							<Icon name="checkmark" /> Update
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default EditFavourites;
