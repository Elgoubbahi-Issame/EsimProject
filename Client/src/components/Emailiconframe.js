import DivcolMd from "./DivcolMd";
import "./Emailiconframe.css";

const Emailiconframe = () => {
  return (
    <footer className="emailiconframe">
      <div className="divfooter3">
        <DivcolMd
          divfooterSectionIcon="/divfootersectionicon.svg"
          phone="Phone"
          link442073705310="+44 207 370 53 10"
        />
        <DivcolMd
          divfooterSectionIcon="/divfootersectionicon-1.svg"
          phone="Email"
          link442073705310="support@montyesim.com"
          propPadding="0px var(--padding-xl) var(--padding-19xl) var(--padding-2xl)"
          phoneDisplay="inline-block"
          phoneWidth="unset"
        />
        <div className="divcol-md-44">
          <img
            className="divfooter-section-icon4"
            alt=""
            src="/divfootersectionicon-2.svg"
          />
          <b className="office1">Office</b>
          <b className="headquarters-bridge-house-container1">
            <span className="headquarters-bridge-house-container2">
              <p className="headquarters-bridge-house1">
                Headquarters, Bridge House,
              </p>
              <p className="queen-victoria-street1">
                181 Queen Victoria Street, London EC4V 4EG
              </p>
            </span>
          </b>
        </div>
      </div>
      <div className="divfooter-sub5">
        <div className="linkcontactusframe">
          <div className="privacypolicytextframe">
            <b className="link-privacy4">Privacy Policy</b>
          </div>
          <b className="link-terms5">{`Terms & Conditions`}</b>
          <b className="link-contact11">Contact Us</b>
        </div>
        <b className="monty-esim7">© 2024 Monty eSIM</b>
      </div>
    </footer>
  );
};

export default Emailiconframe;
