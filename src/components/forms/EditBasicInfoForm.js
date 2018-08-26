import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import _ from "lodash";

class EditBasicInfoForm extends Component {
	state = {};

	render() {
		const dates = _.range(1, 32);
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"July",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		];
		const zodiaclist = [
			"Aries",
			"Leo",
			"Sagittarius",
			"Taurus",
			"Virgo",
			"Capricorn",
			"Gemini",
			"Libra",
			"Aquarius",
			"Cancer",
			"Scorpio",
			"Pisces"
		];

		return (
			<Form>
				<Form.Input label="Nick Name" />
				<Form.Group widths="equal">
					<Form.Field label="Birth date" control="select">
						{dates.map(date => (
							<option key={date} value={date}>
								{date}
							</option>
						))}
					</Form.Field>
					<Form.Field label="Birth month" control="select">
						{months.map(month => (
							<option key={month} value={month}>
								{month}
							</option>
						))}
					</Form.Field>
				</Form.Group>
				<Form.Input label="Gender" control="select">
					<option value="male">Male</option>
					<option value="female">Female</option>
				</Form.Input>
				<Form.Input label="Phone Number" type="number" />
				<Form.Input label="Relationship status" control="select">
					<option value="single">Single</option>
					<option value="married">Married</option>
				</Form.Input>
				<Form.Input label="Home Address" />
				<Form.Input label="Known Languages" />
				<Form.Field label="Zodiac" control="select">
					{zodiaclist.map(zodiac => (
						<option key={zodiac} value={zodiac}>
							{zodiac}
						</option>
					))}
				</Form.Field>
				<Form.Input label="Hobbies" />
				<Form.Input label="Goal" />
			</Form>
		);
	}
}

export default EditBasicInfoForm;
