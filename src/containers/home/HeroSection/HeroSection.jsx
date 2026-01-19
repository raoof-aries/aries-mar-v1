import "./HeroSection.css";
import HeroImage from "../../../assets/images/home/hero.webp";

const HeroSection = () => {
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
            Excellence in Maritime
            <br />
            Solutions & Services
          </h1>

          <p className="hero-description">
            We deliver world-class marine solutions with an understanding of
            industry needs, a focus on safety and efficiency, and a commitment
            to operational excellence.
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">
              Get in Touch <span className="btn-arrow">→</span>
            </button>
            <button className="hero-btn hero-btn-secondary">Learn more</button>
          </div>
        </div>

        {/* Bottom Section with Description and Stats */}
        <div className="hero-bottom">
          <div className="hero-bottom-description">
            <p>
              Providing comprehensive marine services that respond to real
              operational needs and challenging environments, with a focus on
              reliability, expertise, and sustained value.
            </p>
          </div>

          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="hero-stat-number">27+</div>
              <div className="hero-stat-label">Years of Excellence</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">132K+</div>
              <div className="hero-stat-label">Projects Completed</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">11.4K+</div>
              <div className="hero-stat-label">Global Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
