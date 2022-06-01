import Image from "next/image";
import React from "react";
import { useState } from "react";
import PayPalButtons from "../src/PayPalButtons.js";

function ShopItem(props) {
	const [payment, setPayment] = useState(0);

	const makePayment = () => {
		setPayment(payment + 1);
	};
	const closeMakePayment = () => {
		setPayment(payment - 1);
	};

	return (
		<div
			className="shopitem"
			style={{ flexDirection: props.direction, borderTopColor: props.hexcol }}
		>
			<div className="shopitem--img">
				<Image src={props.shopitem__image} layout="fill" objectFit="cover" />
			</div>
			{payment === 0 ? (
				<div className="shopitem--info">
					<h2 style={{ color: props.hexcol }} className="price">
						{props.idItem}
					</h2>
					<h2 className="product--title">{props.product}</h2>
					<p className="product--desc">{props.desc}</p>
					<div className="buybtn--container">
						<button
							className="shopitem--buybtn"
							style={{ color: props.hexcol, borderColor: props.hexcol }}
						>
							<a onClick={() => makePayment()} className="buy__btn">
								BUY
							</a>
						</button>
					</div>
				</div>
			) : (
				<div className="shopitem--info">
					<h2 style={{ color: props.hexcol }} className="price">
						{props.idItem}
					</h2>
					<h2 className="product--title" style={{ paddingBottom: "20%" }}>
						{props.product}
					</h2>
					<PayPalButtons
						access__link={props.access__link}
						price={props.price}
					/>
					<div className="buybtn--container">
						<button
							className="shopitem--buybtn"
							style={{ color: props.hexcol, borderColor: props.hexcol }}
						>
							<a onClick={() => closeMakePayment()} className="buy__btn">
								BACK
							</a>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default ShopItem;
