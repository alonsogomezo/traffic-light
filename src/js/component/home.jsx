import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setColor("red")}
				className={
					"luz roja" + (color === "red" ? " brilla" : "")
				}></div>
			<div
				onClick={() => setColor("yellow")}
				className={
					"luz amarilla" + (color === "yellow" ? " brilla" : "")
				}></div>
			<div
				onClick={() => setColor("green")}
				className={
					"luz verde" + (color === "green" ? " brilla" : "")
				}></div>
		</div>
	);
};

export default Home;
