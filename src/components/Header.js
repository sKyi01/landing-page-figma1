import React from "react";
import "../componentCss/Header.css";
import iconImage from "../assets/group_145.png"; /* Update the path to your image file */
import contactIcon from "../assets/frame_58253.png";
const Header = () => {
  return (
    <div className="iconLayout">
      
        <span id="contact_directory">
          <img id="group_145" src={iconImage} alt="Icon" />
          Contact Directory
        </span>
     



      <div class="navBarRight">
        <a class="headerMenu  " href="#">
          How it works
        </a>
        <a class="headerMenu " href="#">
          Pricing
        </a>
        <a class="headerMenu " href="#">
          Newsletter
        </a>
        <a class="headerMenu " href="#">
          Resources <i class="fa-solid fa-angle-down"></i>
        </a>

      
          <a className="bookButton" id="booFreeColor" href="#">
            <span id="freeDemoText">Book a free demo</span>
          </a>
        

       <div>
          <img id="contactIcon" src={contactIcon} alt="Icon" />
        

        
          <a id="signIn" href="#">
            Hi! Please Sign In
          </a>
         
          </div>
      </div>
    </div>
  );
};

export default Header;
