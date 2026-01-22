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
        {solutions.map((solution, index) => (
          <div
            key={solution.id}
            className={`solution-item ${index % 2 === 0 ? "" : "solution-item-reverse"}`}
          >
            <div className="solution-text">
              <span className="solution-number">
                SOLUTION {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="solution-title">{solution.title}</h2>
              <p className="solution-description">{solution.description}</p>
              <a href="#" className="solution-link">
                Read more
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="solution-image-wrapper">
              <div className="solution-image-card">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-img"
                />
                <div className="solution-overlay"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
