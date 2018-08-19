import React from "react";
import { Form, Button } from "semantic-ui-react";

class EditStatusForm extends React.Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.TextArea
					placeholder="Enter Current Status"
					name="CurrentStatus"
					id="CurrentStatus"
					// value={data.message}
					// onChange={this.onChange}
					// error={!!errors.message}
				/>
				<Button
					positive
					icon="checkmark"
					labelPosition="left"
					content="Update"
					onClick={this.close}
					floated="right"
					style={{ marginBottom: "15px" }}
				/>
			</Form>
		);
	}
}

export default EditStatusForm;
