import React, { useState, useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";

import TinderCard from "react-tinder-card";
import Summary from "../Summary/index.js";
import BeanTracker from "../BeanTracker/index.js";

import { PageContext } from "../../Context/PageContext";
import { UserData } from "../../Context/UserData";

function TinderApp() {
	const { finalCard, setfinalCard } = useContext(PageContext);
	const { userReasons, setuserReasons } = useContext(UserData);

	const [lastDirection, setLastDirection] = useState();
	const [lastName, setLastName] = useState();

	const [addBean, setaddBean] = useState(false);
	const [Bean, setBean] = useState("");
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log({ Bean });
	};
	function changeBeanStatus() {
		const beanStatus = addBean;
		setaddBean(!beanStatus);
		if (Bean !== "") {
			const ReasonsArray = userReasons.Reasons;
			ReasonsArray.push(Bean);
			console.log({ ...userReasons, Reasons: ReasonsArray });
		}
	}

	const [GoodArray, setGoodArray] = useState([]);
	const [BadArray, setBadArray] = useState([]);
	const characters = userReasons.Reasons;
	///figure out how to remove this global variable
	var GoodArrayHolder = [];
	var BadArrayHolder = [];

	const swiped = (direction, nameToDelete) => {
		if (direction === "left") {
			BadArrayHolder.push(nameToDelete);
			setBadArray(BadArrayHolder);

			const incrementTotalSwipes = userReasons.TotalSwipes++;
			setuserReasons({
				...userReasons,
				TotalSwipes: incrementTotalSwipes,
			});
		} else {
			GoodArrayHolder.push(nameToDelete);
			setGoodArray(GoodArrayHolder);

			const incrementTotalSwipes = userReasons.TotalSwipes++;
			const incrementRightSwipes = userReasons.SwipeRights++;
			setuserReasons({
				...userReasons,
				TotalSwipes: incrementTotalSwipes,
				SwipeRights: incrementRightSwipes,
			});
		}
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
		setLastName(nameToDelete);
		if (nameToDelete === "Overall") {
			setfinalCard(true);
			const swipePercentage = Math.floor(
				(userReasons.SwipeRights / userReasons.TotalSwipes) * 100
			);
			console.log(userReasons.SwipeRights);
			console.log(userReasons.TotalSwipes);
			setuserReasons({
				...userReasons,
				SwipeRightPercentage: swipePercentage,
			});
		}
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div>
			{finalCard ? (
				<Summary />
			) : (
				<div>
					<link
						href="https://fonts.googleapis.com/css?family=Damion&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
						rel="stylesheet"
					/>
					<div className="mt-4 mb-6 border-b-2 mx-3">
						<Moment
							className="block text-3xl"
							format="dddd "
							element="span"
						></Moment>
						<Moment
							className="block text-3xl"
							format="MMMM D, YYYY"
							element="span"
						></Moment>
					</div>
					<h1 className="text-black text-2xl mb-2">Daily Beans</h1>
					<div className="cardContainer w-11/12 md:w-6/12 h-64 flex items-center justify-center m-auto">
						{characters.map((character) => (
							<TinderCard
								className="swipe absolute flex items-center justify-center w-10/12 md:w-64 h-64 text-white text-lg shadow-4xl"
								shadow-xl
								key={character}
								onSwipe={(dir) => swiped(dir, character)}
								onCardLeftScreen={() => outOfFrame(character)}
							>
								<div
									// style={{ backgroundImage: "url(" + character.url + ")" }}
									className="relative rounded-lg border-indigo-500 border-2 bg-center bg-indigo-600 shadow-2xl bg-cover flex items-center justify-center w-10/12 md:w-64 h-64 "
								>
									<h3 className="text-4xl font-bold  ">{character}</h3>
								</div>
							</TinderCard>
						))}
					</div>

					{lastDirection ? (
						<h2 className="infoText w-full h-5 flex justify-center flex">
							You swiped {lastDirection} for {lastName}
						</h2>
					) : (
						<h2 className="infoText w-full h-5 flex justify-center flex" />
					)}
					{addBean ? (
						<div className="m-auto w-2/3 m-5 px-3 flex justify-end">
							<input
								id="NewBean"
								className="bg-gray-200 rounded"
								type="text"
								value={Bean}
								onChange={(e) => setBean(e.target.value)}
							/>

							<input
								className="bg-indigo-500 rounded-2xl p-2 ml-3 "
								onClick={changeBeanStatus}
								type="submit"
								value="Submit"
							/>
						</div>
					) : (
						<div className="m-auto m-5 p-3 flex justify-end">
							<button
								onClick={changeBeanStatus}
								className="w-1/3 m-auto bg-indigo-500 px-4 py-2 border border-transparent rounded-md shadow-lg flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-indigo-500 sm:w-auto sm:inline-flex"
							>
								Add Bean
							</button>
						</div>
					)}
					<BeanTracker GoodArray={GoodArray} BadArray={BadArray} />
				</div>
			)}
		</div>
	);
}

export default TinderApp;
