import React, { Component } from "react";
import { Form } from "semantic-ui-react";
// import _ from "lodash";

class EditSchoolInfoForm extends Component {
	state = {};

	render() {
		return (
			<Form>
				<p
					style={{ color: "blue" }}
				>{`Click outside this form to close instead.`}</p>
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
				<Form.Group widths="equal">
					<Form.Input label="Game or Sport" control="select">
						<option value="Volleyball">Volleyball</option>
						<option value="Kabaddi">Kabaddi</option>
						<option value="Kho Kho">Kho Kho</option>
						<option value="Shuttle">Shuttle</option>
						<option value="Chess">Chess</option>
						<option value="Football">Football</option>
						<option value="Table Tennis">Table Tennis</option>
						<option value="Yoga">Yoga</option>
					</Form.Input>
					<Form.Input label="Level Reached" control="select">
						<option value="Clusters">Clusters</option>
						<option value="Regionals">Regionals</option>
						<option value="Nationals">Nationals</option>
						<option value="SGFI">SGFI</option>
					</Form.Input>
					<Form.Input label="No of times reached" type="number" />
				</Form.Group>
			</Form>
		);
	}
}

export default EditSchoolInfoForm;
