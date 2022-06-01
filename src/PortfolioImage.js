import React from "react";
import Image from "next/image";

function PortfolioImage(props) {
	return (
		<div className="portfolio__image">
			<Image
				src={props.portfolio__image}
				layout="fill"
				objectFit="cover"
			></Image>
		</div>
	);
}

export default PortfolioImage;
