import Navigation1 from "../components/Navigation1";
import ButtonLearnMore from "../components/ButtonLearnMore";
import FramedownloadApp from "../components/FramedownloadApp";
import Cardqrdownloadapp from "../components/Cardqrdownloadapp";
import DivcolMd7 from "../components/DivcolMd7";
import DivcolMd3 from "../components/DivcolMd3";
import "./WwwmontyesimcomByHtmltod61.css";
import CountryFlags from "../components/CountryFlags";
import { useNavigate } from "react-router-dom";

const WwwmontyesimcomByHtmltod6 = () => {

  const navigate = useNavigate();
  return (
    <div className="wwwmontyesimcom-by-htmltod7">
      <Navigation1 />
      <section className="logo-container">
        <ButtonLearnMore />
      </section>
      <form className="picture">
        <div className="picture1">
          <div className="picture2">
            <b className="here-are-some">Here are some of our bestsellers</b>
          </div>
          <h1 className="heading-1-container">
            <p className="travel-carefree-with">Travel carefree with</p>
            <p className="monty-esim3">Monty eSIM!</p>
          </h1>
        </div>
        {/* <div className="box"> */}

          <CountryFlags isHome={true}/>

         
        {/* </div> */}
        <div className="label">
          <div className="e-s-i-minfo">
            {/* <div className="frameheader">
              <button className="button8">
                <b className="view-all-countries">View all countries</b>
              </button>
            </div> */}
            <div className="heading">
              <div className="learnmorebtn">
                <img
                  className="image-1-icon"
                  loading="eager"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="divcard14">
                <div className="qr-circles">
                  <div className="image">
                    <img className="arrowicond4caedd4svg" alt="" />
                    <div className="contactus">
                      <b className="easy-and-fast">Easy and fast</b>
                      <h1 className="heading-1-container1">
                        <p className="unlock-endless">Unlock endless</p>
                        <p className="benefits">benefits</p>
                      </h1>
                    </div>
                  </div>
                  <div className="sendmessagebtn">
                    <FramedownloadApp
                      easyIconf11bd8cdsvg="/easyiconf11bd8cdsvg.svg"
                      easyToAcquire="Easy to acquire"
                      acquiringAnESIMIsOftenEas="Acquiring an eSIM is often easier and faster than getting a traditional SIM card. Plus,"
                      theSwitchToESIMCanBeDoneO="the switch to eSIM can be done online, in minutes with only a few taps."
                    />
                    <FramedownloadApp
                      easyIconf11bd8cdsvg="/travelicon1eb8c12dsvg@2x.png"
                      easyToAcquire="Travel hassle-free"
                      acquiringAnESIMIsOftenEas="You no longer have to worry about waiting in lines at airports or visiting a store to"
                      theSwitchToESIMCanBeDoneO="get your own sim card. The eSIM is a real time saver!"
                      propAlignSelf="unset"
                      propFlex="unset"
                      propMinWidth="unset"
                    />
                    <FramedownloadApp
                      easyIconf11bd8cdsvg="/moneyicone283b833svg@2x.png"
                      easyToAcquire="A money saver"
                      acquiringAnESIMIsOftenEas="In addition to making your trip easier, eSIM will spare you excessive data charges."
                      theSwitchToESIMCanBeDoneO="With Monty eSIM, you get to browse the best bundles at the most affordable prices!"
                      propAlignSelf="stretch"
                      propFlex="1"
                      propMinWidth="430px"
                    />
                    <FramedownloadApp
                      easyIconf11bd8cdsvg="/planeticonfb57d036svg.svg"
                      easyToAcquire="You get to save the planet"
                      acquiringAnESIMIsOftenEas="This virtual tool reduces CO2 emissions and plastic waste helping the planet"
                      theSwitchToESIMCanBeDoneO="breathe again."
                      propAlignSelf="unset"
                      propFlex="unset"
                      propMinWidth="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="montye-s-i-mlogo">
          <div className="header-montye-s-i-m">
            <b className="monty-esim4">Monty eSIM</b>
            <div className="subheading-travelhasslefree">
              <h1 className="heading-14">How to set up your eSIM?</h1>
              <div className="whether-youre-an">
                Whether you’re an iPhone or an Android user, here’s how it works
              </div>
            </div>
            <button className="button9" onClick={()=>{
              navigate("/how-it-works")
            }}>
              <b className="learn-more">Learn more</b>
            </button>
          </div>
          <img
            className="user-guide-img4b7986e5jpg-icon"
            loading="eager"
            alt=""
            src="/userguideimg4b7986e5jpg@2x.png"
          />
        </div>
        <Cardqrdownloadapp />
        <DivcolMd7 />
      </form>
      <footer className="footer-phone-email">
        <div className="divfooter1">
          <div className="divcol-md-4">
            <img
              className="divfooter-section-icon"
              loading="eager"
              alt=""
              src="/divfootersectionicon5.svg"
            />
            <b className="phone">Phone</b>
            <b className="link-44">+44 207 370 53 10</b>
          </div>
          <div className="divcol-md-41">
            <img
              className="divfooter-section-icon1"
              alt=""
              src="/divfootersectionicon-13.svg"
            />
            <b className="email1">Email</b>
            <b className="link-supportmontyesimcom">support@montyesim.com</b>
          </div>
          <DivcolMd3
            divfooterSectionIcon="/divfootersectionicon-22.svg"
            propWidth="603.3px"
            propPadding="0px var(--padding-xl) var(--padding-mid)"
            propDisplay="flex"
            propWidth1="72px"
          />
        </div>
        <div className="divfooter-sub3">
          <div className="qr-curves-b-s-v-g">
            <div className="link1">
              <b className="link-privacy3">Privacy Policy</b>
            </div>
            <b className="link-terms3">{`Terms & Conditions`}</b>
            <b className="link-contact9">Contact Us</b>
          </div>
          <b className="monty-esim5">© 2024 Monty eSIM</b>
        </div>
      </footer>
    </div>
  );
};

export default WwwmontyesimcomByHtmltod6;
