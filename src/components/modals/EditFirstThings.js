import React, { Component } from "react";
import {
	Modal,
	Label,
	Icon,
	Button,
	Header,
	Container
} from "semantic-ui-react";

import EditFirstThingsForm from "../forms/EditFirstThingsForm";

class EditFirstThings extends Component {
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
			</div>
		);
	}
}

export default EditFirstThings; 
