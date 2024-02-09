import React from "react";
import "../componentCss/VideoContents.css";
import VideoPlayer from "../assets/videoPlayer.png";
import CharmTick from "../assets/charm_tick.png";
import BaseBtn from "../assets/base.png";

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
              style={{
                textAlign: "left",
                marginTop: "30px",
                paddingLeft: "50px",
                lineHeight: "3",
              }}
            >
              <span id="average_95__accuracy_for_data_points">
                <img src={CharmTick} /> Average 95% Accuracy for Data Points
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img src={CharmTick} /> Updated Every 90 days to Ensure
                Freshness
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img src={CharmTick} /> Real-Time Data verification on Exports
              </span>
              <br />
              <span id="average_95__accuracy_for_data_points">
                <img src={CharmTick} /> Data Quality guaranteed
              </span>

              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  paddingTop: "50px",
                }}
              >
                <button style={{ border: "none", outline: "none" }}>
                  <span>
                    <img src={BaseBtn} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dataNote">
        <div className="dataNote1">
          <div style={{paddingLeft:"1vw"}} id="data_inspired">Data Inspired</div>
          <div id="__p__lorem_ipsum_dolor_sit_amet_consectetur__mauris_tellus_risus_ac_sagittis_eu__lectus_sit_sodales_pulvinar_egestas__hendrerit_diam_mi_egestas_venenatis__blandit_curabitur_in_eu_sed_sit_sit_nullam_sem_">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>

        <div className="dataNote2">
          <div style={{paddingLeft:"3vw"}} id="data_inspired">Corporate social responsibility</div>
          <div id="" className="dataNote2Padding">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>

        <div className="dataNote3">
          <div style={{paddingLeft:"2vw"}} id="data_inspired">Machine learning</div>
          <div id="__p__lorem_ipsum_dolor_sit_amet_consectetur__mauris_tellus_risus_ac_sagittis_eu__lectus_sit_sodales_pulvinar_egestas__hendrerit_diam_mi_egestas_venenatis__blandit_curabitur_in_eu_sed_sit_sit_nullam_sem_">
            Lorem ipsum dolor sit amet consectetur. Mauris tellus risus ac
            sagittis eu. Lectus sit sodales pulvinar egestas. Hendrerit diam mi
            egestas venenatis. Blandit curabitur in eu sed sit sit nullam sem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContents;
