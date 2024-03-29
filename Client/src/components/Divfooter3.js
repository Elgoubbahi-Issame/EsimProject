import DivcolMd4 from "./DivcolMd4";
import "./Divfooter3.css";

const Divfooter3 = () => {
  return (
    <footer className="divfooter7">
      <div className="footer-section-icons">
        <div className="divcol-md-410">
          <img
            className="divfooter-section-icon10"
            loading="eager"
            alt=""
            src="/divfootersectionicon3.svg"
          />
          <div className="frame-phone-email-office">
            <h3 className="phone2">Phone</h3>
            <div className="link-442">+44 207 370 53 10</div>
          </div>
        </div>
        <div className="divcol-md-411">
          <img
            className="divfooter-section-icon11"
            loading="eager"
            alt=""
            src="/divfootersectionicon-1.svg"
          />
          <div className="email-parent">
            <h3 className="email5">Email</h3>
            <div className="link-supportmontyesimcom2">
              support@montyesim.com
            </div>
          </div>
        </div>
        <DivcolMd4 />
      </div>
      <div className="divfooter-sub6">
        <div className="privacy-policy-terms-condition1">
          <div className="copyright-montye-s-i-m">
            <div className="link-privacy5">Privacy Policy</div>
            <div className="link-terms6">{`Terms & Conditions`}</div>
            <div className="link-contact12">Contact Us</div>
          </div>
        </div>
        <div className="frame-empty">
          <div className="monty-esim8">© 2024 Monty eSIM</div>
        </div>
      </div>
    </footer>
  );
};

export default Divfooter3;
