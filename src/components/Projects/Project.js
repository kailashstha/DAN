import React from "react";
import "./Project.css";
import Valuation from "../../images/valuation.png";

function Project() {
  return (
    <>
      <div className="projectsHeading">
        <h1>Our Recent Projects </h1>
      </div>
      <div className="projects container">
        <div class="box">
          <img src={Valuation} alt="" />
          <h2>Our This Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our That Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our That Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our This Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our That Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our This Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our That Project</h2>
        </div>
        <div class="box">
          {" "}
          <img src={Valuation} alt="" />
          <h2>Our This Project</h2>
        </div>
      </div>
    </>
  );
}

export default Project;
