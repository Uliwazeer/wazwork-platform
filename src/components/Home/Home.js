import React from "react";
import "./Home.css";
import { Main } from "../Services/Services";
import HomePage from "./imgs/SVG/Home Page.png";
import WhoLogo from "./imgs/SVG/Who we are.png";
import wedesign from "./imgs/SVG/we design and build.png";
import whywazwork from "./imgs/SVG/Why Wazwork.png";

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Head = () => {
  return (
    <section className="head-right">
      <div className="head">
        <div className="head-img">
          <img alt="Discover Wazwork services" src={HomePage} />
        </div>
        <div className="content">
          <h2>
            Discover your perfect service and the prices that suit your
            business.
          </h2>
          <p>
            At Wazwork, our multidisciplinary team of designers, software engineers,
            data specialists, and AI practitioners brings your digital vision to life.
            It is the collective dedication of our entire team that drives your business
            forward, elevating your brand and delivering exceptional, tailored solutions.
          </p>
          <div className="text-center">
            <button className="contact-btn" onClick={scrollToContact}>
              Contact us
            </button>
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
          <h2>Who We Are ?</h2>
          <p>
            Every business requires comprehensive, integrated solutions to
            achieve lasting success. At Wazwork, your goals become our mission,
            backed by dedicated support, modern technologies, and results-driven
            collaboration.
          </p>
          <div className="text-center">
            <button className="contact-btn" onClick={scrollToContact}>
              Contact us
            </button>
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
          <h2>
            We design and build innovative solutions for our trusted partners
          </h2>
          <p>
            Wazwork provides specialized and responsive technical consulting
            services for startups, growing agencies, and established enterprises.
            Our talented team brings together UI/UX designers, full-stack developers,
            AI practitioners, and data specialists to build impactful web and software
            products that scale with your growth.
          </p>
          <div className="text-center">
            <button className="contact-btn" onClick={scrollToContact}>
              Contact us
            </button>
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
          <h2>Why Wazwork ?</h2>
          <p>
            Wazwork offers an all-in-one suite of digital services designed for
            startups, small businesses, and growing enterprises. We deliver high-value,
            cost-effective solutions with total transparency. From inception to final
            delivery, our team works with you step by step to complete your tasks in a
            very short time.
          </p>
          <div className="text-center">
            <button className="contact-btn" onClick={scrollToContact}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Head />
      <WhoAreWe />
      <Main />
      <WeDesign />
      <WhyWazwork />
    </div>
  );
};

export default Home;
