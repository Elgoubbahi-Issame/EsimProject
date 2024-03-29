import "./ButtonLearnMore.css";
import { useNavigate } from "react-router-dom";
const ButtonLearnMore = () => {
  const navigate = useNavigate();
  return (
    <div className="button-learn-more">
      <div className="user-guide-img">
        <div className="divrow17">
          <img
            className="landmarks570e638bpng-icon"
            alt=""
            src="/landmarks570e638bpng@2x.png"
          />
          <div className="contact-us-button">
            <div className="divrow-paints">
              <b className="heading-1-container3">
                <span className="heading-1-container4">
                  <p className="make-the-switch">Make the switch, and stay</p>
                  <p className="connected-at-all">connected at all times</p>
                </span>
              </b>
              <button className="button29" onClick={()=>{
                navigate("/plans")
              }}>
                <b className="view-all-plans">View all plans</b>
              </button>
              <img
                className="car0f709f7cgif-icon"
                loading="eager"
                alt=""
                src="/car0f709f7cgif@2x.png"
              />
              <div className="divmousey">
                <div className="divscroller" />
              </div>
              <img
                className="whatsapp-logo6d974d7esvg-fil-icon"
                loading="eager"
                alt=""
                src="/whatsapplogo6d974d7esvg-fill@2x.png"
                onClick={()=>{
                  window.open("https://api.whatsapp.com/send/?phone=212671757830")
                
                }}
              />
            </div>
            <div className="wrapper-divcol-md-12">
              <img className="divcol-md-12-icon" alt="" src="/divcolmd12.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonLearnMore;
