import { useState, useEffect } from "react";
import DivcolMd8 from "../components/DivcolMd8";
import "./WwwmontyesimcomByHtmltod7.css";
import Navigation1 from "../components/Navigation1";
import { useNavigate } from "react-router-dom";
const WwwmontyesimcomByHtmltod9 = () => {

  const params = new URLSearchParams(window.location.search);
  const redirect_status = params.get('redirect_status');
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    if (countdown === 0) {
      navigate("/", { replace: true }); // Redirect to home page
    }
    return () => clearInterval(timer);
  }, [countdown, navigate]);
  return (
    <div className="wwwmontyesimcom-by-htmltod8">
      <Navigation1 />
      <section className="navigation-bar">
        <div className={`payment-status ${redirect_status === 'succeeded' ? 'success' : 'failed'}`}>
        <div className="payment-status-icon">
            {/* {paymentStatus === 'Processing' && <i className="fas fa-sync-alt fa-spin"></i>}
            {paymentStatus === 'Success' && <i className="fas fa-check-circle"></i>}
            {paymentStatus === 'Failed' && <i className="fas fa-times-circle"></i>} */}
          </div>
          <div className="payment-status-text">
            <h2>Check out {redirect_status === 'succeeded' ? 'successful 🎉' : 'failure ❌'}</h2>
            <p>Your order might take some time to process. <br />
              Check your order status at your email after about 10mins. <br />
              Incase of any inqueries contact the support at support@onlineshop.com </p>
            <p>Redirecting to home page in {countdown} seconds...</p>
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

export default WwwmontyesimcomByHtmltod9;
