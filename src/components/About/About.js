import React from "react";
import "./About.css";
import about from "../../images/about.png";

function About() {
  return (
    <div style={{ background: "#C1DEE2" }}>
      <div className="container">
        <div>
          <h1 className="dan">D &nbsp; A &nbsp; N</h1>
        </div>
        <br />

        <div className="paragraph">
          <div style={{ width: "50%" }}>
            <h2>
              <span style={{ fontSize: "60px" }}>D</span>EDICATED TEAM
            </h2>
            <p>
              We have a proficient team here at DAN each equipped with profound
              knowledge and skills. WE KNOW WHAT WE DO and WE DO IT RIGHT. We
              are always focused on our work physically and mentally in order to
              deliver the results that our clients are longing for.
            </p>
            <br />
            <h2>
              <span style={{ fontSize: "60px" }}>A</span>FFORDABLE COST
            </h2>
            <p>
              Our greatest reward for what we do is the Client Satisfaction. We
              always pursue this idea and try to produce the results of our work
              at the lowest price possible in the market. The backbone of DAN is
              always Service Oriented despite the fact of industry being profit
              motive.
            </p>
            <br />
            <h2>
              <span style={{ fontSize: "60px" }}>N</span>UMBER OF SERVICES{" "}
            </h2>
            <p>
              Since we have a team skilled in a diversified field we provide our
              clients with a multitude of services. Our platform contains almost
              every service that our clients could ask for. Our motto is One to
              Many. We welcome one client with many services.
            </p>
          </div>
        </div>
        {/* <div className="secondParagraph">
          <p>
            Here at DAN, we produce multiple designs starting from Structures
            and Architectures to different Drawing and Supervision works. We are
            specialized in creating attractive Interior Designs that best suit
            the client's interest. Apart from design works we add much more to
            the table. We guarantee that the Valuation Work we do here is what
            the client is looking for. Folks at DAN have succeeded in producing
            many 3D Models and have been positively reviewed by different
            categories of clients. Survey has always been our forte and we do
            have years of experience doing surveys on different retrospects. We
            assure you that our survey reports are exactly what you’ve been
            looking for. We also do other civil works ranging from Water
            Resource Planning to Earthquake Safety Designing.
          </p>
        </div> */}
      </div>
      <div className="whyUsContainer">
        <div className="whyUsText">
          <h1>Why Us ?</h1>
          <br />
          <br />

          <h2>Meticulous Planning</h2>

          <p>
            We produce designs with meticulous care. We plan, analyze and
            implement details into our works to guarantee the quality of our
            designs.
          </p>
          <br />
          <h2>Completion on Time</h2>

          <p>
            We are stringent on our timeline. We get our task done within the
            stipulated time of our clients.
          </p>
          <br />
          <h2>Perfect Execution</h2>

          <p>
            Client’s requirement is our work command. We generate design
            outcomes that best reflects the client’s desire.
          </p>
          <br />
          <h2>Affordable Prices</h2>

          <p>
            Our main work ethic is client satisfaction. We get the job done
            under minimal cost constraints. Our main work ethic is client
            satisfaction. We get the job done under minimal cost constraints.
          </p>
        </div>
        <div className="whyUsimg">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
