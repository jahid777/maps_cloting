import React from "react";
import "./../Home.css";

const TeamMember = () => {
  const milon = "https://seopage1.net/wp-content/uploads/2019/02/rajat.jpg";
  return (
    <div className="container-fluid teamMember">
      <div className="teamHeader">
        <h3>Management Team</h3>
        <div className="hr"></div>
      </div>
      <div className="container">
        <div className="row teamMain mt-5">
          <div className="col-md-3 singleMember">
            <img src={milon} alt="Milon" className="profileImage mb-2" />
            <h2 className="name">Milon Kumar Biswas</h2>
            <p className="designation">Chairman</p>
          </div>
          <div className="col-md-3 singleMember">
            <img
              src="https://seopage1.net/wp-content/uploads/2019/02/rajat.jpg"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name">Milon Kumar Biswas</h2>
            <p className="designation">Chairman</p>
          </div>
          <div className="col-md-3 singleMember">
            <img
              src="https://seopage1.net/wp-content/uploads/2019/02/rajat.jpg"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name">Milon Kumar Biswas</h2>
            <p className="designation">Chairman</p>
          </div>
          <div className="col-md-3 singleMember">
            <img
              src="https://seopage1.net/wp-content/uploads/2019/02/rajat.jpg"
              alt="Milon"
              className="profileImage mb-2"
            />
            <h2 className="name">Milon Kumar Biswas</h2>
            <p className="designation">Chairman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
