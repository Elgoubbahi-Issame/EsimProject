import "./Link.css";
import { Link } from "react-router-dom";

const link = () => {
  return (
    <section className="link12">
      <div className="accept-terms">
        <div className="label-email-wrapper">
          <b className="label-email5">Email</b>
        </div>
        <div className="separator5">
          <div className="o-r">
            <div className="form-button1">
              <input
                className="input10"
                placeholder="Email address"
                type="text"
              />
              <div className="input11">
                <div className="frame-parent7">
                  <div className="label-parent">
                    <input className="label3" type="checkbox" />
                    <div className="label-i">I accept the <span className="heading1"><Link to="/term-condition"><b>Terms & Conditions</b></Link></span></div>
                  </div>
                  {/* <div className="heading1">
                    <b className="label-link">{`Terms & Conditions`}</b>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <div className="button16">
              <button className="form-button2">
                <b className="sign-in7">Sign in</b>
              </button>
              <div className="separator6">
                <div className="o-r1">
                  <div className="separator7" />
                  <div className="por-text">
                    <div className="or">OR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-parent">
            <button className="button17">
              <img
                className="gmail9e7e023fsvg-icon"
                alt=""
                src="/gmail9e7e023fsvg@2x.png"
              />
              <b className="sign-in-with">Sign in with Google</b>
            </button>
            <button className="button18">
              <img
                className="facebook679bee86svg-icon"
                alt=""
                src="/facebook679bee86svg@2x.png"
              />
              <b className="sign-in-with1">Sign in with Facebook</b>
            </button>
          </div>
          <div className="whats-app-logo3">
            <img
              className="whatsapp-logo6d974d7esvg-icon5"
              loading="eager"
              alt=""
              src="/whatsapplogo6d974d7esvg3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default link;
