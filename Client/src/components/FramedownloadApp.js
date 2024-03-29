import { useMemo } from "react";
import "./FramedownloadApp.css";

const FramedownloadApp = ({
  easyIconf11bd8cdsvg,
  easyToAcquire,
  acquiringAnESIMIsOftenEas,
  theSwitchToESIMCanBeDoneO,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const framedownloadAppStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const qrCurvesStyle = useMemo(() => {
    return {
      flex: propFlex,
      // minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div className="framedownload-app" style={framedownloadAppStyle}>
      <img className="easy-iconf11bd8cdsvg1" alt="" src={easyIconf11bd8cdsvg} />
      <div className="qr-curves" style={qrCurvesStyle}>
        <b className="easy-to-acquire">{easyToAcquire}</b>
        <div className="acquiring-an-esim-container">
          <p className="acquiring-an-esim">{acquiringAnESIMIsOftenEas}</p>
          <p className="the-switch-to">{theSwitchToESIMCanBeDoneO}</p>
        </div>
      </div>
    </div>
  );
};

export default FramedownloadApp;
