import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Label, Icon, Button, Header } from "semantic-ui-react";

import EditSocialAccountsForm from "../forms/EditSocialAccountsForm";

class EditSocialAccounts extends Component {
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
								<Icon name="at" />
								<Icon corner name="edit" />
							</Icon.Group>{" "}
							Edit Social Accounts
						</Header>
						<Modal.Content>
							<Modal.Description>
								<EditSocialAccountsForm />
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
								<Icon name="at" />
								<Icon corner name="edit" />
							</Icon.Group>{" "}
							Edit Social Accounts
						</Header>
						<Modal.Content>
							<Modal.Description>
								<EditSocialAccountsForm />
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

EditSocialAccounts.propTypes = {
	mode: PropTypes.string.isRequired
};

export default EditSocialAccounts;
