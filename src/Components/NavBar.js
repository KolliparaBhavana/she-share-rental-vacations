import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaChessQueen } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

return (
  <>
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FaChessQueen  className="navbar-icon" />
            She Share Rental Vacations
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
      
    </IconContext.Provider>
  </>
);
}