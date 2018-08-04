import React from "react";
import { Card, Responsive } from "semantic-ui-react";
import gImg from "../images/my pic.jpg";

class GalleryPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Card.Group itemsPerRow={4}>
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
					</Card.Group>
				</Responsive>
				<Responsive {...Responsive.onlyMobile}>
					<Card.Group itemsPerRow={1}>
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
						<Card color='teal' image={gImg} />
					</Card.Group>
				</Responsive>
			</div>
		);
	}
}

export default GalleryPanel;
