import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class EditFavouritesForm extends Component {
	state = {};

	render() {
		const firstthingslist = [
			"First app you check when you wake up in the morning?",
			"First broken bone?",
			"First foreign country you ever visited?",
			"First Instagram, twitter or Facebook post?",
			"First make-up item?",
			"First plane ride you ever went on?",
			"First time I ever got into trouble at home and school?",
			"First time you were allowed to put on make-up?",
			"First YouTuber you subscribed to?",
			"First time you went shopping on your own?"
		];

		return (
			<Form>
				<p
					style={{ color: "blue" }}
				>{`Click outside this form to close instead.`}</p>
				{firstthingslist.map(firstItem => (
					<Form.Input key={firstItem} label={firstItem} />
				))}
			</Form>
		);
	}
}

export default EditFavouritesForm;
