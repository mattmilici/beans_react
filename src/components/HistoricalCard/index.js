import React, { useState } from "react";

function HistoricalCard(props) {
	return (
		<div className="w-11/12 md:w-6/12 h-48 bg-gray-200 rounded-lg flex items-center justify-center m-auto">
			<div>
				<h1 className="text-xl font-bold">{props.day}</h1>
				<h1 className="">
					Overall: <span className="text-xl">{props.overall}</span>
				</h1>
				<h1 className="text-4xl">
					{props.PercentageGood} <span className="text-xl">Good!</span>{" "}
				</h1>
			</div>
		</div>
	);
}

export default HistoricalCard;
