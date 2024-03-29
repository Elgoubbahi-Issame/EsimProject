import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import "./CheckForm.css";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { on } from "events";

export default function CheckoutForm({
    paymentIntentId,
    clientSecret,
    onData,
    bundle,
    email
}) {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const alert = useAlert();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [isSucceeded, setisSucceeded] = useState();
    const [countdown, setCountdown] = useState(10);
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        setTimeout(() => {
            setShowButtons(true);
        }, 500);
        if (!stripe) {
            return;
        }

        if (!clientSecret) {
            return;
        }
        // stripe.retrievePaymentIntent(clientSecret).then((result) => console.log(result));
        if (isSucceeded) {
            let timer = null;
            if (countdown > 0) {
                timer = setInterval(() => {
                    setCountdown(prevCountdown => {
                        if (prevCountdown - 1 === 0) {
                            navigate("/", { replace: true });// Navigate to home page
                            clearInterval(timer);
                        }
                        return prevCountdown - 1;
                    });
                }, 1000);

            }

            return () => clearInterval(timer); // Clear the interval when the component unmounts
        }
    }, [isSucceeded, stripe, countdown, navigate]);
    const confirmPayment = async () => {
        fetch(apiUrl + "confirm-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    paymentIntentId: paymentIntentId,
                    data: {
                        bundle_code: bundle.bundle_code,
                        email: email
                    }

                }

            ),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Data", data);
            })
            .catch((error) => console.error("Error: ", error));

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            console.log(stripe, elements);
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);
        const test = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        });
        // console.log(test);
        const { error } = test

        // await stripe.confirmPayment({
        //     elements,
        //     confirmParams: {
        //         // Make sure to change this to your payment completion page
        //         return_url: "http://localhost:3000/payment-status",
        //     },
        // });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        } else {
            if (test.paymentIntent.status === "succeeded") {
                setisSucceeded(true);
                confirmPayment();
                onData(true);
                setMessage("Payment was successful!");
            }
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs",
    }
    return (<>

        {!isSucceeded && <form id="payment-form" className='check-form' onSubmit={handleSubmit}>

            <PaymentElement id="payment-element" options={paymentElementOptions} />
            {showButtons && <div className="buttons-pay">
                <button
                    // disabled={isLoading || !stripe || !elements} 
                    id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
                <button id="cancel" onClick={
                    async () => {
                        const response = await fetch(apiUrl + "cancel-payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ paymentIntentId: paymentIntentId })
                        });

                        const data = await response.json();

                        if (data.success) {
                            navigate("/plans");
                        } else {
                            alert.error(data.message);
                        }
                    }
                }>
                    <span id="button-text">
                        {"Cancel"}
                    </span>
                </button>
            </div>}
            {/* Show any err2q  n or or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>}
        {isSucceeded && <div className={`payment-status ${isSucceeded ? 'success' : 'failed'}`}>
            <div className="payment-status-text">
                <h2>Check Out {isSucceeded ? 'successful ✅' : 'failure ❌'}</h2>
                <p>Your order might take some time to process. <br />
                    Check your order status at your email after about 1min. <br />
                    Incase of any inqueries contact the support at support@esimshop.com </p>
                <p>Redirecting to home page in <b style={{color: isSucceeded ? 'green' : 'red'}}>{countdown}</b> seconds...</p>
            </div>
        </div>
        }
    </>
    );
}