import { useMemo } from "react";
import "./DivcolMd2.css";

const DivcolMd2 = ({ propWidth, propPadding }) => {
  const divcolMd41Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className="divcol-md-45" style={divcolMd41Style}>
      <img
        className="divfooter-section-icon5"
        alt=""
        src="/divfootersectionicon-2.svg"
      />
      <div className="office-parent">
        <div className="office2">Office</div>
        <div className="headquarters-bridge-house-container3">
          <p className="headquarters-bridge-house2">
            Headquarters, Bridge House,
          </p>
          <p className="queen-victoria-street2">
            181 Queen Victoria Street, London EC4V 4EG
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivcolMd2;
