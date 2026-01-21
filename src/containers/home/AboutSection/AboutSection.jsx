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

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">27+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="stat-number">132K+</div>
            <div className="stat-label">Projects Completed</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">11.4K+</div>
            <div className="stat-label">Global Clients</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-number">30+</div>
            <div className="stat-label">Countries Worldwide</div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="cert-title">Our Certifications</h3>
          <div className="cert-badges">
            <div className="cert-badge">ISO 9001:2015</div>
            <div className="cert-badge">ISO 14001:2015</div>
            <div className="cert-badge">ISO 29001:2020</div>
            <div className="cert-badge">ISO 45001:2018</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
