import { useMemo } from "react";
import "./Divcard1.css";

const Divcard1 = ({
  trsvg,
  mutluluk,
  gB,
  arrowRight2472f8ffsvg,
  validity7Days,
  trsvg1,
  divcolMd5,
  buyNow199USD,
  propPadding,
  propPadding1,
  propPadding2,
  propMinWidth,
  propWidth,
  propAlignSelf,
  propWidth1,
  propWidth2,
  propLeft,
  propPadding3,
  propPadding4,
  propMarginLeft,
  propPadding5,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const pbundleMarketingNameOneStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mutlulukStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const gBStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const arrowRight2472f8ffsvgIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const trsvgIconStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const divcard1Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  return (
    <div className="divcard18">
      <div className="frame-parent8">
        <div className="frame-wrapper1" style={frameDiv1Style}>
          <div className="frame-parent9" style={frameDiv2Style}>
            <div className="trsvg-parent" style={frameDiv3Style}>
              <img className="trsvg-icon4" loading="eager" alt="" src={trsvg} />
              <div
                className="pbundle-marketing-name-one1"
                style={pbundleMarketingNameOneStyle}
              >
                <div className="mutluluk-wrapper" style={frameDiv4Style}>
                  <div className="mutluluk1" style={mutlulukStyle}>
                    {mutluluk}
                  </div>
                </div>
              </div>
            </div>
            <div className="gb-parent" style={frameDiv5Style}>
              <div className="gb" style={gBStyle}>
                {gB}
              </div>
              <img
                className="arrow-right2472f8ffsvg-icon1"
                alt=""
                src={arrowRight2472f8ffsvg}
                style={arrowRight2472f8ffsvgIconStyle}
              />
            </div>
          </div>
        </div>
        <div className="separator8" />
        <div className="validity-7-days-parent" style={frameDiv6Style}>
          <div className="validity-7-days">{validity7Days}</div>
          <div className="available-in-group" style={frameDiv7Style}>
            <div className="available-in1">{`Available in `}</div>
            <img
              className="trsvg-icon5"
              alt=""
              src={trsvg1}
              style={trsvgIconStyle}
            />
          </div>
        </div>
        <div className="divcard19" style={divcard1Style}>
          <input
            className="supported-country2"
            placeholder="Supported Country"
            type="text"
          />
          <img className="divcol-md-5-icon1" alt="" src={divcolMd5} />
        </div>
      </div>
      <div className="button20">
        <div className="buy-now-1">{buyNow199USD}</div>
      </div>
    </div>
  );
};

export default Divcard1;
