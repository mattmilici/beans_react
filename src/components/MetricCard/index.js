import React, { useState } from "react";

function MetricCard(props) {
	return (
		<div className="m-4  md:w-1/6 ">
			<div className="bg-gray-200 rounded-lg pl-3 text-xl flex justify-between">
				<div className="text-left p-3 text-xl ">{props.MetricName}:</div>
				<div className="text-right p-3 text-xl ">{props.Bean}</div>
			</div>
		</div>
	);
}

export default MetricCard;

// import React, { useState } from "react";

// function MetricCard(props) {
// 	return (
// 		<div className="m-4  md:w-1/6 ">
// 			<h1 className="bg-gray-200 rounded-lg text-left pl-6 text-xl">
// 				{props.MetricName}: <span className="text-2xl"> {props.Bean}</span>
// 			</h1>
// 		</div>
// 	);
// }

// export default MetricCard;
