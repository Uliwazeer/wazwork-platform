import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "./imgs/Phone.svg";
import FaceBookIcon from "./imgs/Facebook.svg";
import TwitterIcon from "./imgs/Twitter.svg";
import LinkedInIcon from "./imgs/LinkedIn.svg";
import Logo from "./imgs/Logo.svg";
import "./Footer.css";

const Company = () => {
  return (
    <div className="col-md-4">
      <h3 className="my-4 fw-bold">Company</h3>
      <ul className="px-3 list-unstyled">
        <li className="lh-lg my-2">
          <Link to="/" className="text-decoration-none text-dark footer-link">
            Home
          </Link>
        </li>
        <li className="lh-lg my-2">
          <Link to="/services" className="text-decoration-none text-dark footer-link">
            Services
          </Link>
        </li>
        <li className="lh-lg my-2">
          <Link to="/team" className="text-decoration-none text-dark footer-link">
            Our Team
          </Link>
        </li>
        <li className="lh-lg my-2">
          <Link to="/products" className="text-decoration-none text-dark footer-link">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="col-md-4" id="contact">
      <h3 className="my-4 fw-bold">Contact Us</h3>
      <h6 className="my-4 d-flex align-items-center">
        <img src={PhoneIcon} alt="phone-icon" />
        <a
          href="tel:+2010568381"
          className="mx-2 text-decoration-none text-dark fw-semibold"
        >
          +20 10 568 381
        </a>
      </h6>
      <div className="d-flex align-items-center social-links mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Facebook"
        >
          <img src={FaceBookIcon} alt="Facebook" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Twitter"
        >
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
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
    <div className="col-md-4">
      <h3 className="my-4 fw-bold">Subscribe</h3>
      <p className="my-3 text-muted">
        Subscribe to our Newsletter and be aware of our latest products & news!
      </p>

      {submitted ? (
        <div className="alert alert-success py-2 px-3 rounded-pill small" role="alert">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="d-flex justify-content-between align-items-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your E-Mail..."
            className="form-control rounded-pill me-2"
          />
          <button type="submit" className="btn btn-primary rounded-pill px-3">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const CopyRights = () => {
  return (
    <div className="bg-gradint text-center py-3 end-footer">
      <h6 className="lh-lg m-0 small">
        Copyright &copy; {new Date().getFullYear()} Wazwork{" "}
        <img src={Logo} alt="logo" className="footer-logo mx-1" />
        All Rights Reserved
      </h6>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-color pt-5">
      <div className="container mb-5">
        <div className="row mx-0 g-4">
          <Company />
          <ContactUs />
          <Subscribe />
        </div>
      </div>
      <CopyRights />
    </div>
  );
};

export default Footer;
