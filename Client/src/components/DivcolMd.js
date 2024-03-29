import { useMemo } from "react";
import "./DivcolMd.css";

const DivcolMd = ({
  divfooterSectionIcon,
  phone,
  link442073705310,
  propPadding,
  phoneDisplay,
  phoneWidth,
}) => {
  const divcolMd4Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const phoneStyle = useMemo(() => {
    return {
      display: phoneDisplay,
      width: phoneWidth,
    };
  }, [phoneDisplay, phoneWidth]);

  return (
    <div className="divcol-md-43" style={divcolMd4Style}>
      <img
        className="divfooter-section-icon3"
        loading="eager"
        alt=""
        src={divfooterSectionIcon}
      />
      <b className="phone1" style={phoneStyle}>
        {phone}
      </b>
      <b className="link-441">{link442073705310}</b>
    </div>
  );
};

export default DivcolMd;
