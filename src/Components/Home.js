import {React ,useState} from 'react'
import { FaHouse,FaHouseChimneyUser} from "react-icons/fa6";
import { motion } from "framer-motion";
import cit1 from './Assets/cit1.jpeg'
import cit2 from './Assets/cit2.jpeg'
import cit3 from './Assets/cit3.jpeg'
import cit4 from './Assets/cit4.jpeg'
import cit5 from './Assets/cit5.jpeg'
import { FaChessQueen } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdPlace } from "react-icons/md";

import { useNavigate } from "react-router-dom";
export const Home = () => {
  const [click, setClick] = useState(false);
 
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  
    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
  
    const handleBack = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 4) % 5
        );
  
        return updatedIndexes;
      });
    };
    const navigate=useNavigate()
    const submitLogout=(e)=>{
      navigate("/login");
      e.preventDefault();
      
      
    }
    const images = [cit1, cit2, cit3, cit4, cit5];
  
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "75%", scale: 1, zIndex: 5 },
      left1: { x: "25%", scale: 0.6, zIndex: 3 },
      left: { x: "-15%", scale: 0.5, zIndex: 2 },
      right: { x: "165%", scale: 0.5, zIndex: 2 },
      right1: { x: "125%", scale: 0.6, zIndex: 3 },
    };
  return (
    <div>
    {/* <div className="overlay">
    <video src={video} autoPlay loop muted />
    </div> */}
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
                onClick={e => submitLogout(e)}
              >
                Logout
              </NavLink>
            </li>
           
          </ul>
        </div>
        
      </nav>
      
    </IconContext.Provider>
        <div>
        <br></br><br></br>
        &nbsp;&nbsp;<button className="sh"><FaHouse /><br></br>
        Share Your Room</button>&nbsp;&nbsp;
        <button className="ren"><FaHouseChimneyUser /><br></br>
        Rent a Room</button>
        <div className="links">
        <ul> 
        <li><a href="/Home">Welcome</a><br></br><br></br></li>
        <li><a href="/Home">Safety</a><br></br><br></br></li>
        <li><a href="/Home">Adventure</a><br></br><br></br></li>
        <li><a href="/Home">Community</a><br></br><br></br></li>
        </ul>
        </div>
    </div>
    <div>
        <button className="cl"><SlCalender /><br></br>
        Calender</button>&nbsp;&nbsp;
        <button className="sd"><MdPlace /><br></br>
        Search Destinations</button>&nbsp;&nbsp;
        <button className="cp"><CgProfile /><br></br>
        <a href="/profile">Create your Profile</a></button>
    </div>
    <br></br><br></br><br></br><br></br>
    
    <div className="flex items-center flex-col justify-center bg-black h-screen">
    
      {images.map((image, index ) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="btn">
        <button
          className="bk"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="nxt"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    <br></br><br></br><br></br>
    <div className="head">
      <h1>SHE SHARE</h1>
      <a href="/">About Us</a>
      <p> <a href="/">Careers</a></p>
      <p><a href=" ">Contact Us</a></p>
    </div>
    <div className="head2">
      <h1>Support</h1>
      <p><a href="/">FAQ's</a></p>
      <p><a href="/">Cancellation Policy</a></p>
    </div>
    <div className="head3">
      <h1>Become a Host</h1>
      <p><a href="/">Hosting Resources</a></p>
      <p><a href="/">Hosting Responsibility</a></p>
      <p><a href="/">Share a room</a></p>
      <p><a href="/">Pets</a></p>
    </div>
    <div className="head4">
      <h1>Terms & Privacy</h1>
      <p><a href="/">About Us</a></p>
      <p><a href="/">Careers</a></p>
      <p><a href="/">Contact Us</a></p>
    </div>
  </div>
  
  )
}

