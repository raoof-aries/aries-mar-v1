import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import servicesMenuData from "../../data/servicesMenu.json";
import "./ServicesMenu.css";

const ServicesMenu = ({ isOpen, onClose }) => {
  const [selectedVision, setSelectedVision] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && servicesMenuData.visions[selectedVision]) {
      setSelectedCategory(0);
    }
  }, [selectedVision, isOpen]);

  if (!isOpen) return null;

  const currentVision = servicesMenuData.visions[selectedVision];
  const currentCategory = currentVision?.categories[selectedCategory];

  const handleVisionClick = (index) => {
    setSelectedVision(index);
    setSelectedCategory(0);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`services-menu-overlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="services-menu-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="services-menu-close" onClick={onClose} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="services-menu-wrapper">
          {/* Header Section */}
          <div className="services-menu-header">
            <div className="services-menu-title">
              <span className="title-label">Services</span>
            </div>
            <div className="services-menu-visions">
              {servicesMenuData.visions.map((vision, index) => (
                <button
                  key={vision.id}
                  className={`services-menu-vision-btn ${
                    selectedVision === index ? "active" : ""
                  }`}
                  onClick={() => handleVisionClick(index)}
                >
                  <span className="vision-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="vision-title">{vision.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="services-menu-content">
            {/* Left Side - Categories */}
            {currentVision.categories.length > 1 && (
              <div className="services-menu-categories">
                {currentVision.categories.map((category, index) => (
                  <button
                    key={category.id}
                    className={`services-menu-category-item ${
                      selectedCategory === index ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <span className="category-indicator"></span>
                    <span className="category-name">{category.name}</span>
                    {selectedCategory === index && (
                      <svg
                        className="category-arrow"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Right Side - Services */}
            {currentCategory && (
              <div className="services-menu-services">
                <div className="services-menu-services-list">
                  {currentCategory.services.map((service, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="services-menu-service-link"
                      onClick={onClose}
                    >
                      <span className="service-link-text">{service}</span>
                      <svg
                        className="service-link-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
