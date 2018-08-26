import React, { Component } from "react";
import { Form } from "semantic-ui-react";
// import _ from "lodash";

class EditSchoolInfoForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<Form.Group widths="equal">
					<Form.Input label="School Joining Year" control="select">
						<option value="6th">2009 (6th)</option>
						<option value="6th">2010 (7th)</option>
						<option value="6th">2011 (8th)</option>
						<option value="6th">2012 (9th)</option>
						<option value="6th">2013 (10th)</option>
						<option value="6th">2014 (11th)</option>
						<option value="6th">2015 (12th)</option>
					</Form.Input>
					<Form.Input label="School Ending Year" control="select">
						<option value="6th">2010 (6th)</option>
						<option value="6th">2011 (7th)</option>
						<option value="6th">2012 (8th)</option>
						<option value="6th">2013 (9th)</option>
						<option value="6th">2014 (10th)</option>
						<option value="6th">2015 (11th)</option>
						<option value="6th">2016 (12th)</option>
					</Form.Input>
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Input label="Junior House" control="select">
						<option value="Aravali">Aravali</option>
						<option value="Nilagiri">Nilagiri</option>
						<option value="Shivalik">Shivalik</option>
						<option value="Udayagiri">Aravali</option>
						<option value="NotApply">NotApply</option>
					</Form.Input>
					<Form.Input label="Senior House" control="select">
						<option value="Aravali">Aravali</option>
						<option value="Nilagiri">Nilagiri</option>
						<option value="Shivalik">Shivalik</option>
						<option value="Udayagiri">Aravali</option>
						<option value="NotApply">NotApply</option>
					</Form.Input>
				</Form.Group>
			</Form>
		);
	}
}

export default EditSchoolInfoForm;
