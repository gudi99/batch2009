import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Label, Icon, Button, Header } from "semantic-ui-react";

import EditFirstThingsForm from "../forms/EditFirstThingsForm";

class EditFirstThings extends Component {
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
								<Icon name="first order" />
								<Icon corner name="edit" />
							</Icon.Group>{" "}
							Edit First Things
						</Header>
						<Modal.Content>
							<Modal.Description>
								<EditFirstThingsForm />
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
						size="small"
						trigger={
							<Label as="a">
								<Icon name="edit" />
								Edit
							</Label>
						}
						closeIcon
					>
						<Header>
							<Icon.Group size="large">
								<Icon name="first order" />
								<Icon corner name="edit" />
							</Icon.Group>{" "}
							Edit First Things
						</Header>
						<Modal.Content>
							<Modal.Description>
								<EditFirstThingsForm />
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

EditFirstThings.propTypes = {
	mode: PropTypes.string.isRequired
};

export default EditFirstThings;
