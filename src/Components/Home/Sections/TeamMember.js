import React from "react";
import "./../Home.css";

const TeamMember = () => {
  return (
    <div className="container-fluid teamMember">
      <div className="teamHeader">
        <h3>Management Team</h3>
        <div className="hr"></div>
      </div>
      <div className="container">
        <div className="row teamMain mt-5">
          <div className="col-md-4 singleMember">
            <img
              src="https://i.ibb.co/3ryLbWT/Preson1.webp"
              alt="Imran"
              className="profileImage mb-2"
            />
            <h2 className="name">Md. Imran Khan</h2>
            <p className="designation">CEO</p>
          </div>
          <div className="col-md-4 singleMember">
            <img
              src="https://i.ibb.co/gS6G0X2/Preson2.webp"
              alt="Polash"
              className="profileImage mb-2"
            />
            <h2 className="name">Md. Abu Jaher Polash</h2>
            <p className="designation">Managing Director</p>
          </div>
          <div className="col-md-4 singleMember">
            <img
              src="https://i.ibb.co/0jWXX0m/Preson3.webp"
              alt="Amena"
              className="profileImage mb-2"
            />
            <h2 className="name"> Mst. Amena Khatun</h2>
            <p className="designation">Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
