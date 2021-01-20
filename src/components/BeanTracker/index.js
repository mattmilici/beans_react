import React, { useState } from "react";

function BeanTracker(props) {
	return (
		<div className="">
			<div className="flex justify-center">
				<div className="w-1/2">
					<h1 className="font-bold text-2xl">Bad</h1>
					<div>
						{props.BadArray.map((Bad) => (
							<h1 className="p-3">{Bad}</h1>
						))}
					</div>
				</div>
				<div className="w-1/2">
					<div>
						<h1 className="font-bold text-2xl">Good</h1>
						<div>
							{props.GoodArray.map((Good) => (
								<h1 className="p-3">{Good}</h1>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BeanTracker;
