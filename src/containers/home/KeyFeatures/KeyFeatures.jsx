import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  const features = [
    {
      number: "01",
      title: "Inspection & Risk Management",
      description:
        "The risks associated with offshore, oil & gas and marine sectors are usually high, difficult and complicated.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    },
    {
      number: "02",
      title: "Remedial Engineering Management",
      description:
        "Aries values in the efficiency of design and are committed to providing effective solutions for complex engineering challenges.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
    },
    {
      number: "03",
      title: "Digital Solutions & Cyber Management",
      description:
        "Utilization of the latest technology in our services has been utmost priority to ensure operational excellence and security.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Warranty & Audit Advisory Solutions",
      description:
        "Aries advisory and warranty services are designed to cover the comprehensive needs of marine and offshore operations.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    },
    {
      number: "05",
      title: "Integrity Management",
      description:
        "Efficient management of Assets is becoming a critical factor directly impacting operational performance and safety.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      number: "06",
      title: "Products & Technology Management",
      description:
        "Aries provides management of the changes, impacts or upgrades on products and technology throughout the asset lifecycle.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="key-features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive marine solutions designed to meet the evolving
            challenges of modern maritime operations
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-inner">
                <div className="feature-image-wrapper">
                  <div className="feature-number-badge">{feature.number}</div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <button className="feature-link">
                    <span>Explore Service</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10H16M16 10L11 5M16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;