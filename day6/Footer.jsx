import React from "react";
import '../src/asserts/css/Footer.css';
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <footer className="footer">
                <div className="quick-links">
                    <ul>
                        <Link to ='/Privacy'>Privacy Policy</Link>
                    </ul>                    
                </div>
                <div className="skkk">
                    <ul>
                        <Link to ='/terms'>Terms and Conditions</Link>
                  </ul>
                  <div className="quick">
                    <ul>
                        <Link to ='/aboutus'>AboutUs</Link>
                    </ul>                    
                </div>                
                 <div className="links">
                    <ul>
                        <Link to ='/faq'>Faq</Link>
                    </ul>                    
                </div>
                
                </div>
                <div className="copyright">
                    <p>Copyright © 2023 Resume Builder</p>
                </div>
            </footer>
    );
}
export default Footer;

