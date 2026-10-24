import React, { useState } from "react";
import "./Products.css";
import ProductImg from "./imgs/products.svg";

const Head = () => {
  return (
    <div className="row products-head px-3 mx-0 py-5">
      <div className="col-md-6 px-4">
        <h2 className="fw-bold mb-3">Products & Solutions</h2>
        <p className="lead fs-6 text-muted">
          Explore our range of innovative digital products and technical solutions.
          Designed by the Wazwork team to empower clients, accelerate workflows,
          and deliver high-impact results.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img
          src={ProductImg}
          alt="products"
          className="img-fluid"
          style={{ maxHeight: "320px" }}
        />
      </div>
    </div>
  );
};

const NavProduct = ({ content, active, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn ${
        active ? "btn-primary shadow-sm" : "btn-outline-primary"
      } rounded-pill m-2 px-4`}
    >
      {content}
    </button>
  );
};

const productItems = [
  {
    id: 1,
    title: "WazUI Design System",
    category: "UI/UX",
    desc: "A comprehensive UI component kit and design guideline for rapid product prototyping and seamless UX.",
    tag: "Design System",
  },
  {
    id: 2,
    title: "Enterprise Web Portal",
    category: "Web development",
    desc: "High-performance full-stack web application with secure auth, real-time dashboard, and modern APIs.",
    tag: "Full-Stack",
  },
  {
    id: 3,
    title: "BI Analytics Engine",
    category: "Data Analysis",
    desc: "Interactive business intelligence tool that translates complex data metrics into actionable insights.",
    tag: "Analytics",
  },
  {
    id: 4,
    title: "Growth Marketing Suite",
    category: "Social Media Marketing",
    desc: "Automated campaign management, engagement tracking, and audience segmentation for multi-channel growth.",
    tag: "Marketing",
  },
  {
    id: 5,
    title: "Cognitive AI Assistant",
    category: "Artificial intelligence",
    desc: "Custom intelligent chatbot and natural language processing agent tailored for customer support automations.",
    tag: "AI & ML",
  },
  {
    id: 6,
    title: "Predictive Churn Model",
    category: "Data Science",
    desc: "Machine learning pipeline predicting user behavior and lifetime value with high accuracy.",
    tag: "Data Science",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "UI/UX",
    "Web development",
    "Data Analysis",
    "Social Media Marketing",
    "Artificial intelligence",
    "Data Science",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? productItems
      : productItems.filter((item) => item.category === activeCategory);

  return (
    <div className="products-page">
      <Head />
      <div className="nav-products-container py-4 text-center container">
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map((category) => (
            <NavProduct
              key={category}
              content={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        <div className="row g-4 mt-2 text-start justify-content-center">
          {filteredProducts.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 product-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-light text-primary rounded-pill px-3 py-2 border">
                    {item.tag}
                  </span>
                  <small className="text-muted fw-semibold">{item.category}</small>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-secondary small mb-3">{item.desc}</p>
                <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                  <span className="text-primary fw-semibold small">Explore solution</span>
                  <span className="text-primary">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
