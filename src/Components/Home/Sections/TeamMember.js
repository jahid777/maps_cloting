import React from "react";
import "./../Home.css";

const TeamMember = () => {
  const milon = "https://i.ibb.co/S56LpXK/Preson2.webp";
  return (
    <div className="container-fluid teamMember">
      <div className="teamHeader">
        <h3>Management Team</h3>
        <div className="hr"></div>
      </div>
      <div className="container">
        <div className="row teamMain mt-5">
          <div className="col-md-4 singleMember">
            <img src={milon} alt="Milon" className="profileImage mb-2" />
            <h2 className="name">Milon Kumar Biswas</h2>
            <p className="designation">Chairman</p>
          </div>
          <div className="col-md-4 singleMember">
            <img
              src="https://i.ibb.co/qCtC39T/Preson1.webp"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name">Md. Abu Jaher Polash</h2>
            <p className="designation">Managing Director</p>
          </div>
          <div className="col-md-4 singleMember">
            <img
              src="https://i.ibb.co/0jWXX0m/Preson3.webp"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name"> Mst. Amena Khatun</h2>
            <p className="designation">Director</p>
          </div>
          {/* <div className="col-md-3 singleMember">
            <img
              src="https://seopage1.net/wp-content/uploads/2019/02/rajat.jpg"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name">Md. Sohel Rana</h2>
            <p className="designation">Director</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
