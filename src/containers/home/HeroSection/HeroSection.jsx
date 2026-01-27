import "./HeroSection.css";
import HeroImage from "../../../assets/images/home/hero.webp";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const hero = useSelector((state) => state.cms.home.hero);

  return (
    <div className="hero-container">
      {/* Background Image */}
      <div className="hero-background">
        <img src={HeroImage} alt="ARIES MARINE" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Main Content Area */}
        <div className="hero-main-content">
          <h1 className="hero-heading">
            {hero.heading.line1}
            <br />
            {hero.heading.line2}
          </h1>

          <p className="hero-description">
            {hero.description}
          </p>

          <div className="hero-buttons">
            <a href={hero.buttons.primary.link} className="hero-btn hero-btn-primary">
              {hero.buttons.primary.text} <span className="btn-arrow">→</span>
            </a>
            <a href={hero.buttons.secondary.link} className="hero-btn hero-btn-secondary">
              {hero.buttons.secondary.text}
            </a>
          </div>
        </div>

        {/* Bottom Section with Description and Stats */}
        <div className="hero-bottom">
          <div className="hero-bottom-description">
            <p>
              {hero.bottomDescription}
            </p>
          </div>

          <div className="hero-stats-grid">
            {hero.stats.map((stat, index) => (
              <div key={index} className="hero-stat-card">
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
