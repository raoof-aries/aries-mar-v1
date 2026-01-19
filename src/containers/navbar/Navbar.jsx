import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-wrapper">
        <div className="navbar-logo-text">Aries Mar</div>
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Who We Are
        </a>
        <a href="#" className="navbar-link">
          Training
        </a>
        <a href="#" className="navbar-link">
          Services
        </a>
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
