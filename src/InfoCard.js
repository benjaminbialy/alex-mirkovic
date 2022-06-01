import React from "react";

function InfoCard(props) {
	return (
		<div className="info--card">
			<h3>{props.heading}</h3>
			<p>{props.first__line}</p>
			<p>{props.date}</p>
			<p>{props.second__line}</p>
		</div>
	);
}

export default InfoCard;
