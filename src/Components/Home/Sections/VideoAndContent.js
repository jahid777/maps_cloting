import React from "react";
import "./../Home.css";
import video from "../../../video/myvideo.mp4";

const Video = () => {
  return (
    <div className="videoContent">
      <div className="row mainContent">
        <div className="col-md-6 leftContent">
          <p>
            <span> MAPS CLOTHING LTD., </span> started its Garment business in
            2012 with a small buying house in Dhaka, Bangladesh. It has now
            grown into an Internationally & Nationally trusted in knitting for
            skilled workmanship, progressive Research & Development consistent
            quality and services through a 100 strong workforce.
          </p>
        </div>
        <div className="col-md-6 RightVideo">
          <video
            muted
            loop
            autoPlay
            // ReactPlayer
            // reactplayer={true}
            controls
            src={video}
            className="mainVideo"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
