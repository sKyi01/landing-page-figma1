import React from "react";
import "../componentCss/Content.css";
import Frame from "../assets/frame.png";
import Frame2 from "../assets/frame2.png";
import Vector from "../assets/Vector.png";
import GoogleIcon from "../assets/googleIcon.jpg";
import LinkedInIcon from "../assets/linkedinIcon.jpg";

const Content = () => {
  return (
    <div>
      <div className="content">
        <div className="content1">
          <div id="all_the_connections_you_need">
            All the connections
            <br />
            you need
            <div id="we_are_the_go_to_digital_resource_to_help_you_drive_outreach">
              We are the go-to digital resource to help <br /> you drive
              outreach
            </div>
            <div className="workMail">
              <div className="workEmail1">
                <div id="enter_your_work_email">Enter your work email</div>
              </div>

              <div className="workEmail2">
                <div id="start_for_free">
                  Start For <span id="freeText" >Free</span>
                </div>
              </div>

              <br />
            </div>
          </div>

          <div id="creditCard"
            
          >
            <div id="no_credit_card_required"><span><img src={Vector}/> No credit card required</span></div>
          </div>

          <div className="giButton">

          <div className="gButton">

          <span id="signup_with_google"><a href="#"><img id="googleIcon" src={GoogleIcon}/>
          Signup with Google</a>
        </span>
          
          
          </div>
    
          <div className="iButton">

          <span id="signup_with_google"><a href="#"><img  id="googleIcon" src={LinkedInIcon}/>
          Signup with LinkedIn</a>
        </span>
          
          
          
          
          </div>
          
          
          
          
          
          
          </div>
        </div>

        <div className="content2">
          <div>
            <img id="frame" src={Frame} />
          </div>
        </div>
        
      </div>

      

      <div>
        <img id="frame2"  src={Frame2} />
      </div>


     




    </div>
  );
};

export default Content;
