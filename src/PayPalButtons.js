import React, { useState, useRef, useEffect } from "react";

function PayPalButtons(props) {
	const { price, access__link } = props;
	const [paidFor, setPaidFor] = useState(false);
	const [error, setError] = useState(null);
	const paypalRef = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "AlexMirkovic Digital Resources",
								amount: {
									currency: "AUD",
									value: price,
								},
							},
						],
						return_url: "/confirmation",
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					setPaidFor(true);
					myButton.close();
				},
				onError: (err) => {
					setError(err);
					console.log(err);
				},
			})
			.render(paypalRef.current);
	}, []);

	if (paidFor) {
		return (
			<div className="paypal__buttons">
				<h2>Thanks for choosing us!</h2>
				<a className="accesslink" href={access__link}>
					Click here to access your item!
				</a>
			</div>
		);
	}

	if (error) {
		return (
			<div className="paypal__buttons">
				Error encountered, please press back and try again.
			</div>
		);
	}

	return <div className="paypal--shop" ref={paypalRef}></div>;
}

export default PayPalButtons;
