import React from "react";
import "./Solutions.css";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Offshore Naval Architecture Engineering",
      description:
        "Aries Marine provides reliable services ranging from technical consultancy to project management and boasts an extensive list of successful offshore projects.",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Inspection & Maintenance",
      description:
        "Inspection & Maintenance department is the leading & comprehensive service provider with advanced & compatible techniques to meet the industry standards.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-layout">
          <div className="solutions-header">
            <span className="section-label">OUR SOLUTIONS</span>
            <h2 className="section-title-solution">Key Solutions</h2>
            <p className="section-subtitle-solution">
              Specialized maritime solutions designed to address complex challenges and deliver exceptional results
            </p>
          </div>

          <div className="solutions-cards">
            {solutions.map((solution, index) => (
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
                    <a href="#" className="solution-link">
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
