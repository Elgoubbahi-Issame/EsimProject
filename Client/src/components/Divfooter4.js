import DivcolMd5 from "./DivcolMd5";
import DivcolMd4 from "./DivcolMd4";
import "./Divfooter4.css";

const Divfooter4 = () => {
  return (
    <footer className="divfooter8">
      <div className="divcol-md-413">
        <img
          className="divfooter-section-icon13"
          loading="eager"
          alt=""
          src="/divfootersectionicon3.svg"
        />
        <div className="footer-sections">
          <div className="phone3">Phone</div>
          <div className="link-443">+44 207 370 53 10</div>
        </div>
      </div>
      <DivcolMd5
        divfooterSectionIcon="/divfootersectionicon-1.svg"
        email="Email"
        linkSupportmontyesimcom="support@montyesim.com"
      />
      <DivcolMd4
        propFlex="unset"
        propMinWidth="unset"
        propWidth="563px"
        propMargin="unset"
      />
    </footer>
  );
};

export default Divfooter4;
