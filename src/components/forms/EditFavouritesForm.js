import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class EditFavouritesForm extends Component {
	state = {};

	render() {
		const favouriteslist = [
			"Color",
			"Dish",
			"Holiday Spot",
			"Singer",
			"Actor",
			"Actress",
			"Car",
			"Bike",
			"Celebrities",
			"Sportsperson",
			"Quote"
		];

		return (
			<Form>
				<p
					style={{ color: "blue" }}
				>{`Click outside this form to close instead.`}</p>
				{favouriteslist.map(favItem => (
					<Form.Input key={favItem} label={`Fav. ${favItem}`} />
				))}
			</Form>
		);
	}
}

export default EditFavouritesForm;
