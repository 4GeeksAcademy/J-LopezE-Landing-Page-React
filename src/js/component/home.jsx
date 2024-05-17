import React from "react";

import Navbar from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<div className="mb-4">
					<Jumbotron />
				</div>
				<div className="row mb-5">
					<div className="col-lg d-flex justify-content-center">
						<Card></Card>
					</div>
					<div className="col-lg d-flex justify-content-center">
						<Card></Card>

					</div>
					<div className="col-lg d-flex justify-content-center">
						<Card></Card>

					</div>
					<div className="col-lg d-flex justify-content-center">
						<Card></Card>

					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Home;
