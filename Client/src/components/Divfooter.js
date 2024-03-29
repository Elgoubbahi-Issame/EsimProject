import DivcolMd5 from "./DivcolMd5";
import DivcolMd2 from "./DivcolMd2";
import "./Divfooter.css";

const Divfooter = () => {
  return (
    <footer className="divfooter4">
      <DivcolMd5
        divfooterSectionIcon="/divfootersectionicon1.svg"
        email="Phone"
        linkSupportmontyesimcom="+44 207 370 53 10"
        propPadding="0px var(--padding-xl) var(--padding-21xl) var(--padding-2xl)"
        propMinWidth="563.3px"
      />
      <div className="divcol-md-4-parent">
        <DivcolMd5
          divfooterSectionIcon="/divfootersectionicon-11.svg"
          email="Email"
          linkSupportmontyesimcom="support@montyesim.com"
          propPadding="0px var(--padding-xl) var(--padding-21xl)"
          propMinWidth="unset"
        />
        <div className="footer-sub">
          <DivcolMd2 />
        </div>
      </div>
    </footer>
  );
};

export default Divfooter;
