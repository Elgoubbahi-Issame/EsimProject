import MontyeSIMBenefits from "../components/MontyeSIMBenefits";
import MontyMobileDivider from "../components/MontyMobileDivider";
import Divfooter1 from "../components/Divfooter1";
import "./WwwmontyesimcomByHtmltod1.css";

import Navigation1 from "../components/Navigation1";
const WwwmontyesimcomByHtmltod1 = () => {
  return (
    <div className="wwwmontyesimcom-by-htmltod2">
      <Navigation1 />
      <div className="frame-group">
        <div className="montye-s-i-m-wrapper">
          <div className="montye-s-i-m">
            <div className="contactarrow">
              <div className="stayconnected">
                <img
                  className="contact-arrowa4cb5823svg-icon"
                  loading="eager"
                  alt=""
                  src="/contactarrowa4cb5823svg2.svg"
                />
                <div className="whatsapplogo">
                  <b className="stay-connected">Stay connected</b>
                </div>
              </div>
            </div>
            <h1 className="heading-1">About us</h1>
          </div>
        </div>
        <div className="say-goodbye-to-container">
          <p className="say-goodbye-to">
            Say goodbye to the physical SIM card and welcome to the latest
          </p>
          <p className="innovative-technology-that">
            innovative technology that will make your life easier than ever:
            eSIM!
          </p>
        </div>
      </div>
      <MontyeSIMBenefits />
      <MontyMobileDivider />
      <Divfooter1 />
      <section className="divfooter-sub1">
        <div className="privacy-policy-terms-condition">
          <b className="link-privacy1">Privacy Policy</b>
          <b className="link-terms1">{`Terms & Conditions`}</b>
          <b className="link-contact3">Contact Us</b>
        </div>
        <b className="monty-esim1">© 2024 Monty eSIM</b>
      </section>
    </div>
  );
};

export default WwwmontyesimcomByHtmltod1;
