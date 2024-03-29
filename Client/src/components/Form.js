import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <div className="link-contactus">
        <div className="input-full-name">
          <div className="label-email2">
            <img
              className="contact-arrowa4cb5823svg-icon4"
              alt=""
              src="/contactarrowa4cb5823svg-11.svg"
            />
            <div className="input-job-role">
              <div className="get-in-touch">Get in touch</div>
            </div>
          </div>
        </div>
        <div className="heading-1-how-to-become-a-re-parent">
          <h1 className="heading-19">How to Become a Reseller?</h1>
          <div className="fill-out-the">
            Fill out the form below to contact us and start the partnership
            process.
          </div>
        </div>
      </div>
      <div className="frame-parent3">
        <div className="frame-parent4">
          <div className="frame-parent5">
            <div className="label-full-name-parent">
              <div className="label-full">Full Name</div>
              <input
                className="input2"
                placeholder="Please enter your full name"
                type="text"
              />
            </div>
            <div className="phone-input-label">
              <div className="label-phone">Phone Number</div>
              <div className="mobile-number-input-label">
                {/* <div className="divselect-wrapper">
                  <div className="arrow-down">+961</div>
                  <div className="input3">
                    <div className="div3">▼</div>
                  </div>
                </div> */}
                 <select id="PhoneSelect" class="phone-select">
               <option value="+912">+912</option>
               <option value="+212">+212</option>
               <option value="+326">+326</option>
               <option value="+695">+695</option>
               <option value="+9458">+9458</option>
             </select>
                <input
                  className="input4"
                  placeholder="Mobile number"
                  type="text"
                />
              </div>
            </div>
            <div className="form-section">
              <div className="label-country">Country</div>
             <select id="countrySelect" class="country-select">
               <option value="">Select Your Country</option>
               <option value="morocco">Morocco</option>
               <option value="usa">USA</option>
               <option value="canada">Canada</option>
               <option value="uk">UK</option>
             </select>
            </div>
            <div className="label-message-container">
              <span>Message</span>
              <span className="span">*</span>
            </div>
          </div>
          <div className="footer-section1">
            <div className="colmd">
              <div className="label-email-container">
                <span className="label-email-container1">
                  <span>Email</span>
                  <span className="span1">*</span>
                </span>
              </div>
              <input className="input5" placeholder="Email" type="text" />
            </div>
            <div className="colmd1">
              <div className="label-company">Company</div>
              <input
                className="input6"
                placeholder="Please enter your company's details"
                type="text"
              />
            </div>
            <div className="colmd2">
              <div className="label-job">Job Role</div>
              <input
                className="input7"
                placeholder="Please enter you job role"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="label-email3">
          <textarea className="textarea1" placeholder="Message..." />
          <div className="input8">
            <div className="required-fields">
              <span>*</span>
              <span className="required-fields1">Required Fields</span>
            </div>
          </div>
          <div className="button14">
            <button className="button15">
              <div className="send-message1">Send Message</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
