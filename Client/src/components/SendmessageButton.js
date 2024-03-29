import MessageTextarea from "./MessageTextarea";
import "./SendmessageButton.css";

const SendmessageButton = () => {
  return (
    <div className="sendmessage-button">
      <MessageTextarea contactArrowa4cb5823svg="/contactarrowa4cb5823svg3.svg" />
      <div className="textarea2">
        <b className="label-email4">Email</b>
        <div className="faqsection">
          {/* <div className="input9" /> */}
          <input className="input9" type="text" />
        </div>
        <b className="label-message1">Message</b>
        <textarea className="textarea3" />
      </div>
      <button className="form-button">
        <b className="send-message2">Send message</b>
      </button>
    </div>
  );
};

export default SendmessageButton;
