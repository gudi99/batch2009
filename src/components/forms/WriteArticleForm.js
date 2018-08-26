import React from "react";
import { Form } from "semantic-ui-react";

class EditStatusForm extends React.Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Input label="Title" icon="heading" width={12} />
					<Form.Input label="Tags" icon="tags" width={4} />
				</Form.Group>
				<Form.TextArea label="Body" autoHeight rows={20} />
			</Form>
		);
	}
}

export default EditStatusForm;
