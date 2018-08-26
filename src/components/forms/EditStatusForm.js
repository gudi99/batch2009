import React from "react";
import { Form } from "semantic-ui-react";

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
			</Form>
		);
	}
}

export default EditStatusForm;
