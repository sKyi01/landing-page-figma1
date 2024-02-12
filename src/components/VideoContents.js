import React from "react";
import "../componentCss/VideoContents.css";
import VideoPlayer from "../assets/videoPlayer.png";
import CharmTick from "../assets/charm_tick.png";
import BaseBtn from "../assets/base.png";
import bottomAnimation from "../assets/bottomAnimation.png";
import subframe1 from "../assets/sunframe1.png";
import subframe2 from "../assets/sunframe2.png";
import subframe3 from "../assets/sunframe3.png";

const VideoContents = () => {
  return (
    <div>
      <div className="videoContentsMain">
        <div class="videoPlayer">
          <video id="videoPlayerSize" controls poster={VideoPlayer}>
            <source src="/path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="Note">
          <div id="note1">
            <div id="contact_directory_only_provides_premium_quality_contacts_from_trusted_sources_to_keep_our_database_accurate_and_up_to_date_">
              Contact Directory only provides premium quality <br />
              contacts from trusted sources to keep our database <br />
              accurate and up-to-date.
            </div>

            <div
              id="note2"
              
            >
              <span id="average_95__accuracy_for_data_points">
                <img className="CharmTick" src={CharmTick} /> Average 95% Accuracy for Data Points
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img className="CharmTick" src={CharmTick} /> Updated Every 90 days to Ensure
                Freshness
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img  className="CharmTick" src={CharmTick} /> Real-Time Data verification on Exports
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img className="CharmTick" src={CharmTick} /> Data Quality guaranteed
              </span>

              <div

              id="noteBtn"
               
              >
                <button id="noteBtnRes">
                  <span>
                    <img id="noteBtnImg" src={BaseBtn} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataNote">
        <div className="dataNote1">
          <div  id="data_inspired">
            <p className="dataHeading">Data Inspired</p>
          </div>
          <div id="__p__lorem_ipsum_dolor_sit_amet_consectetur__mauris_tellus_risus_ac_sagittis_eu__lectus_sit_sodales_pulvinar_egestas__hendrerit_diam_mi_egestas_venenatis__blandit_curabitur_in_eu_sed_sit_sit_nullam_sem_">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>

        <div className="dataNote2">
          <div id="data_inspired2">
            <p className="dataHeading">Corporate social responsibility</p>
          </div>
          <div id="" className="dataNote2Padding">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>

        <div className="dataNote3">
          <div id="data_inspired">
           <p className="dataHeading"> Machine learning </p>
          </div>
          <div id="__p__lorem_ipsum_dolor_sit_amet_consectetur__mauris_tellus_risus_ac_sagittis_eu__lectus_sit_sodales_pulvinar_egestas__hendrerit_diam_mi_egestas_venenatis__blandit_curabitur_in_eu_sed_sit_sit_nullam_sem_">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>
      </div>

      <div className="signContact">
        <div className="signContact1">
          <div id="contact_directory_bottom">
            <span id="signUp">Sign up to the </span>Contact Directory
          </div>
          <div id="lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__nunc_vulputate_libero_et_velit_interdum__ac_aliquet_odio_mattis_">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>

          <div className="twoBottomBtn">
            <a className="bookButton1"  href="#">
              Get started today
            </a>

            <a className="bookButton1"  href="#">
            Book a free demo
            </a>
          </div>
        </div>

        <div className="signContact2">

        <img id="subframe1" src={subframe1}/>
        <img id="subframe2"  src={subframe2}/>

        <img id="subframe3"  src={subframe3}/>

        
        </div>




        
      </div>
    </div>
  );
};

export default VideoContents;
