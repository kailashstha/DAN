import React from "react";

import { Link } from "react-router-dom";

import "./Home.css";
import Button from "../Button";
import img1 from "../../icons/1.png";
import img2 from "../../icons/2.png";
import img3 from "../../icons/3.png";
import img4 from "../../icons/4.png";
import img5 from "../../icons/5.png";
import img6 from "../../icons/6.png";
import heroImage from "../../images/homepage.png";
import about from "../../images/DT-image.png";
import valuation from "../../images/valuation.png";
import carousel1 from "../../images/carousel1.png";

function Home() {
  return (
    <div>
      <div className="heroImage">
        <img src={heroImage} alt="HEROIMAGE" />
      </div>
      <div style={{ background: "#b5d4d9" }}>
        <div className="about container">
          <div className="aboutParagraph" style={{ maxWidth: "90%" }}>
            <h2 className="aboutHeading">Design Asociate Nepal</h2>
            <br />
            <p>
              Design Associates Nepal, A noble startup company is a group of
              like minded individuals striving to deliver different services to
              our valued clients using the best of our abilities with the only
              motive of client satisfaction at top.
            </p>
            <Link to="/About">
              <Button Name={"Read More"} />
            </Link>
          </div>
          <div className="aboutImg">
            <img src={about} alt="About" />
          </div>
        </div>
      </div>

      <div className="services">
        <h1 className="container">Our Specilization</h1>
        <div className="service">
          <div>
            <img src={img1} alt="3D-Design" />
          </div>
          <div>
            <img src={img2} alt="Architecture Drawing" />
          </div>
          <div>
            <img src={img3} alt="Estimate and Valuation" />
          </div>
          <div>
            <img src={img4} alt="Interior Design" />
          </div>
          <div>
            <img src={img5} alt="Structural Analysis" />
          </div>
          <div>
            <img src={img6} alt="Survey" />
          </div>
        </div>
      </div>
      <div className="servicesInfo container">
        <div style={{ width: "90%" }}>
          <h2 className="serviceHeading">Estimate and Valuation</h2>
          <p className="serviceParagraph">
            DAN is not only focused on a particular service but is aligned to a
            multitude of services which helps our clients to get their
            multicategory jobs done from the same platform. Our qualified team
            members here at DAN have been providing valuable suggestions to
            client’s intent bringing the best possible designs that resonate to
            the client’s req
          </p>
        </div>
        <div>
          <img src={valuation} alt="3D-design" />
        </div>
      </div>

      <div className="projectCompleted" style={{ background: "#b5d4d9" }}>
        <h1>Project Completed </h1>
        <h1 className="ProjectNumber">275</h1>
      </div>
      <div className="carousel">
        <img src={carousel1} alt="" />
      </div>
    </div> /*  maindiv */
  );
}

export default Home;
