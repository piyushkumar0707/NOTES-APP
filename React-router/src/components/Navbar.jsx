import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My App</h2>

      <div className="links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/notes">
          Notes
        </NavLink>

        <NavLink to="/weather">
          Weather
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
