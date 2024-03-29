import { useMemo } from "react";
import "./DivcolMd3.css";

const DivcolMd3 = ({
  divfooterSectionIcon,
  propWidth,
  propPadding,
  propDisplay,
  propWidth1,
}) => {
  const divcolMd42Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const officeStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  return (
    <div className="divcol-md-47" style={divcolMd42Style}>
      <img
        className="divfooter-section-icon7"
        loading="eager"
        alt=""
        src={divfooterSectionIcon}
      />
      <b className="office4" style={officeStyle}>
        Office
      </b>
      <b className="headquarters-bridge-house-container6">
        <span className="headquarters-bridge-house-container7">
          <p className="headquarters-bridge-house4">
            Headquarters, Bridge House,
          </p>
          <p className="queen-victoria-street5">
            181 Queen Victoria Street, London EC4V 4EG
          </p>
        </span>
      </b>
    </div>
  );
};

export default DivcolMd3;
