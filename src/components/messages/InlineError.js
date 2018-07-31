import React from "react";
import PropTypes from "prop-types";
import { Label } from "semantic-ui-react";

const InlineError = props => (
	<Label pointing="below" style={{ color: "#ae5856" }}>
		{props.text}
	</Label>
);

InlineError.propTypes = {
	text: PropTypes.string.isRequired
};

export default InlineError;
