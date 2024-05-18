import {React, useState} from 'react'
import './Profile.css'
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaChessQueen } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
export const Profile = () => {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
  return (
    <div>
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
                to="/Home"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
           
          </ul>
        </div>
        
      </nav>
      
    </IconContext.Provider>
    <div className="wrapper">
    <div className="form-box-login">
      <form action="/Home">
        <h1>Profile</h1>
        <div className="input">
        <input type="text" placeholder="Name" required/>
        </div>
        <div className="input">
          <input type="number" placeholder="Age" required/>
        </div>
        <p>Interests:</p>
        <div className="input-chk">
          <input type="checkbox" id="Sports"/><label>Sports</label>
        </div>
        <div className="input-chk">
          <input type="checkbox" id="Coding"/><label>Coding</label>
        </div>
        <div className="input-chk">
          <input type="checkbox" id="Reading"/><label>Reading</label>
        </div>
        <div className="input-str">
          <input type="text" placeholder="Your Hobbies" />
        </div>
        <div className="input-str">
          <input type="text" placeholder="Share your Story" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
        </div>
    </div>
  )
}
