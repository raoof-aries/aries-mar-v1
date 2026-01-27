import React from "react";
import "./AboutSection.css";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const about = useSelector((state) => state.cms.home.about);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">{about.label}</span>
          <h2 className="about-title">{about.title}</h2>
        </div>

        <div className="about-content">
          <p className="about-description">
            {about.description}
          </p>
        </div>

        <div className="certifications">
          <div className="cert-header">
            <h3 className="cert-title">{about.certifications.title}</h3>
            <p className="cert-subtitle">{about.certifications.subtitle}</p>
          </div>
          <div className="cert-badges">
            {about.certifications.items.map((cert, index) => (
              <div key={index} className="cert-badge">
                <div className="cert-badge-content">
                  <div className="cert-badge-number">ISO</div>
                  <div className="cert-badge-details">
                    <span className="cert-badge-code">{cert.code}</span>
                    <span className="cert-badge-year">:{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
