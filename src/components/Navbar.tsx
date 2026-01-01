import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar: React.FC = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    return (    
        <nav className="navbar">
            <div className="navbar-inner">
                <h2 className="navbar-title">Ghiles Bouaraba</h2>

                <button className={`hamburger ${hamburgerIsOpen ? "open" : ""}`} onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="navbar-links">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className={`mobile-menu ${hamburgerIsOpen ? "open" : ""}`}>
                <Link to="/about" onClick={() => setHamburgerIsOpen(false)}>About</Link>
                <Link to="/projects" onClick={() => setHamburgerIsOpen(false)}>Projects</Link>
                <Link to="/contact" onClick={() => setHamburgerIsOpen(false)}>Contact</Link>
            </div>        
        </nav>
    )
};

export default Navbar;