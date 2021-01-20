import React, { useState } from "react";
import Tinder from "./components/TinderCard/index";
import Navbar from "./components/Navbar/index";
import "./App.css";

import { PageContext } from "./Context/PageContext.js";
import { UserData } from "./Context/UserData.js";

function App() {
	const [finalCard, setfinalCard] = useState(true);
	const [userReasons, setuserReasons] = useState({
		UserName: "Matt",
		SwipeRightPercentage: 0,
		Reasons: [
			"Overall",
			"Work",
			"Friends",
			"Family",
			"Eat Healthy",
			"Run 1 Mile",
			"Realtionship",
		],
		OverallStreak: 0,
		BestBean: "-",
		WorstBean: "-",
		SwipeRights: 0,
		TotalSwipes: 0,
	});

	return (
		<div className="App">
			<Navbar />
			<PageContext.Provider value={{ finalCard, setfinalCard }}>
				<UserData.Provider value={{ userReasons, setuserReasons }}>
					<Tinder />
				</UserData.Provider>
			</PageContext.Provider>
		</div>
	);
}

export default App;
