import { useMemo } from "react";
import "./Divcard.css";

const Divcard = ({
  trsvg,
  turkey,
  after,
  propPadding,
  propWidth,
  propFlex,
  propPadding1,
  isExpanded
}) => {
  const divcardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const countryFlagsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const countryIconsStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);
  const statusCollapse= useMemo(() => {
    return {
      status: isExpanded,
    };
  }, [isExpanded]);
  
  return (
    <div className="divcard17" style={divcardStyle}>
      <div className="country-flags" style={countryFlagsStyle}>
        <img className="trsvg-icon3" alt="" src={trsvg} />
        <div className="country-icons" style={countryIconsStyle}>
          <b className="turkey2">{turkey}</b>
        </div>
      </div>
      <div className="after-wrapper8" style={frameDivStyle}>
        <img className="after-icon12" alt="" src={after} style={{transform: `rotate(${statusCollapse.status ? '180deg' : '0deg'})` , transition: 'transform 0.5s ease-in-out'}}/>
      </div>
    </div>
  );
};

export default Divcard;
