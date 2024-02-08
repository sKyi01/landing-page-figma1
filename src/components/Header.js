import React from "react";
import "../componentCss/Header.css";
import iconImage from "../assets/group_145.png"; /* Update the path to your image file */
import contactIcon from "../assets/frame_58253.png";
const Header = () => {
  return (
    <div className="iconLayout">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div id="">
          <img id="group_145" src={iconImage} alt="Icon" />
        </div>
        <div id="contact_directory">Contact Directory</div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              style={{
                color: "#000080",
                fontSize: "18px",
                marginLeft: "5vw",
                fontWeight: "500",
              }}
              class="nav-item nav-link active"
              href="#"
            >
              How it works
            </a>
            <a
              style={{
                color: "#000080",
                fontSize: "18px",
                marginLeft: "3vw",
                fontWeight: "500",
              }}
              class="nav-item nav-link font-bold "
              href="#"
            >
              Pricing
            </a>
            <a
              style={{
                color: "#000080",
                fontSize: "18px",
                marginLeft: "3vw",
                fontWeight: "500",
              }}
              class="nav-item nav-link "
              href="#"
            >
              Newsletter
            </a>
            <a
              style={{
                color: "#000080",
                fontSize: "18px",
                marginLeft: "3vw",
                fontWeight: "500",
              }}
              class="nav-item nav-link dropdown-toggle "
              href="#"
            >
              Resources
            </a>

            <div class="bookButton" style={{ marginLeft: "5vw" }}>
              <a style={{color:"white"}}href="#">Book a free demo</a>
            </div>

            <div id="" style={{ marginLeft: "2vw" }}>
              <img src={contactIcon} alt="Icon" />
            </div>
            <div
              style={{
                color: "#000080",
                fontSize: "18px",
                fontWeight: "500",
                marginTop:"10px",
                marginLeft:"10px"
              }}
            >
              <a href="#" style={{ color: "#000080"}}>Hi! Please Sign In</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


