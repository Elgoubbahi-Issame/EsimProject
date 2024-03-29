import "./FirstFrame.css";

const FirstFrame = () => {
  return (
    <section className="first-frame">
      <div className="benefits-frames">
        <div className="benefits-frames1">
          <div className="benefits-frames2">
            <h1 className="heading-18">Benefits of Partnering with Us</h1>
            <div className="we-look-forward-container">
              <p className="we-look-forward">
                We look forward to working with you and helping you grow
              </p>
              <p className="your-business-with">
                your business with our eSIM products for travel.
              </p>
            </div>
          </div>
          <div className="discount-frame">
            <div className="money-icon">
              <div className="easy-iconf11bd8cdsvg-parent">
                <img
                  className="easy-iconf11bd8cdsvg"
                  loading="eager"
                  alt=""
                  src="/easyiconf11bd8cdsvg.svg"
                />
                <div className="access-to-discounted-container">
                  <p className="access-to-discounted">
                    Access to discounted rates on
                  </p>
                  <p className="esim-data-bundle">eSIM data bundle products.</p>
                </div>
              </div>
              <div className="money-icone283b833svg-parent">
                <img
                  className="money-icone283b833svg"
                  loading="eager"
                  alt=""
                  src="/moneyicone283b833svg@2x.png"
                />
                <div className="opportunity-to-offer-container">
                  <p className="opportunity-to-offer">
                    Opportunity to offer your
                  </p>
                  <p className="customers-a-convenient">
                    customers a convenient and cost-
                  </p>
                  <p className="effective-solution-for">
                    effective solution for staying
                  </p>
                  <p className="connected-while-traveling">
                    connected while traveling.
                  </p>
                </div>
              </div>
            </div>
            <div className="travel-icon1eb8c12dsvg-parent">
              <img
                className="travel-icon1eb8c12dsvg"
                loading="eager"
                alt=""
                src="/travelicon1eb8c12dsvg@2x.png"
              />
              <div className="dedicated-support-from-container">
                <p className="dedicated-support-from">
                  Dedicated support from our team
                </p>
                <p className="of-experts">of experts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-notice">
          <div className="frame-partnership">
            <div className="link-plans7">
              <img
                className="esim-beach3299f522svg-icon"
                loading="eager"
                alt=""
                src="/esimbeach3299f522svg.svg"
              />
            </div>
            <img
              className="whatsapp-logo6d974d7esvg-icon2"
              loading="eager"
              alt=""
              src="/whatsapplogo6d974d7esvg1@2x.png"
              onClick={() => {
                window.open("https://api.whatsapp.com/send/?phone=212671757830");
              
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstFrame;
