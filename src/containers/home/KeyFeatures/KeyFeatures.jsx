import React from "react";
import "./KeyFeatures.css";
import { useSelector } from "react-redux";

const KeyFeatures = () => {
  const keyFeatures = useSelector((state) => state.cms.home.keyFeatures);

  return (
    <section className="key-features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{keyFeatures.label}</span>
          <h2 className="section-title">{keyFeatures.title}</h2>
          <p className="section-subtitle">
            {keyFeatures.subtitle}
          </p>
        </div>

        <div className="features-grid">
          {keyFeatures.features.map((feature, index) => (
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
                  <a href={feature.link} className="feature-link">
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
                  </a>
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