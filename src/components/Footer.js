import React from "react";
import "../componentCss/Footer.css";
import HomeButton from "../assets/home.png";
import MailIcon from "../assets/mailbox.png";
import PhoneIcon from "../assets/phoneIcon.png";
import TeleIcon from "../assets/teleIcon.png";
import FacebookIcon from "../assets/facebook.png";
import LinkedinIcon from "../assets/linkedin.png";
import TwitterIcon from "../assets/twitter.png";


const Footer = () => {
  return (
    <div>
    <div className="footerParentDiv" >
      <div class="footerItem1">
        <div id="contact_directory1">Contact Directory</div>

        <br />
        <p
          id="lorem_ipsum_dolor_sit"
        >
          fsdfffofj df d
        </p>
        <br />

        <p id="footerDesc" >
          ight of the container or parent element to which these styles are
          applied. Once you have that information, you can use the fo
        </p>
      </div>


      <div class="footerItem2">


      <div class="item1">
      <div id="__p__contact" >
	CONTACT
</div>
<br/>

<div >
<a href="#" className="footerContactDesc" ><img className="footerSubBtn" src={HomeButton} alt="Home" /> New York, NY 10012, US</a>
<br /><br />
<a  href="#" className="footerContactDesc" ><img className="footerSubBtn" src={MailIcon} alt="mail" /> info@gmail.com</a>
<br /><br />
<a href="#" className="footerContactDesc" ><img className="footerSubBtn" src={PhoneIcon} /> + 01 234 567 88</a>
<br /><br />
<a href="#" className="footerContactDesc" ><img className="footerSubBtn" src={TeleIcon} /> + 01 234 567 89</a>
</div>

      
      </div>

      <div class="item2" >
      <div id="__p__contact" >
      PRODUCTS
    </div>
    <br/>

    <a href="#" className="footerContactDesc"> Platform</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Discover</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Resources</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Job</a>

      
      
      
      
      </div>


      <div class="item3">

      <div id="__p__contact" >
      USEFUL LINKS
    </div>

    <br/>

    <a href="#" className="footerContactDesc"> Your Account</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Discover</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Connections</a>
    <br/><br/>
    <a href="#" className="footerContactDesc"> Help</a>
      
      
      
      </div>
      
      
      
      
      </div>


      





    </div>
    <div class="socialIcons">

    <span ><img className="socialIconsInner"  src={FacebookIcon}/></span>
    <span><img className="socialIconsInner" src={LinkedinIcon}/></span>
    <span><img className="socialIconsInner" src={TwitterIcon}/></span>
    <span><img className="socialIconsInner" src={TwitterIcon}/></span>






      
      
      
      </div>

      <div className="line">
      
      </div>
      <footer id="__p__contact" >
      <p>&copy; 2022 Copyright: @BlackCoffer (OPC) Pvt. Ltd</p>
    </footer>

    </div>
  );
};

export default Footer;
