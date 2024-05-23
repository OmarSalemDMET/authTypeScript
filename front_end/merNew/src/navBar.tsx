import { Link } from "react-router-dom";
import "./pages/regInfo.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
         <li className="navbar-item">
            <Link to="/EMPLIN">Add Information</Link>
          </li>
          <li className="navbar-item">
            <Link to="/DATAIN">Query</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Signup">SignUP</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
