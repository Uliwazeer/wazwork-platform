import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./imgs/Logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="py-4 navbar-container navbar navbar-expand-lg sticky-top">
      <div className="container-fluid px-4">
        <Link to="/" className="Logo-container d-flex align-items-center ms-2 text-decoration-none">
          <img src={Logo} alt="Wazwork Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="mx-3 nav-item">
              <Link
                to="/"
                className={`nav-link-custom ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="mx-3 nav-item">
              <Link
                to="/services"
                className={`nav-link-custom ${location.pathname === "/services" ? "active" : ""}`}
              >
                Services
              </Link>
            </li>
            <li className="mx-3 nav-item">
              <Link
                to="/team"
                className={`nav-link-custom ${location.pathname === "/team" ? "active" : ""}`}
              >
                Our Team
              </Link>
            </li>
            <li className="mx-3 nav-item">
              <Link
                to="/products"
                className={`nav-link-custom ${location.pathname === "/products" ? "active" : ""}`}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
