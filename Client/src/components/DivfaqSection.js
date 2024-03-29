import "./DivfaqSection.css";
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const DivfaqSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = index => {
    setOpenSection(openSection === index ? null : index);
  };;

  //   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
  //     isExpanded: expandedIndex === index,
  //     onCollapseEnd: () => { if (expandedIndex === index) setExpandedIndex(null); },
  //     easing: 'cubic-bezier(0.5, 0.5, 0.5, 0.3)',
  //     duration: 250
  // });
  return (
    <section className="divfaq-section">
      <div className="divfaq-section-inner">
        <div className="frame-parent6">
          <div className="frame-wrapper">
            <div className="easy-and-fast-parent">
              <b className="easy-and-fast2">Easy and Fast</b>
              <img
                className="contact-arrowa4cb5823svg-icon6"
                loading="eager"
                alt=""
                src="/contactarrowa4cb5823svg-12.svg"
              />
            </div>
          </div>
          <h1 className="heading-111">Frequently asked questions</h1>
          <div className="subscribe-to-learn">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </div>
        </div>
      </div>
      <div className="contactarrowacbsvg-parent">
        <div className="contactarrowacbsvg" onClick={() => toggle(0)} >
          <img
            className="heading-5-plus-circlede8b34"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-51">How can I contact customer service?</div>
        </div>
        <Collapse isOpened={openSection === 0} >
          <div className="contactarrowacbsvg" style={{
          backgroundColor: openSection === 0 ? 'white' : 'transparent',
          padding: openSection === 0 ? '20px' : '0',
          borderRadius: openSection === 0 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>If you need to contact us at any time, please use this WhatsApp number to chat or call us. https://wa.me/+0000000</div>
        </Collapse>
        <div className="contactarrowacbsvg1" onClick={() => toggle(1)}>
          <img
            className="heading-5-plus-circlede8b341"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-52">Is my device eSIM compatible?</div>
        </div>
        <Collapse isOpened={openSection === 1}>
          <div style={{
          backgroundColor: openSection === 1 ? 'white' : 'transparent',
          padding: openSection === 1 ? '20px' : '0',
          borderRadius: openSection === 1 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }} className="content">As more eSIM-compatible wearables, laptops, tablets, and smartphones are introduced, the list of products that accept eSIM continues to expand.  The user of the eSIM must dial *#06# and confirm their phone's eligibility before using it. Your device is compatible if "EID" appears under Device Info!</div>
        </Collapse>
        <div className="contactarrowacbsvg1" onClick={() => toggle(2)}>
          <img
            className="heading-5-plus-circlede8b342"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-53">
            Can I call and send SMS via My MontyeSIM?
          </div>
        </div>
         <Collapse isOpened={openSection === 2}>
          <div className="contactarrowacbsvg2" style={{
          backgroundColor: openSection === 2 ? 'white' : 'transparent',
          padding: openSection === 2 ? '20px' : '0',
          borderRadius: openSection === 2 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>No calls and SMS can be sent and received as Monty eSIM supports ONLY data at this stage.</div>
        </Collapse>
        <div className="contactarrowacbsvg3" onClick={() => toggle(3)}>
          <img
            className="heading-5-plus-circlede8b343"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-54">
            Can the Monty eSIM profile be transferred to another device?
          </div>
        </div>
         <Collapse isOpened={openSection === 3}>
          <div className="contactarrowacbsvg3" style={{
          backgroundColor: openSection === 3 ? 'white' : 'transparent',
          padding: openSection === 3 ? '20px' : '0',
          borderRadius: openSection === 3 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>A profile can't be transferred to another device. It is recommended to benefit from the purchased package till it expires since a new profile has to be activated and a new package has to be purchased after switching to another device.</div>
        </Collapse>
        <div className="contactarrowacbsvg4" onClick={() => toggle(4)}>
          <img
            className="heading-5-plus-circlede8b344"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-55">How do I activate an eSIM profile?</div>
        </div>
         <Collapse isOpened={openSection === 4}>
          <div className="contactarrowacbsvg4" style={{
          backgroundColor: openSection === 4 ? 'white' : 'transparent',
          padding: openSection === 4 ? '20px' : '0',
          borderRadius: openSection === 4 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>After purchasing the preferred data package, it is necessary to refer to and check the steps to be taken under the “User Guide” section to activate the ordered profile.  Please feel free to check out our user guide at 'How it works' section</div>
        </Collapse>
        <div className="contactarrowacbsvg5" onClick={() => toggle(5)}>
          <img
            className="heading-5-plus-circlede8b345"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-56">How do I get a Monty eSIM profile?</div>
        </div>
         <Collapse isOpened={openSection === 5}>
          <div className="contactarrowacbsvg5" style={{
          backgroundColor: openSection === 5 ? 'white' : 'transparent',
          padding: openSection === 5 ? '20px' : '0',
          borderRadius: openSection === 5 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>Once you buy an eSIM Profile from Shop Plans, youll receive a QR code via email to scan.  Please follow the User Guide steps to download your eSIM Profile.  'How it works' section</div>
        </Collapse>
        <div className="contactarrowacbsvg6" onClick={() => toggle(6)}>
          <img
            className="heading-5-plus-circlede8b346"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-57">What is Monty eSIM exactly?</div>
        </div>
         <Collapse isOpened={openSection === 6}>
          <div className="contactarrowacbsvg6" style={{
          backgroundColor: openSection === 6 ? 'white' : 'transparent',
          padding: openSection === 6 ? '20px' : '0',
          borderRadius: openSection === 6 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>It is an international eSIM app that allows travelers to use data at the most competitive rates while abroad without inserting a physical SIM card.</div>
        </Collapse>
        <div className="contactarrowacbsvg7" onClick={() => toggle(7)}>
          <img
            className="heading-5-plus-circlede8b347"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-58">
            What eSIM products will I find in the Shop Plans section?
          </div>
        </div>
         <Collapse isOpened={openSection === 7}>
          <div className="contactarrowacbsvg7" style={{
          backgroundColor: openSection === 7 ? 'white' : 'transparent',
          padding: openSection === 7 ? '20px' : '0',
          borderRadius: openSection === 7 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>Monty eSIM only features prepaid eSIM plans and packages. Prepaid eSIM plans are just like prepaid physical SIM card plans. Go to Shop Plans and explore our BUNDLES! Please go to Plans section</div>
        </Collapse>
        <div className="contactarrowacbsvg8" onClick={() => toggle(8)}>
          <img
            className="heading-5-plus-circlede8b348"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-59">Does a prepaid eSIM expire?</div>
        </div>
         <Collapse isOpened={openSection === 8}>
          <div className="contactarrowacbsvg8" style={{
          backgroundColor: openSection === 8 ? 'white' : 'transparent',
          padding: openSection === 8 ? '20px' : '0',
          borderRadius: openSection === 8 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>If a user fails to top up their eSIM account within a period of three months from the last top-up date, their eSIM will be deactivated manually by MontyeSIM. Once deactivated, the eSIM cannot be used again unless the user takes specific steps to reactivate it. Upon eSIM deactivation, the user may lose any remaining data balance or credits associated with their account. MontyeSIM will not be responsible for any loss of data or balance resulting from eSIM deactivation.</div>
        </Collapse>
        <div className="contactarrowacbsvg9"  onClick={() => toggle(9)}>
          <img
            className="heading-5-plus-circlede8b349"
            loading="eager"
            alt=""
            src="/heading-5--pluscirclede8b34a4svg.svg"
          />
          <div className="heading-510">
            Can QR codes be reused once they have been scanned?
          </div>
        </div>
         <Collapse isOpened={openSection === 9}>
          <div className="contactarrowacbsvg9" style={{
          backgroundColor: openSection === 9 ? 'white' : 'transparent',
          padding: openSection === 9 ? '20px' : '0',
          borderRadius: openSection === 9 ? '10px' : '0',
          transition: 'all 0.3s',
        
        }}>Once the QR code is scanned, the Monty eSIM profile is downloaded to the device and can no longer be re-used.</div>
        </Collapse>
      </div>
      <img
        className="whatsapp-logo6d974d7esvg-icon4"
        loading="eager"
        alt=""
        src="/whatsapplogo6d974d7esvg2@2x.png"
        onClick={() => {
          window.open("https://api.whatsapp.com/send/?phone=212671757830")
        
        }}
      />
    </section>
  );
};

export default DivfaqSection;
