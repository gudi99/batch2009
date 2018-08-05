import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
/* import gImg from "../images/my pic.jpg"; */
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

/* const photos = [
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3
	}
]; */

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
			<Grid>
				<Grid.Row centered>
					<Header color="teal" as="h2">
						Site Gallery
					</Header>
				</Grid.Row>
				<Grid.Row>
					<div>
						<Gallery photos={photos} onClick={this.openLightbox} />
						<Lightbox
							images={photos}
							isOpen={this.state.lightboxIsOpen}
							onClickPrev={this.gotoPrevious}
							onClickNext={this.gotoNext}
							currentImage={this.state.currentImage}
							onClose={this.closeLightbox}
						/>
					</div>
				</Grid.Row>
			</Grid>
		);
	}
}

export default SiteGalleryPage;
