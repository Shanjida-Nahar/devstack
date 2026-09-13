const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-logo">DS</div>
        <span>Dev Stack</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;