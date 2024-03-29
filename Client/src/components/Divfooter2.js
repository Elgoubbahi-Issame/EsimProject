import DivcolMd from "./DivcolMd";
import DivcolMd3 from "./DivcolMd3";
import "./Divfooter2.css";

const Divfooter2 = () => {
  return (
    <footer className="divfooter6">
      <DivcolMd
        divfooterSectionIcon="/divfootersectionicon.svg"
        phone="Phone"
        link442073705310="+44 207 370 53 10"
        propPadding="0px 0px var(--padding-21xl)"
        phoneDisplay="flex"
        phoneWidth="77px"
      />
      <div className="divcol-md-48">
        <div className="divfooter-section-icon-wrapper">
          <img
            className="divfooter-section-icon8"
            loading="eager"
            alt=""
            src="/divfootersectionicon-1.svg"
          />
        </div>
        <div className="email-wrapper">
          <b className="email4">Email</b>
        </div>
        <b className="link-supportmontyesimcom1">support@montyesim.com</b>
      </div>
      <DivcolMd3 divfooterSectionIcon="/divfootersectionicon-2.svg" />
    </footer>
  );
};

export default Divfooter2;
