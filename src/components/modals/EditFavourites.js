import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Label, Icon, Button, Header } from "semantic-ui-react";

import EditFavouritesForm from "../forms/EditFavouritesForm";

class EditFavourites extends Component {
	state = {};

	render() {
		const { mode } = this.props;

		return (
			<div>
				{mode === "computer" && (
					<Modal
						size="small"
						trigger={
							<Label attached="top right" as="a">
								<Icon name="edit" />
								Edit
							</Label>
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
				)}
				{mode === "mobile" && (
					<Modal
						trigger={
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						}
					>
						<Modal.Header>Edit Favourites Info</Modal.Header>
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
				)}
			</div>
		);
	}
}

EditFavourites.propTypes = {
	mode: PropTypes.string.isRequired
};

export default EditFavourites;
