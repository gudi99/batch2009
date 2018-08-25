import React from "react";
import { Modal, Label, Icon, Button, Header } from "semantic-ui-react";
import EditStatusForm from "../forms/EditStatusForm";

class EditStatus extends React.Component {
	state = {};

	render() {
		return (
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
						<Icon name="bullseye" />
						<Icon corner name="edit" />
					</Icon.Group>{" "}
					Edit Status
				</Header>
				<Modal.Content>
					<Modal.Description>
						<EditStatusForm />
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon="checkmark"
						labelPosition="left"
						content="Update"
						onClick={this.close}
					/>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default EditStatus;
