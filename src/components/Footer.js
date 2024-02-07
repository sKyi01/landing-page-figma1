import React from "react";
import "../componentCss/Footer.css";
import HomeButton from "../assets/home.png"


const Footer = () => {
  return (
    <div className="footerParentDiv" style={{ marginTop: "300px" }}>
      <div class="footerItem1">
        <div id="contact_directory">Contact Directory container</div>

        <br />
        <p
          id="lorem_ipsum_dolor_sit"
          style={{ textAlign: "left", marginLeft: "6%" }}
        >
          fsdfffofj df d
        </p>
        <br />

        <p style={{ textAlign: "left", marginLeft: "6%" }}>
          ight of the container or parent element to which these styles are
          applied. Once you have that information, you can use the fo
        </p>
      </div>


      <div  className="footerItem2"  style={{ textAlign: "left", marginLeft: "20em" }}>

      <p
      id="__p__contact"
     
    >
      CONTACT
    </p>
    <br/>
    <div style={{display: "flex",alignItems: "center"}}>
    <img style={{marginRight: "10px"}} src={HomeButton} alt="Icon" />
    <p>New York, NY 10012, US</p>
</div>

 

    <br/>



      
      
      
      
      
      
      </div>







    </div>
  );
};

export default Footer;
