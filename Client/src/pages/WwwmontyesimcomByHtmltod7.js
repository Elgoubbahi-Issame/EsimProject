import { useState, useEffect } from "react";
import DivcolMd8 from "../components/DivcolMd8";
import "./WwwmontyesimcomByHtmltod7.css";
import { useLocation, Link } from 'react-router-dom';
import { useAlert } from "react-alert";
import Navigation1 from "../components/Navigation1";
import CheckForm from "../components/CheckForm";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


const WwwmontyesimcomByHtmltod7 = () => {

  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const appearance = {
    theme: 'flat',
    variables: {
      colorPrimary: '#ff7300',
    },
  };

  const alert = useAlert();
  const location = useLocation();
  const bundle = location.state.bundle;
  const [Email, setEmail] = useState("");
  const [Checked, setChecked] = useState(false);
  const [Checkout, setCheckout] = useState(false);
  const [isSucceeded, setisSucceeded] = useState(false);

  const handleData = (data) => {
    setisSucceeded(data);
  };
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          item: {
            code: bundle.bundle_code,
            price: bundle.subscriber_price,
            name: bundle.bundle_name,
            marketing_name: bundle.bundle_marketing_name,
            email: Email
          }

        }

      ),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        setPaymentIntentId(data.paymentIntentId)
      })
      .catch((error) => console.error("Error: ", error));
    console.log("Email", Email);  
  }, [Email]);

  const options = {
    clientSecret,
    appearance,
    locale: 'en'
  };
  return (
    <div className="wwwmontyesimcom-by-htmltod8">
      <Navigation1 />
      <section className="navigation-bar">
        <div className="linkplans">
          <div className="divrow2">
            <div className="divcol-md-121">
              {!isSucceeded && <div className="aboutuslink">
                <div className="contactuslink" onClick={() => {
                  window.history.back();
                }}>
                  <img
                    className="backbtnaaa182d3svg-icon"
                    loading="eager"
                    alt=""
                    src="/backbtnaaa182d3svg.svg"
                  />
                  <div className="go-back" >Go back</div>
                </div>
              </div>}
              {!Checkout && <>
                <div className="labelemail">
                  <div className="divrow3">
                    <div className="divcol">
                      <div className="divrow4">
                        <div className="label1">
                          <div className="email2">Email</div>
                        </div>
                      </div>
                      <div className="wrapper-divrow">

                        {/* <div className="input">
                      <div className="divplaceholder">
                        <div className="email3">Email</div>
                      </div>
                    </div> */}
                        <input
                          className="input"
                          placeholder="Email"
                          type="email"
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="confirm-btn">
                  <div className="back-btn">
                    <div className="form-checkbox">
                      <div className="divform-check">
                        <input className="label2" type="checkbox" onChange={(e) => {
                          setChecked(e.target.checked);
                        }} />
                      </div>
                      <div className="i-confirm-that">
                        I confirm that the above email is valid and does not
                        contain any typos.
                      </div>
                    </div>
                    <div className="total-price">
                      <div className="currency-symbol">
                        <div className="tax">
                          <div className="and-i-accept">And I accept the</div>
                          <Link
                            to={"/term-condition"}
                            className="link-terms4"
                          >{`Terms & Conditions`}</Link>
                          <div className="and-i-understand">
                            and I understand that the product only work with eSIM
                            compatible and carrier-
                          </div>
                        </div>
                        <div className="unlocked-devices">unlocked devices.</div>
                      </div>
                    </div>
                    <div className="divcol-md-122">
                      <button className="button10" disabled={!Checked} onClick={() => {
                        
                        if (Email === "" || !Email.includes("@") || ![
                          "mail.com","gmail.com","yahoo.com","hotmail.com",
                          "outlook.com","aol.com","icloud.com","protonmail.com",
                          "zoho.com","yandex.com","tutanota.com","gmx.com",
                          "yopmail.com","mail.ru","inbox.lv","t-online.de",
                          "web.de","gmx.net","mail.de","email.com","email.cz",
                          "seznam.cz","centrum.cz"].includes(Email.split("@")[1])) {

                          alert.error("Please enter your email correctly");
                        } else {
                          // alert.show("Email sent successfully");
                          setCheckout(true)
                          // CreatePaymentIntent();
                        }
                      }}>
                        <div className="confirm">Confirm</div>
                      </button>
                    </div>
                  </div>
                </div>
              </>}
              {Checkout && clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckForm paymentIntentId={paymentIntentId} clientSecret={clientSecret} onData={handleData} bundle={bundle} email={Email}/>
                </Elements>
              )}
              {/* {Checkout && <>
                <CheckForm />
                <h2>Checkout</h2>
                <div className="divcol-md-122">
                  <button className="button10">
                    <div className="confirm">Pay Now</div>
                  </button>
                </div>
                <div className="divcol-md-122">
                  <button className="button10">
                    <div className="confirm">Cancel</div>
                  </button>
                </div>
              </>

              } */}


            </div>
            {!isSucceeded && <div className="divcol-md-123">
              <div className="divcard16">
                <div className="divrow6">
                  <div className="divcol-md-124">
                    <div className="heading-15">
                      <h2 className="summary">Summary</h2>
                    </div>
                  </div>
                </div>
                <div className="divrow7">
                  <div className="divcol-6">
                    <div className="ptype-text">
                      <div className="subtotal">Subtotal</div>
                    </div>
                  </div>
                  <div className="divcol-61">
                    <div className="pvalue-text">
                      <div className="usd">USD</div>
                      <div className="u-s-d">{bundle.subscriber_price}</div>
                    </div>
                  </div>
                </div>
                <div className="divrow8">
                  <div className="divcol-62">
                    <div className="ptype-text1">
                      <div className="estimated-tax">Estimated Tax</div>
                    </div>
                  </div>
                  <div className="divcol-63">
                    <div className="pvalue-text1">
                      <div className="div">---</div>
                    </div>
                  </div>
                </div>
                <div className="separatormargin">
                  <div className="separator4" />
                </div>
                <div className="divrow9">
                  <div className="divcol-64">
                    <div className="ptype-text2">
                      <div className="total">Total</div>
                    </div>
                  </div>
                  <div className="divcol-65">
                    <div className="pvalue-text2">
                      <h2 className="usd1">USD</h2>
                      <div className="div1">{bundle.subscriber_price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </section>
      <section className="whats-app-logo1">
        <img
          className="whatsapp-logo6d974d7esvg-icon"
          loading="eager"
          alt=""
          src="/whatsapplogo6d974d7esvg6@2x.png"
        />
        <footer className="divfooter2">
          <div className="divrow10">
            <DivcolMd8
              phoneIcon0eb21fd3svg="/phoneicon0eb21fd3svg.svg"
              phone="Phone"
              link442073705310="+44 207 370 53 10"
            />
            <DivcolMd8
              phoneIcon0eb21fd3svg="/emailicond2ebb660svg.svg"
              phone="Email"
              link442073705310="support@montyesim.com"
              propMarginLeft="-3.95px"
              propPadding="var(--padding-mini) var(--padding-smi)"
              propWidth="22px"
              propTextDecoration="none"
            />
            <div className="divcol-md-42">
              <div className="divrow-parent">
                <div className="divrow11">
                  <div className="divfooter-section-icon2">
                    <div className="locationicon1ab2e5b5svg">
                      <div className="locationicon1ab2e5b5svg-fill">
                        <img
                          className="locationicon1ab2e5b5svg1"
                          loading="eager"
                          alt=""
                          src="/locationicon1ab2e5b5svg.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="office">Office</h3>
              </div>
              <div className="headquarters-bridge-house-container">
                <p className="headquarters-bridge-house">
                  Headquarters, Bridge House,
                </p>
                <p className="queen-victoria-street">
                  181 Queen Victoria Street, London EC4V 4EG
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <section className="divfooter-sub4">
        <div className="divrow12">
          <div className="divrow13">
            <div className="divcol1">
              <div className="link9" >
                <div className="pfooter-bullets">
                  Privacy Policy
                </div>
              </div>
            </div>
            <div className="divcol2">
              <div className="link10" >
                <div className="pfooter-bullets1">
                  {`Terms & Conditions`}
                </div>
              </div>
            </div>
            <div className="divcol3">
              <div className="link11" >
                <div className="pfooter-bullets2">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="divcol-sm-12">
            <div className="div2">© 2024</div>
            <div className="monty-esim6">Monty eSIM</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WwwmontyesimcomByHtmltod7;
