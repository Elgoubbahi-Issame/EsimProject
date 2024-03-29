import { useMemo } from "react";
import "./MessageTextarea.css";

const MessageTextarea = ({
  contactArrowa4cb5823svg,
  propPadding,
  propPadding1,
  propDisplay,
  propDisplay1,
}) => {
  const messageTextareaStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const parentHowCanIContactCSStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const contactUsStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const forAllInquiriesStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className="message-textarea2" style={messageTextareaStyle}>
      <div className="question-group">
        <div className="easyand-fast-label">
          <div
            className="parent-how-can-i-contact-c-s"
            style={parentHowCanIContactCSStyle}
          >
            <img
              className="contact-arrowa4cb5823svg-icon5"
              loading="eager"
              alt=""
              src={contactArrowa4cb5823svg}
            />
          </div>
          <b className="contact-us3" style={contactUsStyle}>
            Contact us
          </b>
        </div>
      </div>
      <h1 className="heading-110">Need some help?</h1>
      <div className="for-all-inquiries2" style={forAllInquiriesStyle}>
        For all inquiries, please email us using the form below. Our team is
        there for you 24/7!
      </div>
    </div>
  );
};

export default MessageTextarea;
