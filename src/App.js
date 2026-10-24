import React, { useEffect } from "react";
import "./App.css";
import Products from "./components/Products/Products.js";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="*"
          element={
            <div className="text-center py-5 my-5">
              <h2 className="display-4 fw-bold text-primary">404</h2>
              <p className="lead text-muted">Page not found</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
