import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import AddNewFieldInForm from "../modals/AddNewFieldInForm";

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
				{favouriteslist.map(favItem => (
					<Form.Input key={favItem} label={`Fav. ${favItem}`} />
				))}
				<AddNewFieldInForm />
			</Form>
		);
	}
}

export default EditFavouritesForm;
