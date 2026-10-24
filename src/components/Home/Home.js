import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Main } from "../Services/Services";
import HomePage from "./imgs/SVG/Home Page.png";
import WhoLogo from "./imgs/SVG/Who we are.png";
import wedesign from "./imgs/SVG/we design and build.png";
import whywazwork from "./imgs/SVG/Why Wazwork.png";

const StatsBar = () => {
  return (
    <div className="stats-bar-wrapper py-4 mb-5">
      <div className="container">
        <div className="row g-4 text-center justify-content-center">
          <div className="col-6 col-md-3">
            <div className="stat-card p-3 rounded-4">
              <h2 className="fw-extrabold text-primary mb-1">50+</h2>
              <p className="text-secondary small fw-semibold m-0">Delivered Projects</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card p-3 rounded-4">
              <h2 className="fw-extrabold text-primary mb-1">99%</h2>
              <p className="text-secondary small fw-semibold m-0">Client Satisfaction</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card p-3 rounded-4">
              <h2 className="fw-extrabold text-primary mb-1">10+</h2>
              <p className="text-secondary small fw-semibold m-0">Vetted Specialists</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-card p-3 rounded-4">
              <h2 className="fw-extrabold text-primary mb-1">24/7</h2>
              <p className="text-secondary small fw-semibold m-0">Direct Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Submit Your Scope",
      desc: "Share your project goals, preferred stack, or talent requirements through our interactive form.",
      icon: "📋",
    },
    {
      step: "02",
      title: "Match With Specialists",
      desc: "Ali Wazeer and our vetted team analyze your needs and assemble the perfect dedicated team.",
      icon: "⚡",
    },
    {
      step: "03",
      title: "Iterate & Launch",
      desc: "Receive regular sprints, transparent milestones, and production-ready deployments on schedule.",
      icon: "🚀",
    },
  ];

  return (
    <section className="how-it-works-section py-5 my-5">
      <div className="container">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-2">
            Seamless Workflow
          </span>
          <h2 className="fw-bold display-6 section-title">How Wazwork Works</h2>
          <p className="text-secondary">
            From initial concept to final launch, we make hiring top technical talent and
            building robust products effortless.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((item) => (
            <div key={item.step} className="col-md-4">
              <div className="step-card h-100 p-4 rounded-4 shadow-sm text-center">
                <div className="step-badge mb-3">{item.icon}</div>
                <div className="text-primary fw-bold small mb-2">STEP {item.step}</div>
                <h4 className="fw-bold mb-3 text-dark">{item.title}</h4>
                <p className="text-secondary small m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Head = () => {
  return (
    <section className="head-right">
      <div className="head">
        <div className="head-img">
          <img alt="Discover Wazwork services" src={HomePage} />
        </div>
        <div className="content">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            Elite Tech Agency & Talent Network
          </span>
          <h2>
            Hire Top Tech Talent & Build Scalable Digital Solutions
          </h2>
          <p>
            Wazwork is an integrated digital platform connecting businesses with vetted
            freelance specialists and high-tier engineering teams. Led by Ali Wazeer, we
            deliver custom AI models, modern web applications, UI/UX designs, and enterprise
            security solutions tailored to accelerate your business.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/contact" className="contact-btn text-decoration-none text-center">
              🚀 Start Project
            </Link>
            <Link
              to="/services"
              className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoAreWe = () => {
  return (
    <section className="head-left">
      <div className="head">
        <div className="head-img">
          <img alt="Who we are" src={WhoLogo} />
        </div>
        <div className="content">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            About Our Mission
          </span>
          <h2>Who We Are ?</h2>
          <p>
            We are a multidisciplinary technology powerhouse bridging the gap between
            visionary founders and high-performing developers, designers, and data scientists.
            With a focus on agile delivery and extreme reliability, we treat your business goals
            as our own personal mission.
          </p>
          <div>
            <Link to="/team" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
              Meet Our Talent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WeDesign = () => {
  return (
    <section className="head-right">
      <div className="head">
        <div className="head-img">
          <img alt="We design and build" src={wedesign} />
        </div>
        <div className="content">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            Full-Cycle Development
          </span>
          <h2>
            We design and build innovative solutions for our trusted partners
          </h2>
          <p>
            Wazwork provides specialized, end-to-end consulting for startups and enterprises.
            Whether you need a quick prototype, a robust microservices backend, predictive AI,
            or an end-to-end digital marketing campaign, we have the specialized talent ready
            to execute immediately.
          </p>
          <div>
            <Link to="/products" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
              Browse Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyWazwork = () => {
  return (
    <section className="head-left">
      <div className="head">
        <div className="head-img">
          <img alt="Why Wazwork" src={whywazwork} />
        </div>
        <div className="content">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            Why Choose Us
          </span>
          <h2>Why Wazwork ?</h2>
          <p>
            Unlike traditional agencies with bloated overhead, Wazwork gives you direct
            access to senior talent at transparent, flexible pricing. You get fast turnarounds,
            clear communication, and milestone-based payments with zero risk.
          </p>
          <div>
            <Link to="/contact" className="contact-btn text-decoration-none text-center">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="cta-banner py-5 my-5 text-center text-white rounded-5 mx-3 mx-lg-5 p-4 p-md-5">
      <div className="container py-3">
        <h2 className="display-6 fw-bold mb-3">Ready to Accelerate Your Business?</h2>
        <p className="lead fs-6 text-white-50 max-w-700 mx-auto mb-4">
          Tell us about your upcoming project or apply to join our expert roster.
          Every submission goes directly to <strong>ali.wazeer2000@gmail.com</strong>.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link
            to="/contact"
            className="btn btn-light text-primary fw-bold rounded-pill px-5 py-3 shadow"
          >
            🚀 Request a Project / Hire Us
          </Link>
          <a
            href="https://wa.me/2010568381"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light rounded-pill px-4 py-3 fw-semibold"
          >
            💬 WhatsApp: +20 10 568 381
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Head />
      <StatsBar />
      <WhoAreWe />
      <Main />
      <HowItWorks />
      <WeDesign />
      <WhyWazwork />
      <CallToAction />
    </div>
  );
};

export default Home;
