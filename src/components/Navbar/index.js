import React, { useState, useContext, useEffect } from "react";

import Logo from "./Beans.png";

function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	return (
		<div className="bg-green1">
			<nav className="green1">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="-ml-2 mr-2 flex items-center md:hidden">
								<button
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out mobileNavButton"
									aria-label="Main menu"
									aria-expanded="false"
									onClick={() => setNavbarOpen(!navbarOpen)}
								>
									<svg
										className="block h-6 w-6 mobileNavIconClosed"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>

									<svg
										className="hidden h-6 w-6 mobileNavIconOpen"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="flex-shrink-0 flex items-center">
								<img className="block lg:hidden h-32 w-auto" src={Logo} />
								<img className="hidden lg:block h-32 w-auto" src={Logo} />
							</div>
							<div className="hidden md:ml-6 md:flex md:items-center">
								<a
									href="/"
									className="homeButton px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
								>
									Home
								</a>
								<a
									href="about"
									className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
								>
									Metrics
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
