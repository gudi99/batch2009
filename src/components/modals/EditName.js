import React from "react";
import { Modal, Label, Button, Icon } from "semantic-ui-react";
import EditNameForm from "../forms/EditNameForm";

class EditName extends React.Component {
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
				<Modal.Header>Edit Name and Status</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<EditNameForm />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button color="black" onClick={this.close}>
						Nope
					</Button>
					<Button
						positive
						icon="checkmark"
						labelPosition="right"
						content="Yep, that's me"
						onClick={this.close}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default EditName;
