import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import services from "./pictures/services.svg";
import ai from "./pictures/Icons/Ai.svg";
import backend from "./pictures/Icons/Backend.svg";
import dataAnalysis from "./pictures/Icons/dataAnalysis.svg";
import dataScience from "./pictures/Icons/dataScience.svg";
import uiUx from "./pictures/Icons/ui-ux.svg";
import graphicDesign from "./pictures/Icons/graphicDesign.svg";
import marketing from "./pictures/Icons/Marketing.svg";
import frontend from "./pictures/Icons/Frontend.svg";

const Service = ({ icon_container, title, content, color }) => {
  return (
    <div className="service">
      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon_container}
      </div>
      <h3 className="title">{title}</h3>
      <div className="content mb-3">{content}</div>
      <div className="mt-auto w-100 pt-3 border-top">
        <Link
          to="/contact"
          className="btn btn-outline-primary btn-sm rounded-pill w-100 fw-semibold py-2"
        >
          Request Service &rarr;
        </Link>
      </div>
    </div>
  );
};

const Head = () => {
  return (
    <div className="head">
      <div className="head-img">
        <img alt="Wazwork technical services" src={services} />
      </div>
      <div className="content">
        <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
          On-Demand Freelance Services
        </span>
        <h2>Professional Technical Services for Modern Businesses</h2>
        <p>
          Whether you need a full agile team or a single domain expert, Wazwork provides
          flexible engagement models. From initial scope estimation to deployment, we deliver
          tailored solutions that integrate seamlessly with your product roadmap.
        </p>
        <div>
          <Link to="/contact" className="contact-btn text-decoration-none text-center">
            🚀 Order a Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div className="main">
      <h2>Design & Creative Services</h2>
      <div className="services-container">
        <Service
          color={"#9c19c9"}
          icon_container={<img alt="UI/UX Design" src={uiUx} />}
          title={"UI/UX Design"}
          content={"User research, wireframing, and interactive prototypes crafted for delightful user journeys."}
        />
        <Service
          color={"#ffaf00"}
          icon_container={<img alt="Graphic Design" src={graphicDesign} />}
          title={"Graphic Design"}
          content={
            "Distinctive visual branding, logos, marketing graphics, and creative assets tailored to your identity."
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={<img alt="Marketing" src={marketing} />}
          title={"Marketing"}
          content={
            "Targeted digital marketing strategies, growth funnels, and data-backed campaign management."
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={<img alt="Data Analysis" src={dataAnalysis} />}
          title={"Data Analysis"}
          content={
            "Transforming raw business metrics into actionable insights, dashboards, and growth metrics."
          }
        />
      </div>

      <h2>Engineering & Intelligence</h2>
      <div className="services-container">
        <Service
          color={"#ffaf00"}
          icon_container={<img alt="Artificial Intelligence" src={ai} />}
          title={"Artificial Intelligence"}
          content={
            "Custom machine learning models, intelligent chatbots, and AI-driven workflow automations."
          }
        />
        <Service
          color={"#ff4e6e"}
          icon_container={<img alt="Frontend Web Development" src={frontend} />}
          title={"Frontend Web Development"}
          content={
            "Fast, highly responsive, and accessible modern web applications built using React and modern CSS."
          }
        />
        <Service
          color={"#1975c9"}
          icon_container={<img alt="Backend Web Development" src={backend} />}
          title={"Backend Web Development"}
          content={
            "Scalable server architectures, secure REST & GraphQL APIs, and robust database management."
          }
        />
        <Service
          color={"#9c19c9"}
          icon_container={<img alt="Data Science" src={dataScience} />}
          title={"Data Science"}
          content={
            "Predictive modeling, deep learning pipelines, and statistical analysis to solve complex challenges."
          }
        />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      <Head />
      <Main />
    </div>
  );
};

export default Services;
