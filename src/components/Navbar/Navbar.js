import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./imgs/Logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-2 py-md-3 navbar-container navbar navbar-expand-lg sticky-top">
      <div className="container-fluid px-3 px-md-4">
        <Link
          to="/"
          onClick={closeNav}
          className="Logo-container d-flex align-items-center text-decoration-none"
        >
          <img src={Logo} alt="Wazwork Logo" className="navbar-logo" />
        </Link>

        <button
          className={`navbar-toggler border-0 shadow-none ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNav}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center mt-3 mt-lg-0">
            <li className="mx-lg-2 nav-item">
              <Link
                to="/"
                onClick={closeNav}
                className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="mx-lg-2 nav-item">
              <Link
                to="/services"
                onClick={closeNav}
                className={`nav-link-custom ${location.pathname === "/services" ? "active" : ""}`}
              >
                Services
              </Link>
            </li>
            <li className="mx-lg-2 nav-item">
              <Link
                to="/team"
                onClick={closeNav}
                className={`nav-link-custom ${location.pathname === "/team" ? "active" : ""}`}
              >
                Our Team
              </Link>
            </li>
            <li className="mx-lg-2 nav-item">
              <Link
                to="/products"
                onClick={closeNav}
                className={`nav-link-custom ${location.pathname === "/products" ? "active" : ""}`}
              >
                Products
              </Link>
            </li>
            <li className="mx-lg-2 nav-item mt-2 mt-lg-0">
              <button
                onClick={() => {
                  closeNav();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary rounded-pill px-4 py-2 nav-contact-btn"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
