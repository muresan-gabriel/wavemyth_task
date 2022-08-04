const Navbar = () => {
  return (
    <nav className="navbar d-flex align-items-center">
      <div className="navbar-contents col-md-8 d-flex">
        <div className="logo">
          <img src="./img/logo.svg" alt="brand" />
        </div>
        <div className="nav-links d-flex align-items-center">
          <a className="nav-link d-flex align-items-center" href="#">
            <img src="./img/i-house.svg" className="nav-icon" />
            Home
          </a>
          <a className="nav-link d-flex align-items-center" href="#">
            <img src="./img/i-planet.svg" className="nav-icon" />
            Destinations
          </a>
          <a className="nav-link d-flex align-items-center" href="#">
            <img src="./img/i-rocket-horizontal.svg" className="nav-icon" />
            Spaceships
          </a>
        </div>
        <div className="user-links d-flex flex-column justify-content-center align-items-end">
          <a className="nav-link d-flex align-items-center" href="#">
            <img src="./img/i-cart.svg" className="nav-icon" />0
          </a>
        </div>
        <div className="dropdown-menu d-flex flex-column justify-content-center align-items-end">
          <button className="ham-menu">
            <img src="./img/i-ham-menu.svg" className="ham-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
