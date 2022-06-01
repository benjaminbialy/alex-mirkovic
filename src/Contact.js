import React from "react";
import GoogleMaps from "../src/GoogleMaps";

function Contact() {
	return (
		<div id="contact" className="contact">
			<div className="contact--interact">
				<h2>Contact Me</h2>
				<p>
					I’m interested in freelance opportunities – so if you need a VCE tutor
					or you are looking for a photographer or editor please feel free to
					email or call me from the buttons below. However, if you have any
					other requests or questions, don’t hesitate to use them either.
				</p>
				<p>As seen on the map, I'm located in Warragul, Victoria, Australia!</p>
				<div className="btn--container">
					<button className="contact--interact--btn">
						<a href="tel:0402610093">Call Me!</a>
					</button>
					<button className="contact--interact--btn">
						<a href="mailto:alexandar.mirkovic.iphone@gmail.com">Email Me!</a>
					</button>
				</div>
				<div className="contact--interact--info">
					<p>Alexandar Mirkovic</p>
					<p>Warragul, Victoria, Australia</p>
					<p>
						<span className="colour--at">@</span>:
						alexandar.mirkovic.iphone@gmail.com
					</p>
				</div>
			</div>
			<div className="contact--map">
				<GoogleMaps />
			</div>
		</div>
	);
}

export default Contact;
