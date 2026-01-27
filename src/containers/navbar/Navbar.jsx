import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ServicesMenu from "./ServicesMenu";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const navbar = useSelector((state) => state.cms.global.navbar);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesMenuOpen(true);
  };

  const handleCloseServicesMenu = () => {
    setIsServicesMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo-wrapper">
          <Link to="/" className="navbar-logo-text">{navbar.logo}</Link>
        </div>
        <div className="navbar-links">
          {navbar.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="navbar-link"
              onClick={link.hasMenu ? handleServicesClick : undefined}
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
      <ServicesMenu isOpen={isServicesMenuOpen} onClose={handleCloseServicesMenu} />
    </>
  );
};

export default Navbar;
