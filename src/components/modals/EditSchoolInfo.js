import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Label, Icon, Button } from "semantic-ui-react";

import EditSchoolInfoForm from "../forms/EditSchoolInfoForm";

class EditSchoolInfo extends Component {
	state = {};

	render() {
		const { mode } = this.props;

		return (
			<div>
				{mode === "computer" && (
					<Modal
						trigger={
							<Label attached="top right" as="a">
								<Icon name="edit" />
								Edit
							</Label>
						}
					>
						<Modal.Header>Edit School Info</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<EditSchoolInfoForm />
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
						<Modal.Header>Edit School Info</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<EditSchoolInfoForm />
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

EditSchoolInfo.propTypes = {
	mode: PropTypes.string.isRequired
};

export default EditSchoolInfo;
