import React from "react";
import { Form } from "semantic-ui-react";

class EditNameForm extends React.Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						placeholder="Enter First name"
						id="Firstname"
						name="Firstname"
					/>
					<Form.Input
						fluid
						placeholder="Enter Middle name"
						id="Middlename"
						name="Middlename"
					/>
					<Form.Input
						fluid
						placeholder="Enter Family name"
						id="Familyname"
						name="Familyname"
					/>
				</Form.Group>
				<Form.TextArea
					placeholder="Enter Current Status"
					name="CurrentStatus"
					id="CurrentStatus"
					// value={data.message}
					// onChange={this.onChange}
					// error={!!errors.message}
				/>
			</Form>
		);
	}
}

export default EditNameForm;
