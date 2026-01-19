import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo-wrapper">
        <Link to="/" className="navbar-logo-text">Aries Mar</Link>
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Who We Are
        </a>
        <a href="#" className="navbar-link">
          Training
        </a>
        <Link to="/service/maritime-consulting" className="navbar-link">
          Services
        </Link>
        <a href="#" className="navbar-link">
          Careers
        </a>
        <a href="#" className="navbar-link">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
