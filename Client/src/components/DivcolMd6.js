import { useMemo } from "react";
import "./DivcolMd6.css";

const DivcolMd6 = ({
  divfooterSectionIcon,
  phone,
  link442073705310,
  propPadding,
}) => {
  const divcolMd45Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="divcol-md-414" style={divcolMd45Style}>
      <img
        className="divfooter-section-icon14"
        loading="eager"
        alt=""
        src={divfooterSectionIcon}
      />
      <div className="phone4">{phone}</div>
      <div className="link-444">{link442073705310}</div>
    </div>
  );
};

export default DivcolMd6;
