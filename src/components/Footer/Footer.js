import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "./imgs/Phone.svg";
import FaceBookIcon from "./imgs/Facebook.svg";
import TwitterIcon from "./imgs/Twitter.svg";
import LinkedInIcon from "./imgs/LinkedIn.svg";
import LogoLight from "./imgs/Logo-light.svg";
import "./Footer.css";

const Company = () => {
  return (
    <div className="col-12 col-md-4">
      <h4 className="fw-bold mb-3 footer-heading">Company</h4>
      <ul className="list-unstyled p-0 m-0">
        <li className="my-2">
          <Link to="/" className="text-decoration-none text-muted footer-link">
            Home
          </Link>
        </li>
        <li className="my-2">
          <Link to="/services" className="text-decoration-none text-muted footer-link">
            Services
          </Link>
        </li>
        <li className="my-2">
          <Link to="/team" className="text-decoration-none text-muted footer-link">
            Our Team
          </Link>
        </li>
        <li className="my-2">
          <Link to="/products" className="text-decoration-none text-muted footer-link">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="col-12 col-md-4" id="contact">
      <h4 className="fw-bold mb-3 footer-heading">Contact Us</h4>
      <div className="my-3 d-flex align-items-center">
        <img src={PhoneIcon} alt="phone" width="22" height="22" />
        <a
          href="tel:+2010568381"
          className="ms-2 text-decoration-none text-dark fw-bold footer-phone"
        >
          +20 10 568 381
        </a>
      </div>
      <div className="d-flex align-items-center social-links mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Facebook"
        >
          <img src={FaceBookIcon} alt="Facebook" width="34" height="34" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Twitter"
        >
          <img src={TwitterIcon} alt="Twitter" width="34" height="34" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <img src={LinkedInIcon} alt="LinkedIn" width="34" height="34" />
        </a>
      </div>
    </div>
  );
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="col-12 col-md-4">
      <h4 className="fw-bold mb-3 footer-heading">Subscribe</h4>
      <p className="text-muted small mb-3">
        Subscribe to our newsletter to receive our latest updates, articles, and product releases.
      </p>

      {submitted ? (
        <div className="alert alert-success py-2 px-3 rounded-pill small" role="alert">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your E-Mail..."
            className="form-control rounded-pill px-3 shadow-none border"
          />
          <button type="submit" className="btn btn-primary rounded-pill px-4 text-nowrap">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const CopyRights = () => {
  return (
    <div className="end-footer py-3">
      <div className="container d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 text-center">
        <span className="small text-white-50">Copyright &copy; {new Date().getFullYear()}</span>
        <img src={LogoLight} alt="Wazwork logo" className="footer-logo mx-2" />
        <span className="small text-white-50">All Rights Reserved</span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-wrapper bg-color pt-5">
      <div className="container mb-5">
        <div className="row g-4 justify-content-between">
          <Company />
          <ContactUs />
          <Subscribe />
        </div>
      </div>
      <CopyRights />
    </footer>
  );
};

export default Footer;
