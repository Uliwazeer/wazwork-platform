import React from "react";
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
      <div className="content">{content}</div>
    </div>
  );
};

const Head = () => {
  return (
    <div className="head">
      <div className="head-img">
        <img alt="" src={services} />
      </div>
      <div className="content">
        <h2>Our services</h2>
        <p>
          our service depends on what customers need from us. After giving a
          brief description of our services on the main page, customers can
          communicate to discuss the project to be implemented to reach the best
          solution and implementation immediately.
        </p>
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div className="main">
      <h2>Design</h2>
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
      <h2>Programming</h2>
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
    <div>
      <Head />
      <Main />
    </div>
  );
};

export default Services;
