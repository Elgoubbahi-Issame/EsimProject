import { useMemo } from "react";
import "./DivcolMd4.css";

const DivcolMd4 = ({ propFlex, propMinWidth, propWidth, propMargin }) => {
  const divcolMd43Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const office1Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className="divcol-md-49" style={divcolMd43Style}>
      <img
        className="divfooter-section-icon9"
        loading="eager"
        alt=""
        src="/divfootersectionicon-2.svg"
      />
      <div className="office-group">
        <h3 className="office5" style={office1Style}>
          Office
        </h3>
        <div className="headquarters-bridge-house-container8">
          <p className="headquarters-bridge-house5">
            Headquarters, Bridge House,
          </p>
          <p className="queen-victoria-street6">
            181 Queen Victoria Street, London EC4V 4EG
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivcolMd4;
