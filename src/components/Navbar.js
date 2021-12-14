import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  const links = [
    { id: 1, text: "Home", href: "#" },
    { id: 2, text: "About", href: "#" },
    { id: 3, text: "Spotlight", href: "#" },
    { id: 4, text: "Recommendations", href: "#" },
    { id: 5, text: "Contact", href: "#" },
  ];
  return (
    <div className="navbarWrapper">
      <img className="logo" src="/assets/logo-white.svg" alt="logo" />
      <div className="links">
        {links.map((link) => (
          <a className="navLink" href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
