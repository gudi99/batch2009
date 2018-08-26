import React, { Component } from "react";
import { Form, Divider } from "semantic-ui-react";

class EditSocialAccountsForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Group widths="equal">
					<Form.Input label="Facebook" placeholder="Profile Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Input
					label="WhatsApp"
					placeholder="WhatsApp Number"
					type="number"
				/>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input label="Twitter" placeholder="Profile Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Input label="Email" placeholder="Email address" />
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input
						label="Google Plus"
						placeholder="Profile Name"
					/>
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Input label="Instagram" placeholder="Profile Name" />
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input label="LinkedIn" placeholder="Profile Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input label="YouTube" placeholder="Channel Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input label="Pinterest" placeholder="Profile Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
				<Divider section />
				<Form.Group widths="equal">
					<Form.Input label="Github" placeholder="Profile Name" />
					<Form.Input
						label="Profile Link"
						placeholder="Profile Link"
					/>
				</Form.Group>
			</Form>
		);
	}
}

export default EditSocialAccountsForm;
