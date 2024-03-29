import DivcolMd from "./DivcolMd";
import "./Divfooter1.css";

const Divfooter1 = () => {
  return (
    <footer className="divfooter5">
      <DivcolMd
        divfooterSectionIcon="/divfootersectionicon2.svg"
        phone="Phone"
        link442073705310="+44 207 370 53 10"
        propPadding="0px 0px var(--padding-21xl)"
        phoneDisplay="inline-block"
        phoneWidth="unset"
      />
      <DivcolMd
        divfooterSectionIcon="/divfootersectionicon-1.svg"
        phone="Email"
        link442073705310="support@montyesim.com"
        propPadding="0px 0px var(--padding-17xl)"
        phoneDisplay="inline-block"
        phoneWidth="unset"
      />
      <div className="divcol-md-46">
        <img
          className="divfooter-section-icon6"
          alt=""
          src="/divfootersectionicon-2.svg"
        />
        <div className="office-wrapper">
          <b className="office3">Office</b>
        </div>
        <b className="headquarters-bridge-house-container4">
          <span className="headquarters-bridge-house-container5">
            <p className="headquarters-bridge-house3">
              Headquarters, Bridge House,
            </p>
            <p className="queen-victoria-street4">
              181 Queen Victoria Street, London EC4V 4EG
            </p>
          </span>
        </b>
      </div>
    </footer>
  );
};

export default Divfooter1;
