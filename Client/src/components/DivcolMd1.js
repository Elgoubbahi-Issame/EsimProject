import "./DivcolMd1.css";

const DivcolMd1 = () => {
  return (
    <section className="divcol-md-10">
      <div className="helprequestframe">
        <div className="for-all-inquiries">
          <div className="label-email">
            <img
              className="contact-arrowa4cb5823svg-icon2"
              alt=""
              src="/contactarrowa4cb5823svg-1.svg"
            />
          </div>
          <b className="contact-us2">Contact us</b>
        </div>
      </div>
      <div className="needhelpheader">
        <div className="footerlinkgroup">
          <h1 className="heading-16">Need some help?</h1>
          <h3 className="for-all-inquiries1">
            For all inquiries, please email us using the form below. Our team is
            there for you 24/7!
          </h3>
        </div>
        <div className="emaillabelframe">
          <b className="label-email1">Email</b>
          <div className="sendbuttonframe">
            <input type="text" className="input1" />
          </div>
          <b className="label-message">Message</b>
          <textarea className="textarea" rows={13} cols={43} />
        </div>
      </div>
      <button className="button13">
        <b className="send-message">Send message</b>
      </button>
    </section>
  );
};

export default DivcolMd1;
