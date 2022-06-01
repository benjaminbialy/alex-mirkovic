import Link from "next/link";
import React from "react";
import PortfolioImage from "../src/PortfolioImage.js";

function Portfolio() {
	return (
		<div className="portfolio">
			<h2 className="portfolio--heading">My Portfolio</h2>
			<p className="portfolio--para">
				A small gallery of recent that I completed. I love taking photos and
				making creative pieces that can be used to teach students how to learn
				and visualise tricky concepts. This is only a drop in the ocean of
				photos, VCE notes and posters I've done. If you are interested in my
				work and would like to find out more, please feel free to contact me or
				wanting to purchase, visit
				<Link href="/shop">
					<a> my shop.</a>
				</Link>
			</p>
			<h3 className="portfolio--heading--captures">
				/ Some of my recent captures / 我最近的一些捕获
			</h3>
			<div className="img--container">
				<PortfolioImage portfolio__image="/AwardPhotoSteelWool.jpeg" />
				<PortfolioImage portfolio__image="/Giraffe.jpeg" />
				<PortfolioImage portfolio__image="/HouseOnWater.jpeg" />
				<PortfolioImage portfolio__image="/ViewOfRiverAndLake.jpeg" />
				<PortfolioImage portfolio__image="/BeachOceanWaves.jpeg" />
			</div>
			<h3 className="portfolio--heading--VCE">
				/ Some of my VCE Notes &#38; Posters / 我的一些 VCE 笔记和海报
			</h3>
			<div className="img--container">
				<PortfolioImage portfolio__image="/PhysicsCheatSheet.jpeg" />
				<PortfolioImage portfolio__image="/AdaptiveBio.jpeg" />
				<PortfolioImage portfolio__image="/OriginsOfAtoms.jpeg" />
				<PortfolioImage portfolio__image="/PlasmaMembrane.jpeg" />
				<PortfolioImage portfolio__image="/MethodologyDiagram.jpeg" />
			</div>
		</div>
	);
}

export default Portfolio;
