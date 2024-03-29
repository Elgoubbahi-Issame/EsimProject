import { useMemo } from "react";
import "./DivcolMd5.css";

const DivcolMd5 = ({
  divfooterSectionIcon,
  email,
  linkSupportmontyesimcom,
  propPadding,
  propMinWidth,
}) => {
  const divcolMd44Style = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  return (
    <div className="divcol-md-412" style={divcolMd44Style}>
      <img
        className="divfooter-section-icon12"
        loading="eager"
        alt=""
        src={divfooterSectionIcon}
      />
      <div className="email-group">
        <div className="email6">{email}</div>
        <div className="link-supportmontyesimcom3">
          {linkSupportmontyesimcom}
        </div>
      </div>
    </div>
  );
};

export default DivcolMd5;
