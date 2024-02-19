import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar" className="nav-links">
      <h2>  <NavLink to="/players">Home</NavLink> </h2>
    </div>
  );
}
