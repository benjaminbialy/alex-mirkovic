import Image from "next/image";
import Link from "next/link";
import React from "react";
function NavBar() {
	return (
		<div className="navbar">
			<div className="logo--section">
				<Link href="/">
					<a>
						<div className="logo">
							<Image
								alt="logo"
								src={"/logo.png"}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				</Link>
				<Link href={"/"}>
					<a className="logo--section--name">Alex</a>
				</Link>
				<p className="logo--section--info">Photographer + VCE Tutor</p>
			</div>
			<div className="nav">
				<Link href="/shop">
					<a className="nav--item">Shop</a>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
