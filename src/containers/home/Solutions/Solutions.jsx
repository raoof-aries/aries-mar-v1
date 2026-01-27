import React from "react";
import "./Solutions.css";
import { useSelector } from "react-redux";

const Solutions = () => {
  const solutions = useSelector((state) => state.cms.home.solutions);

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-layout">
          <div className="solutions-header">
            <span className="section-label">{solutions.label}</span>
            <h2 className="section-title-solution">{solutions.title}</h2>
            <p className="section-subtitle-solution">
              {solutions.subtitle}
            </p>
          </div>

          <div className="solutions-cards">
            {solutions.items.map((solution, index) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-card-inner">
                  <div className="solution-image-wrapper">
                    <span className="solution-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="solution-img"
                    />
                    <div className="solution-overlay"></div>
                  </div>
                  <div className="solution-content">
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">{solution.description}</p>
                    <a href={solution.link} className="solution-link">
                      <span>Read more</span>
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
      </div>
    </section>
  );
};

export default Solutions;
