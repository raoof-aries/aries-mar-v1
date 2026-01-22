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
      link: "#",
    },
    {
      id: 2,
      title: "Inspection & Maintenance",
      description:
        "Inspection & Maintenance department is the leading & comprehensive service provider with advanced & compatible techniques to meet the industry standards.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      link: "#",
    },
  ];

  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="solutions-title">Our Solutions</h2>
          <p className="solutions-subtitle">
            Delivering world-class maritime solutions with precision and
            excellence
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-image-container">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <a href={solution.link} className="solution-link">
                  Read more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
