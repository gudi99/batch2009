import React from "react";
import { Modal, Label, Icon } from "semantic-ui-react";
import EditStatusForm from "../forms/EditStatusForm";

class EditStatus extends React.Component {
	state = {};

	render() {
		return (
			<Modal
				trigger={
					<Label attached="top right" as="a">
						<Icon name="edit" />
						Edit
					</Label>
				}
			>
				<Modal.Header>Edit Status</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<EditStatusForm />
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

export default EditStatus;
