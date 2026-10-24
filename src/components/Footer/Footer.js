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
      <h4 className="fw-bold mb-3 footer-heading">Platform</h4>
      <ul className="list-unstyled p-0 m-0">
        <li className="my-2">
          <Link to="/" className="text-decoration-none text-muted footer-link">
            Home
          </Link>
        </li>
        <li className="my-2">
          <Link to="/services" className="text-decoration-none text-muted footer-link">
            Services & Solutions
          </Link>
        </li>
        <li className="my-2">
          <Link to="/team" className="text-decoration-none text-muted footer-link">
            Vetted Talent Roster
          </Link>
        </li>
        <li className="my-2">
          <Link to="/products" className="text-decoration-none text-muted footer-link">
            Products & Builds
          </Link>
        </li>
        <li className="my-2">
          <Link to="/contact" className="text-decoration-none text-primary fw-bold footer-link">
            🚀 Hire Us / Start Project
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="col-12 col-md-4" id="contact">
      <h4 className="fw-bold mb-3 footer-heading">Direct Contact</h4>
      <div className="my-2 d-flex align-items-center">
        <span className="me-2 fs-5">📧</span>
        <a
          href="mailto:ali.wazeer2000@gmail.com"
          className="text-decoration-none text-dark fw-bold footer-phone"
        >
          ali.wazeer2000@gmail.com
        </a>
      </div>
      <div className="my-2 d-flex align-items-center">
        <img src={PhoneIcon} alt="phone" width="20" height="20" className="me-2" />
        <a
          href="tel:+2010568381"
          className="text-decoration-none text-dark fw-bold footer-phone"
        >
          +20 10 568 381
        </a>
      </div>
      <div className="mt-3">
        <Link
          to="/contact"
          className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold"
        >
          Open Request Form &rarr;
        </Link>
      </div>
      <div className="d-flex align-items-center social-links mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Facebook"
        >
          <img src={FaceBookIcon} alt="Facebook" width="32" height="32" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="me-3 social-icon"
          aria-label="Twitter"
        >
          <img src={TwitterIcon} alt="Twitter" width="32" height="32" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <img src={LinkedInIcon} alt="LinkedIn" width="32" height="32" />
        </a>
      </div>
    </div>
  );
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/ali.wazeer2000@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Wazwork Newsletter] New Subscriber: ${email}`,
          Subscriber_Email: email,
        }),
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      setSubmitted(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-12 col-md-4">
      <h4 className="fw-bold mb-3 footer-heading">Newsletter</h4>
      <p className="text-muted small mb-3">
        Stay ahead with our latest tech case studies, AI benchmarks, and freelance opportunities.
      </p>

      {submitted ? (
        <div className="alert alert-success py-2 px-3 rounded-pill small" role="alert">
          Thank you! You are now subscribed.
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
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary rounded-pill px-4 text-nowrap"
          >
            {loading ? "..." : "Subscribe"}
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
        <span className="small text-white-50">Copyright &copy; {new Date().getFullYear()} Wazwork Platform</span>
        <img src={LogoLight} alt="Wazwork logo" className="footer-logo mx-2" />
        <span className="small text-white-50">Direct: ali.wazeer2000@gmail.com</span>
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
