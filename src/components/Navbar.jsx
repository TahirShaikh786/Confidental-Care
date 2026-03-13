import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-logo" onClick={() => scrollTo("home")}>
          Confi<span>dental</span> Care
        </div>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link); }}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="navbar-cta" onClick={() => scrollTo("appointment")}>
          + Book Appointment
        </button>

        <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={`navbar-mobile${menuOpen ? " open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link); }}
          >
            {link}
          </a>
        ))}
        <button className="navbar-cta" onClick={() => scrollTo("appointment")}>
          + Book Appointment
        </button>
      </div>
    </>
  );
}
