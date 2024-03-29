import { useMemo } from "react";
import "./DivcolMd8.css";

const DivcolMd8 = ({
  phoneIcon0eb21fd3svg,
  phone,
  link442073705310,
  propMarginLeft,
  propPadding,
  propWidth,
  propTextDecoration,
}) => {
  const divcolMd46Style = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const divfooterSectionIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const phoneIcon0eb21fd3svgStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const link44Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className="divcol-md-416" style={divcolMd46Style}>
      <div className="divrow18">
        <button
          className="divfooter-section-icon16"
          style={divfooterSectionIconStyle}
        >
          <div className="phoneicon0eb21fd3svg">
            <div className="phoneicon0eb21fd3svg-fill">
              <img
                className="phoneicon0eb21fd3svg1"
                alt=""
                src={phoneIcon0eb21fd3svg}
                style={phoneIcon0eb21fd3svgStyle}
              />
            </div>
          </div>
        </button>
      </div>
      <div className="brand-info">
        <h3 className="phone5">{phone}</h3>
      </div>
      <div className="link-445" style={link44Style}>
        {link442073705310}
      </div>
    </div>
  );
};

export default DivcolMd8;
