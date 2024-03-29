import DivcolMd6 from "./DivcolMd6";
import "./Divfooter5.css";

const Divfooter5 = () => {
  return (
    <footer className="divfooter9">
      <DivcolMd6
        divfooterSectionIcon="/divfootersectionicon4.svg"
        phone="Phone"
        link442073705310="+44 207 370 53 10"
      />
      <DivcolMd6
        divfooterSectionIcon="/divfootersectionicon-12.svg"
        phone="Email"
        link442073705310="support@montyesim.com"
        propPadding="0px 0px var(--padding-20xl) var(--padding-12xs)"
      />
      <div className="divcol-md-415">
        <img
          className="divfooter-section-icon15"
          loading="eager"
          alt=""
          src="/divfootersectionicon-21.svg"
        />
        <div className="office6">Office</div>
        <div className="headquarters-bridge-house-container9">
          <p className="headquarters-bridge-house6">
            Headquarters, Bridge House,
          </p>
          <p className="queen-victoria-street7">
            181 Queen Victoria Street, London EC4V 4EG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Divfooter5;
