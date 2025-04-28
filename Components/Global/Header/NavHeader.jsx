import React from "react";

//INTERNAL IMPORT ICON
import { Nav1, Nav2 } from "../../SVG/index";

const NavHeader = () => {
  return (
    <div className="nav-header">
      <a href="/" className="brand-logo">
        <Nav1 />
        <Nav2 />
      </a>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
