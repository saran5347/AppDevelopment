import React, { useState } from "react"
import { Link , NavLink} from "react-router-dom"
import "../../src/asserts/css/Home.css"
import Footer from '../Footer';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Home = () => {
    const [Mobile, setMobile] = useState(false)
  return (
      <>
      <>
      <nav className='navbar'>
        <h3 className='logo1'>Resume Builder</h3>
      
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
  <NavLink exact to="/home" className="home" activeClassName="active">
    <li>Home</li>
  </NavLink>
  <NavLink to="/services" className="services" activeClassName="active">
    <li>Services</li>
  </NavLink>
  <NavLink to="/skills" className="skills" activeClassName="active">
    <li>Skills</li>
  </NavLink>
  <NavLink to="/about" className="about" activeClassName="active">
    <li>About</li>
  </NavLink>
  <NavLink to="/contact" className="contact" activeClassName="active">
    <li>Contact</li>
  </NavLink>
</ul>

        
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
        
    </>
    <br></br>

      <div className='saran'>
      <Footer/>
      </div>
      </>
  )
    
}
export default Home;