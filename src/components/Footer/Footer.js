import React from "react";
import "./Footer.css";
import footerimg from "../../images/footer.png";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={footerimg} alt="" />
      </div>
      <div>
        <h2 className="heading">Our Services</h2>
        <ul>
          <li>Valuation and Estimate</li>
          <li>Architectural Design</li>
          <li>Structural Design</li>
          <li>Interior Design</li>
          <li>3D-Rendering</li>
          <li>Survey</li>
        </ul>
      </div>
      <div>
        <h2 className="heading">Contacts </h2>
        <ul>
          <li>Banasthali, Kathmandu</li>
          <li>9810184061</li>
          <li>design.associates12@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
