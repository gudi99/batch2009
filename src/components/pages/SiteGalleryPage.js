import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import _1 from "../images/pics/2.jpg";
import _2 from "../images/pics/1.jpg";
import _3 from "../images/pics/3.jpg";
import _4 from "../images/pics/4.jpg";
import _5 from "../images/pics/5.jpg";
import _6 from "../images/pics/6.jpg";
import _7 from "../images/pics/7.jpg";
import _8 from "../images/pics/8.jpg";
import _9 from "../images/pics/9.jpg";

const photos = [
	{
		src: _1,
		width: 4,
		height: 3
	},
	{
		src: _2,
		width: 2,
		height: 2
	},
	{
		src: _3,
		width: 2,
		height: 2
	},
	{
		src: _4,
		width: 2,
		height: 2
	},
	{
		src: _5,
		width: 2,
		height: 2
	},
	{
		src: _6,
		width: 2,
		height: 2
	},
	{
		src: _7,
		width: 2,
		height: 2
	},
	{
		src: _8,
		width: 2,
		height: 2
	},
	{
		src: _9,
		width: 2,
		height: 2
	}
];

class SiteGalleryPage extends React.Component {
	constructor() {
		super();

		this.state = {
			currentImage: 0,
			lightboxIsOpen: false
		};
	}

	openLightbox = (event, obj) => {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true
		});
	};

	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	};

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	};

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	};

	render() {
		return (
			<Grid
				style={{
					minHeight: window.innerHeight
				}}
			>
				<Grid.Row centered>
					<Header color="teal" as="h2">
						Site Gallery
					</Header>
				</Grid.Row>
				<Grid.Row>
					<Gallery
						onClick={this.openLightbox}
						photos={photos}
						columns={4}
					/>
					<Lightbox
						images={photos}
						isOpen={this.state.lightboxIsOpen}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						currentImage={this.state.currentImage}
						onClose={this.closeLightbox}
					/>
				</Grid.Row>
			</Grid>
		);
	}
}

export default SiteGalleryPage;
