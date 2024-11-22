import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "../../components/NavigationBar/navbar";
import "./VolunteerStyleSheet.css";
import picture2 from "./picture2.jpg";

export const VolunteerPage = () => {
  return (
    <>
      <MyNavbar />
      <div className="donation-page">
        <div className="page-content">
          <h3>
            <b> Crowd source for Volunteers for the recent fire outbreak in barangay Pasonanca </b>
          </h3>
          <p className="credits">Creator: Maria Donicia Solomon</p>
          <div className="image-container">
            <img
              src={picture2}
              alt="Crowd source for Volunteers"
            />
          </div>
          <p className="content">
            Eeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="information-styled">
          <h2 className="donation-title">Php 20,000 needed</h2>
          <div className="circular-graph" style={{background: `conic-gradient(#e1a736 50%, #162f65 50%)`}}>
            <div className="percentage">50%</div>
          </div>

          <div className="input-container">
            <div className="button-container">
                <button className="donation-button"> <Link to="/page2"> Donate </Link> </button>
              <button className="donation-button secondary">Share</button>
            </div>

            <div className="donation-list">
            <p>  </p>
            <p> </p>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerPage;
