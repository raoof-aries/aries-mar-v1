import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">WHO WE ARE</span>
          <h2 className="about-title">Aries Marine & Engg. Services Pvt Ltd</h2>
        </div>

        <div className="about-content">
          <p className="about-description">
            Aries is the largest Engineering, Inspection & Maintenance firm in
            the Middle East. Founded by Dr. Sohan Roy in 1998, Aries Marine is
            the flagship brand of Aries Group, a world-class consortium of
            diversified independent firms. Headquartered in Sharjah, UAE, this
            ISO 9001:2015, ISO 14001:2015, ISO 29001:2020 & ISO 45001:2018
            certified company has business branches in UAE, Angola, Azerbaijan,
            Bahrain, Brunei, China, Germany, Guyana, India, Indonesia, Kuwait,
            Madagascar, Malaysia, Nepal, Oman, Qatar, Saudi Arabia, Singapore,
            South Africa, Turkey, UK, USA, Sri Lanka, Greece, Netherlands,
            Japan, Nigeria, Vietnam, Morocco.
          </p>
        </div>

        <div className="certifications">
          <div className="cert-header">
            <h3 className="cert-title">Our Certifications</h3>
            <p className="cert-subtitle">Internationally recognized quality standards</p>
          </div>
          <div className="cert-badges">
            <div className="cert-badge">
              <div className="cert-badge-content">
                <div className="cert-badge-number">ISO</div>
                <div className="cert-badge-details">
                  <span className="cert-badge-code">9001</span>
                  <span className="cert-badge-year">:2015</span>
                </div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-badge-content">
                <div className="cert-badge-number">ISO</div>
                <div className="cert-badge-details">
                  <span className="cert-badge-code">14001</span>
                  <span className="cert-badge-year">:2015</span>
                </div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-badge-content">
                <div className="cert-badge-number">ISO</div>
                <div className="cert-badge-details">
                  <span className="cert-badge-code">29001</span>
                  <span className="cert-badge-year">:2020</span>
                </div>
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-badge-content">
                <div className="cert-badge-number">ISO</div>
                <div className="cert-badge-details">
                  <span className="cert-badge-code">45001</span>
                  <span className="cert-badge-year">:2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
