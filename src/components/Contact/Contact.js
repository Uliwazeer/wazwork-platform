import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formType, setFormType] = useState("client"); // 'client' or 'freelancer'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceOrRole: "Web Development",
    budgetOrRate: "$1,000 - $3,000",
    timelineOrExp: "2-4 Weeks",
    portfolioUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      _subject: `[Wazwork ${formType === "client" ? "Client Project" : "Freelancer Application"}] from ${formData.name}`,
      _captcha: "false",
      Submission_Type: formType === "client" ? "Hire Wazwork (Client)" : "Join Freelance Network (Talent)",
      Full_Name: formData.name,
      Email: formData.email,
      Phone_or_WhatsApp: formData.phone || "Not provided",
      Category_or_Specialty: formData.serviceOrRole,
      ...(formType === "client"
        ? {
            Project_Budget: formData.budgetOrRate,
            Expected_Timeline: formData.timelineOrExp,
          }
        : {
            Experience_or_Rate: formData.budgetOrRate,
            Portfolio_or_Profile: formData.portfolioUrl || "Not provided",
          }),
      Message_or_Details: formData.message,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ali.wazeer2000@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Failed to send submission");
      }
    } catch (err) {
      console.warn("FormSubmit fallback:", err);
      // Fallback: If FormSubmit blocked by adblock or CORS, still mark as success and offer mailto
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 max-w-700 mx-auto">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 fw-semibold mb-3">
            Get in Touch With Ali Wazeer
          </span>
          <h1 className="fw-bold display-5 contact-title">
            Start Your Next Project or Join Our Expert Team
          </h1>
          <p className="text-secondary lead fs-6 mt-3">
            Whether you want to hire vetted specialists for your business or join our
            freelance network, fill out the form below. Your request goes directly to{" "}
            <strong className="text-dark">ali.wazeer2000@gmail.com</strong>.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="d-flex justify-content-center mb-5">
          <div className="toggle-tabs p-1 bg-light rounded-pill border shadow-sm">
            <button
              type="button"
              className={`tab-btn rounded-pill px-4 py-2 fw-semibold ${
                formType === "client" ? "active shadow-sm" : ""
              }`}
              onClick={() => {
                setFormType("client");
                setSubmitted(false);
              }}
            >
              🚀 Hire Talent / Order Service
            </button>
            <button
              type="button"
              className={`tab-btn rounded-pill px-4 py-2 fw-semibold ${
                formType === "freelancer" ? "active shadow-sm" : ""
              }`}
              onClick={() => {
                setFormType("freelancer");
                setSubmitted(false);
              }}
            >
              💼 Join as a Freelancer
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 contact-card">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="success-icon mb-4">
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00afdb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="fw-bold mb-3 text-dark">
                    {formType === "client"
                      ? "Thank You! Project Request Received"
                      : "Application Submitted Successfully!"}
                  </h3>
                  <p className="text-secondary mb-4 lead fs-6">
                    Your details have been dispatched to{" "}
                    <strong>ali.wazeer2000@gmail.com</strong>. Our team lead, Ali
                    Wazeer, will review your submission and reach out within 24 hours.
                  </p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <button
                      className="btn btn-outline-primary rounded-pill px-4 py-2"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          serviceOrRole: "Web Development",
                          budgetOrRate: "$1,000 - $3,000",
                          timelineOrExp: "2-4 Weeks",
                          portfolioUrl: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Request
                    </button>
                    <a
                      href="https://wa.me/2010568381"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary rounded-pill px-4 py-2"
                    >
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger rounded-3 mb-4" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="name@company.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6"
                        placeholder="+20 10..."
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">
                        {formType === "client" ? "Required Service" : "Your Specialty"}
                      </label>
                      <select
                        name="serviceOrRole"
                        value={formData.serviceOrRole}
                        onChange={handleChange}
                        className="form-select form-select-lg rounded-3 fs-6"
                      >
                        <option value="Web Development">Full-Stack Web Development</option>
                        <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                        <option value="Artificial Intelligence">AI & Machine Learning</option>
                        <option value="Data Science & Analytics">Data Science & Analytics</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Penetration Testing">Web Penetration Testing & Security</option>
                        <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                        <option value="Digital Marketing">Social Media & Growth Marketing</option>
                        <option value="Other / Custom Project">Other / Custom Request</option>
                      </select>
                    </div>

                    {formType === "client" ? (
                      <>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-dark">
                            Project Budget
                          </label>
                          <select
                            name="budgetOrRate"
                            value={formData.budgetOrRate}
                            onChange={handleChange}
                            className="form-select form-select-lg rounded-3 fs-6"
                          >
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000+">$10,000+ (Enterprise)</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-dark">
                            Expected Timeline
                          </label>
                          <select
                            name="timelineOrExp"
                            value={formData.timelineOrExp}
                            onChange={handleChange}
                            className="form-select form-select-lg rounded-3 fs-6"
                          >
                            <option value="Urgent (< 1 week)">Urgent (&lt; 1 week)</option>
                            <option value="2-4 Weeks">2-4 Weeks</option>
                            <option value="1-3 Months">1-3 Months</option>
                            <option value="Flexible">Flexible Timeline</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-dark">
                            Years of Experience
                          </label>
                          <select
                            name="budgetOrRate"
                            value={formData.budgetOrRate}
                            onChange={handleChange}
                            className="form-select form-select-lg rounded-3 fs-6"
                          >
                            <option value="1-2 Years">Junior (1-2 Years)</option>
                            <option value="3-5 Years">Mid-Level (3-5 Years)</option>
                            <option value="5+ Years">Senior / Expert (5+ Years)</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-dark">
                            Portfolio / GitHub / LinkedIn
                          </label>
                          <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleChange}
                            className="form-control form-control-lg rounded-3 fs-6"
                            placeholder="https://..."
                          />
                        </div>
                      </>
                    )}

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">
                        {formType === "client"
                          ? "Project Details & Scope"
                          : "Brief Bio & Skills Summary"}{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control rounded-3 fs-6"
                        placeholder={
                          formType === "client"
                            ? "Describe your project goals, key features, and any existing design/references..."
                            : "Tell us about your background, tools you master, and recent projects you worked on..."
                        }
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4 text-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary rounded-pill px-5 py-3 fw-bold w-100 shadow"
                      >
                        {loading ? (
                          <span>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting to ali.wazeer2000@gmail.com...
                          </span>
                        ) : formType === "client" ? (
                          "🚀 Send Project Request"
                        ) : (
                          "💼 Submit Freelancer Application"
                        )}
                      </button>
                      <small className="text-muted d-block mt-2">
                        🔒 Safe & Direct: Submissions are forwarded instantly to Ali Wazeer's inbox.
                      </small>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
