import MessageTextarea from "./MessageTextarea";
import "./DivcolMd7.css";

const DivcolMd7 = () => {
  return (
    <div className="divcol-md-125">
      <div className="email-contact-form">
        <MessageTextarea
          contactArrowa4cb5823svg="/contactarrowa4cb5823svg-fill.svg"
          propPadding="unset"
          propPadding1="0px 0px var(--padding-4xs)"
          propDisplay="inline-block"
          propDisplay1="inline-block"
        />
        <div className="email-input-field">
          <div className="send-message-button">
            <b className="label-email6">Email</b>
            <div className="input-wrapper">
              <input type="text" className="input12" />
            </div>
            <b className="label-message2">Message</b>
          </div>
          <textarea className="textarea4" rows={13} cols={46} />
        </div>
      </div>
      <button className="button31">
        <b className="send-message3">Send message</b>
      </button>
    </div>
  );
};

export default DivcolMd7;
