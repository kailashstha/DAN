import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact container">
      <h1>Contact Us</h1>
      <br />
      <br />
      <form method="post" action="#">
        <div className="fields">
          <div className="name">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="email">
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className="message">
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
