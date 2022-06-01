import React from "react";
import HeaderContent from "../src/HeaderContent";
import Portfolio from "../src/Portfolio";
import About from "../src/About";
import Contact from "../src/Contact.js";
import NavBar from "../src/NavBar";

function Home() {
	return (
		<>
			<NavBar />

			<div className="app--content">
				<HeaderContent />
				<Portfolio />
				<About />
				<Contact />
			</div>
		</>
	);
}

export default Home;
