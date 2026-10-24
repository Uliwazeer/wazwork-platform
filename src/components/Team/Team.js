import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import TeamImg from "./imgs/Our Team.svg";
import MostafaKadry from "./imgs/mostafa-kadry.jpeg";
import AhmedHassan from "./imgs/Ahmed Hassan.png";
import AliWazir from "./imgs/Ali Wazir.png";
import AmrSalah from "./imgs/Amr Salah.png";
import DaliaMohamed from "./imgs/Dalia Mahmoud.png";
import EmanMohammed from "./imgs/Eman Mohammed.png";
import Eslam from "./imgs/Eslam Ashraf.png";
import MahmoudIbrahim from "./imgs/Mahmoud Ibrahim.png";
import MaiAhmed from "./imgs/Mai Ahmed.png";
import Rabaa from "./imgs/Rabaa Wazeer.png";

const OurTeam = () => {
  return (
    <section className="team-hero">
      <div className="head">
        <div className="head-img">
          <img alt="Wazwork Team" src={TeamImg} />
        </div>
        <div className="content">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            Vetted Technical Talent
          </span>
          <h2>Meet Our Specialist Team & Freelance Experts</h2>
          <p>
            Every engineer and designer on our roster has been strictly vetted for hands-on
            technical competence, clean architectural thinking, and proactive communication.
            Hire individual experts on-demand or assemble a complete cross-functional squad.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/contact" className="contact-btn text-decoration-none text-center">
              🚀 Hire Talent
            </Link>
            <Link to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
              💼 Join Our Network
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const PersonalCard = ({ img, name, title, specialty }) => {
  return (
    <div className="member">
      <div className="img-container">
        <img
          src={img}
          alt={name}
          className={name === "Mostafa Kadry" ? "mostafa-img" : ""}
        />
        <span className="online-indicator" title="Available for hire"></span>
      </div>
      <div className="info py-2">
        <h3>{name}</h3>
        <h5>{title}</h5>
        <span className="badge bg-light text-primary border rounded-pill px-3 py-1 mt-2 small">
          {specialty}
        </span>
      </div>
      <div className="mt-auto w-100 pt-3 border-top">
        <Link
          to="/contact"
          className="btn btn-outline-primary btn-sm rounded-pill w-100 fw-semibold py-2"
        >
          Hire {name.split(" ")[0]} &rarr;
        </Link>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section className="main container py-4">
      <div className="text-center max-w-700 mx-auto mb-5">
        <h2 className="fw-bold display-6">Our Vetted Specialists</h2>
        <p className="text-secondary lead fs-6">
          Ready to scale your next build with top-tier AI, full-stack, design, and cybersecurity talent.
        </p>
      </div>

      <div className="members-container">
        <PersonalCard
          img={AliWazir}
          name="Uli Wazeer"
          title="AI Engineer & Lead"
          specialty="Artificial Intelligence"
        />
        <PersonalCard
          img={AmrSalah}
          name="Amr Salah"
          title="UI/UX Designer"
          specialty="Figma & Prototyping"
        />
        <PersonalCard
          img={MostafaKadry}
          name="Mostafa Kadry"
          title="Full-Stack Web Developer"
          specialty="React & Node.js"
        />
        <PersonalCard
          img={Eslam}
          name="Eslam Ashraf"
          title="Frontend Engineer"
          specialty="Modern JavaScript"
        />
        <PersonalCard
          img={AhmedHassan}
          name="Sayed Gomaa"
          title="Data Scientist"
          specialty="Machine Learning"
        />
        <PersonalCard
          img={Rabaa}
          name="Rabaa Wazeer"
          title="Data Analyst"
          specialty="BI & Analytics"
        />
        <PersonalCard
          img={MaiAhmed}
          name="Mai Ahmed"
          title="Frontend Developer"
          specialty="UI & React"
        />
        <PersonalCard
          img={EmanMohammed}
          name="Eman Mohammed"
          title="Backend Developer"
          specialty="APIs & Databases"
        />
        <PersonalCard
          img={DaliaMohamed}
          name="Dalia Mahmoud"
          title="Web Developer"
          specialty="Frontend Architecture"
        />
        <PersonalCard
          img={MahmoudIbrahim}
          name="Mahmoud Ibrahim"
          title="Web Penetration Tester"
          specialty="Cybersecurity & Audit"
        />
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div className="team-page">
      <OurTeam />
      <TeamMembers />
    </div>
  );
};

export default Team;
