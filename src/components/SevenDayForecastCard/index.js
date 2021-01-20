import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Test from "../HistoricalCard/index";

function SevenDayForecastCard() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4.3,
			slidesToSlide: 3.3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3.3,
			slidesToSlide: 2.3, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2.3,
			slidesToSlide: 1.3, // optional, default to 1.
		},
	};
	return (
		<div>
			<h1 className="text-black text-4xl mb-6 mt-10">Seven Day Historicals</h1>
			<Carousel
				className="m-auto"
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={false}
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={50}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				// itemClass="carousel-item-padding-20-px"
			>
				<div className="m-auto">
					<Test day="Monday" overall="Good!" PercentageGood="60%" />
				</div>
				<div className="">
					<Test day="Tuesday" overall="Bad!" PercentageGood="49%" />
				</div>
				<div className="">
					<Test day="Wednesday" overall="Bad!" PercentageGood="30%" />
				</div>
				<div className="">
					<Test day="Thursday" overall="Good!" PercentageGood="76%" />
				</div>
				<div className="">
					<Test day="Friday" overall="Good!" PercentageGood="89%" />
				</div>
				<div className="">
					<Test day="Saturday" overall="Good!" PercentageGood="51%" />
				</div>
				<div className="">
					<Test day="Sunday" overall="Bad!" PercentageGood="46%" />
				</div>
			</Carousel>
		</div>
	);
}

export default SevenDayForecastCard;
