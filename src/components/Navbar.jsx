function Navbar() {

  return (

    <nav className="navbar">


      <button
        className="mobile-menu"
        type="button"
        aria-label="Open menu"
      >
        ☰
      </button>



      <div className="logo">

        <img
          src="/assets/logo-text.png"
          alt="DevStack"
        />

      </div>



      <div className="nav-links">

        <a
          href="#"
          className="active"
        >
          Home
        </a>


        <a href="#">
          Features
        </a>


        <a href="#">
          Technologies
        </a>


      </div>



      <div className="nav-buttons">

        <button
          className="signin"
          type="button"
        >
          Sign In
        </button>


        <button
          className="signup"
          type="button"
        >
          Sign Up
        </button>


      </div>


    </nav>

  );

}


export default Navbar;