import "./NavigationFrame.css";
import { useState, useEffect } from "react";
const NavigationFrame = () => {


  const IOS = {
    name: "IOS",
    steps: [
      {
        id: 1,
        img: "/Step-ios-1.png",
        desc: `Talk to your Team of Experts to set up your postpaid plan. You will need to provide your device EID to the Expert to update your account. A QR code is only needed if the auto-discovery notification is not received and will be delivered to you via email for activation. To learn how to access your QR code scanner and add your new line, follow these steps:"`
      },
      {
        id: 2,
        img: "/Step-ios-2.gif",
        desc: "Go to the Home screen. Choose Settings."
      },
      {
        id: 3,
        img: "/Step-ios-3.gif",
        desc: "Scroll down. Choose Cellular."
      },
      {
        id: 4,
        img: "/Step-ios-4.gif",
        desc: "Choose Add Cellular Plan."
      },
      {
        id: 5,
        img: "/Step-ios-5.gif",
        desc: "Scan the QR code sent to you via email by your Team of Experts."
      },
      {
        id: 6,
        img: "/Step-ios-6.png",
        desc: "Choose Add Cellular Plan."
      },
      {
        id: 7,
        img: "/Step-ios-7.gif",
        desc: "Choose Continue."
      },
      {
        id: 8,
        img: "/Step-ios-8.gif",
        desc: "Choose an option, in this case, Secondary."
      },
      {
        id: 9,
        img: "/Step-ios-9.gif",
        desc: "Choose Continue."
      },
      {
        id: 10,
        img: "/Step-ios-10.gif",
        desc: "Choose an option, in this case, Secondary."
      },
      {
        id: 11,
        img: "/Step-ios-11.gif",
        desc: "Optional: Turn on Allow Cellular Data Switching. Choose Done."
      },
      {
        id: 12,
        img: "/Step-ios-12.png",
        desc: "You have scanned your QR code and added your postpaid plan. Return to the Home screen."
      },
      {
        id: 13,
        img: "/Step-ios-13.png",
        desc: "Your phone and apps may use data when you are not aware of it. You are responsible for any data charges on other wireless networks. To turn off data roaming when you are not on the network, follow these steps:"
      },
      {
        id: 14,
        img: "/Step-ios-14.gif",
        desc: "Go to the Home screen. Choose Settings."
      },
      {
        id: 15,
        img: "/Step-ios-15.gif",
        desc: "Scroll down. Choose Cellular."
      },
      {
        id: 16,
        img: "/Step-ios-16.gif",
        desc: "Choose Cellular Data Options."
      },
      {
        id: 17,
        img: "/Step-ios-17.gif",
        desc: "Turn on Data Roaming."
      },
      {
        id: 18,
        img: "/Step-ios-18.gif",
        desc: "Data roaming has been turned on. Return to the Home screen."
      }
    ]
  }
  const Android = {
    name: "Android",
    steps: [
      {
        id: 1,
        img: "/Step-android-1.png",
        desc: `Talk to your Team of Experts to set up your postpaid plan. You will need to provide your device EID to the Expert to update your account. A QR code is only needed if the auto-discovery notification is not received and will be delivered to you via email for activation. To learn how to access your QR code scanner and add your new line, follow these steps:"`
      },
      {
        id: 2,
        img: "/Step-android-2.png",
        desc: "Go to the Home screen. To open the menu, swipe up on the screen."
      },
      {
        id: 3,
        img: "/Step-android-3.gif",
        desc: "Scroll to the right. Choose Settings."
      },
      {
        id: 4,
        img: "/Step-android-4.gif",
        desc: "Scroll down. Choose Connections."
      },
      {
        id: 5,
        img: "/Step-android-5.gif",
        desc: "Choose SIM card manager."
      },
      {
        id: 6,
        img: "/Step-android-6.gif",
        desc: "Under eSIMs, choose Add mobile plan."
      },
      {
        id: 7,
        img: "/Step-android-7.gif",
        desc: "Choose Scan carrier QR code."
      },
      {
        id: 8,
        img: "/Step-android-8.png",
        desc: "To scan a QR code, point the camera at the code."
      },
      {
        id: 9,
        img: "/Step-android-9.gif",
        desc: "Choose Confirm."

      },
      {
        id: 10,
        img: "/Step-android-10.png",
        desc: "The eSIM profile is being downloaded. This can take up to 5 minutes."
      },
      {
        id: 11,
        img: "/Step-android-11.gif",
        desc: "You have scanned your QR code and added your postpaid plan. Return to the Home screen."
      },
      {
        id: 12,
        img: "/Step-android-12.png",
        desc: "Your phone and apps may use data when you are not aware of it. You are responsible for any data charges on other wireless networks. To turn off data roaming when you are not on the network, follow these steps:"
      },
      {
        id: 13,
        img: "/Step-android-13.png",
        desc: "Go to the Home screen. To open the menu, swipe up on the screen."
      },
      {
        id: 14,
        img: "/Step-android-14.gif",
        desc: "Scroll to the right. Choose Settings."
      },
      {
        id: 15,
        img: "/Step-android-15.gif",
        desc: "Choose Mobile networks."
      },
      {
        id: 16,
        img: "/Step-android-16.gif",
        desc: "Turn on Data roaming."
      },
      {
        id: 17,
        img: "/Step-android-17.gif",
        desc: "Data roaming has been turned on. Return to the Home screen."
      },
      {
        id: 18,
        img: "/Step-android-18.gif",
        desc: "You have scanned your QR code and added your postpaid plan. Return to the Home screen."
      }
    ]
  }
  const [isToggle, setisToggle] = useState(false);
  const [steps, setsteps] = useState(IOS.steps)
  const [i, seti] = useState(0)

  useEffect(() => {
    if (i === 0) {
      document.querySelector(".leftarrow0d9a28a5svg").style.cursor = "default";
      document.querySelector(".rightarrow2a6deeb4svg-icon").style.cursor = "pointer";
    } else if (i === steps.length - 1) {
      document.querySelector(".rightarrow2a6deeb4svg-icon").style.cursor = "default";
      document.querySelector(".leftarrow0d9a28a5svg").style.cursor = "pointer";

    }else{
      document.querySelector(".leftarrow0d9a28a5svg").style.cursor = "pointer";
      document.querySelector(".rightarrow2a6deeb4svg-icon").style.cursor = "pointer";
    }
  }, [i])

  return (
    <section className="navigation-frame">
      <div className="frame-parent1">
        <div className="contactus-frame">
          <div className="frame-parent2">
            <div className="how-to-setupe-s-i-mon-i-o-s-wrapper">
              <div className="how-to-setupe-s-i-mon-i-o-s">
                <div className="set-up-arrow-s-v-g">
                  <div className="easyandfast-text">
                    <div className="contact-arrow-frame">
                      <div className="navigation-links">
                        <img
                          className="contact-arrowa4cb5823svg-icon1"
                          loading="eager"
                          alt=""
                          src="/contactarrowa4cb5823svg.svg"
                        />
                      </div>
                      <b className="easy-and-fast1">Easy and fast</b>
                    </div>
                  </div>
                  <div className="partnership-link">
                    <h1 className="heading-1-container2">
                      <p className="how-to-set">How to set up your</p>
                      <p className="monty-esim-on">
                        Monty eSIM on iPhone and Android
                      </p>
                    </h1>
                  </div>
                  <div className="divtabs">
                    <button className="button12 active-button" onClick={(e) => {
                      setisToggle(false);
                      setsteps(IOS.steps);
                      seti(0);
                      document.querySelectorAll(".button12").forEach((el) => {
                        el.classList.remove("active-button");
                      })
                      e.currentTarget.classList.add("active-button");
                    }}>
                      <img className="svg-icon" alt="" src="/svg.svg" />
                      iOS
                    </button>
                    <button className="button12" onClick={(e) => {
                      setisToggle(true);
                      setsteps(Android.steps);
                      seti(0);
                      document.querySelectorAll(".button12").forEach((el) => {
                        el.classList.remove("active-button");
                      })
                      e.currentTarget.classList.add("active-button");
                    }}>
                      <img
                        className="spanbtn-icon-android"
                        alt=""
                        src="/spanbtniconandroid.svg"
                      />
                      Android
                    </button>
                  </div>
                </div>
                <div className="signin-text">
                  <img
                    className="bluecirclesa36a933asvg-icon"
                    loading="eager"
                    alt=""
                    src="/bluecirclesa36a933asvg.svg"
                  />
                  <div className="divcol4">
                    <div className="divrow14">
                      <img
                        className="step201de229708png-icon"
                        loading="eager"
                        alt=""
                        src={steps && steps[i].img}
                      />
                      <div className="stepdeeplink">
                        <div className="contactus-frame1">
                          <div className="pstepnb">
                            <h1 className="how-to-setup-container">
                              <p className="how-to-setup">
                                How To Setup Your eSIM On
                              </p>
                              {isToggle ? Android.name : IOS.name}
                            </h1>
                            <img
                              className="setuparrow7ab1f20bsvg-icon"
                              loading="eager"
                              alt=""
                              src="/setuparrow7ab1f20bsvg.svg"
                            />
                          </div>
                          <div className="step-frame">
                            <div className="setup-i-o-s-parent">
                              <div className="setup-i-o-s">
                                <button className="pstep-nb">
                                  <div className="step-1">Step {steps && steps[i].id}</div>
                                </button>
                                <div className="leftarrow0d9a28a5svg-parent">
                                  <div className="leftarrow0d9a28a5svg"
                                    onClick={() => {
                                      (i > 0) ? seti(i - 1)
                                        : seti(0)
                                    }}
                                  >
                                    <img
                                      className="vector-icon"
                                      alt=""
                                      src="/vector.svg"
                                    />
                                    <img
                                      className="clip-path-group"
                                      loading="eager"
                                      alt=""
                                      src="/clip-path-group.svg"
                                    />
                                  </div>
                                  <img
                                    className="rightarrow2a6deeb4svg-icon"
                                    loading="eager"
                                    alt=""
                                    src="/rightarrow2a6deeb4svg@2x.png"
                                    onClick={(e) => {
                                      (i < steps.length - 1)
                                        ? seti(i + 1)
                                        : seti(steps.length - 1)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="talk-to-your-container">
                                {steps && steps[i].desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="whatsapp-logo6d974d7esvg-icon1"
                    loading="eager"
                    alt=""
                    src="/whatsapplogo6d974d7esvg@2x.png"
                    onClick={() => {
                      window.open("https://api.whatsapp.com/send/?phone=212671757830")
                    }}
                  />
                </div>
              </div>
            </div>
            <img
              className="bluecurves523863f2svg-icon"
              loading="eager"
              alt=""
              src="/bluecurves523863f2svg.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationFrame;
