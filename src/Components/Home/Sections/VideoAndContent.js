import React from "react";
import "./../Home.css";
import video from "../../../video/myvideo.mp4";

const Video = () => {
  return (
    <div className="videoContent">
      <div className="row mainContent">
        <div className="col-md-6 leftContent">
          <p>
            <span> MAPS CLOTHING LTD. </span> is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
        </div>
        <div className="col-md-6 RightVideo ml-5">
          <video
            muted
            loop
            autoPlay
            // ReactPlayer
            // reactplayer={true}
            controls
            src={video}
            style={{ height: "600px", width: "600px" }}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
