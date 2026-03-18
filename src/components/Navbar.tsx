import { useState, useEffect } from "react";


const Navbar: React.FC = () => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    useEffect(() => {
        if (hamburgerIsOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [hamburgerIsOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <h2 className="navbar-title">ghilou.dev</h2>

                <button
                    className={`hamburger ${hamburgerIsOpen ? "open" : ""}`}
                    onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
                    aria-expanded={hamburgerIsOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="navbar-links">
                    <a href="#projects">Projects</a>
                    <a href="#experiences">Experience</a>
                    <a href="#contact">Contact</a>

                </div>
            </div>

            <div className={`mobile-menu ${hamburgerIsOpen ? "open" : ""}`}>
                <a href="#projects" onClick={() => setHamburgerIsOpen(false)}>Projects</a>
                <a href="#experiences" onClick={() => setHamburgerIsOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setHamburgerIsOpen(false)}>Contact</a>
            </div>
        </nav>
    )
};

export default Navbar;