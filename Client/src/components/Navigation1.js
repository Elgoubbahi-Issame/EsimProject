import "./Navigation1.css";
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import { useState } from "react";

const Navigation1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  let prevScrollPos = window.scrollY;
  
  setInterval(function() {
    const navbar = document.querySelector('.navigation9');
    if ( navbar && window.scrollY === 0 && prevScrollPos !== 0) {
      navbar.classList.add('transparent');
    } else if (navbar && window.scrollY !== 0 && prevScrollPos === 0) {
      navbar.classList.remove('transparent');
    }
    prevScrollPos = window.scrollY;
  }, 100);

  return (
    <header className="navigation9 transparent">
      <div className="clip-path-group-wrapper">
      <Link to="/" className="link-plans8"><img className="clip-path-group1" alt="" src="/esim-icon.svg" /></Link>
      </div>
      <div className="heading-how-to-buy">
        <div className="monty-e-s-i-m">
          <Link to="/plans" className="link-plans8">Plans</Link>
          <Link to="/how-it-works" className="link-how7">How it works</Link>
          <Link to="/partnership" className="link-partnership7">Partnership</Link>
          <Link to="/about-us" className="link-about7">About us</Link>
          <Link to="/contact-us" className="link-contact14">Contact us</Link>
        </div>
      </div>
      <div className="divcard-parent">
        {/* <div className="divcard32">
          <div className="en8">en</div>
          <img
            className="drop-arrowed3f48dfsvg-fill-icon"
            alt=""
            src="/droparrowed3f48dfsvg-fill.svg"
          />
        </div> */}
        {/* <div className="link13">
        <Link to="/sign-in" className="sign-in8"><b >Sign in</b></Link>
        </div> */}
        <div className="icon-menu" onClick={()=> {
          setIsOpen(true);
          console.log('clicked')
        }}>
        <IoMdMenu />
        </div>
      </div>
      <div className={`side-menu ${isOpen ? 'active' : '' }`} >
        <div className="close-icon" style={{display:`${isOpen ? 'flex' : 'none'}`}} onClick={()=> setIsOpen(false)}>
        <IoMdClose  />
        </div>
        
          <Link to="/plans" className="link-plans8">Plans</Link>
          <Link to="/how-it-works" className="link-how7">How it works</Link>
          <Link to="/partnership" className="link-partnership7">Partnership</Link>
          <Link to="/about-us" className="link-about7">About us</Link>
          <Link to="/contact-us" className="link-contact14">Contact us</Link>
          {/* <Link to="/sign-in" className="link-about7"><b >Sign in</b></Link> */}
        
      </div>
    </header>
  );
};

export default Navigation1;
