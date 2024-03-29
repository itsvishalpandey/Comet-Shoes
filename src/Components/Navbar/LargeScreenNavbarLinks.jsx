import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDropdownMen from "./NavbarDropdown/NavbarDropdownMen";
import NavbarDropdownWomen from "./NavbarDropdown/NavbarDropdownWomen";

function LargeScreenNavbarLinks() {
  const [navLinkClicked, setNavLinkClicked] = useState({
    men: false,
    women: false,
  });

  const handleNavLink = (name) => {
    setNavLinkClicked((prev) => ({
      ...Object.fromEntries(Object.entries(prev).map(([key]) => [key, false])),
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className="header_links flex gap-16 whitespace-nowrap max-lg:hidden">
        <div
          className="flex gap-2 items-center justify-center cursor-pointer nav_link"
          onClick={() => handleNavLink("men")}
        >
          <div>
            <span>Men</span>
            <div className="navLink_active"></div>
          </div>

          {navLinkClicked.men ? (
            <i class="fa-solid fa-angle-up mt-1"></i>
          ) : (
            <i class="fa-solid fa-angle-down mt-1"></i>
          )}

          {/* Dropdown */}
        </div>
        <NavbarDropdownMen navLinkClicked={navLinkClicked.men} />
        <div
          className="flex gap-2 items-center justify-center cursor-pointer nav_link"
          onClick={() => handleNavLink("women")}
        >
          <div>
            <span>Women</span>
            <div className="navLink_active"></div>
          </div>
          {navLinkClicked.women ? (
            <i class="fa-solid fa-angle-up mt-1"></i>
          ) : (
            <i class="fa-solid fa-angle-down mt-1"></i>
          )}

          {/* Dropdown */}
          <NavbarDropdownWomen navLinkClicked={navLinkClicked.women} />
        </div>
        <Link to="/drops" className="nav_link">
          <span>Drops</span>
          <div className="navLink_active"></div>
        </Link>
        <Link to="/our-story" className="nav_link">
          <span>Our Story</span>
          <div className="navLink_active"></div>
        </Link>
      </div>
    </>
  );
}

export default LargeScreenNavbarLinks;
