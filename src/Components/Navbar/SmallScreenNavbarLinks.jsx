import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SmallScreenNavbarLinks({ menuOpen }) {
  const smallNavLink = [
    {
      id: 1,
      name: "MEN",
      image: "src/assets/navigation-men.webp",
    },
    {
      id: 2,
      name: "WOMEN",
      image: "src/assets/navigation-woman.webp",
    },
  ];

  const [smNavLink, setSmNavLink] = useState(smallNavLink[0].id);

  const handleSmNavLink = (id) => {
    setSmNavLink((prev) => (prev.id === id ? null : id));
  };

  return (
    <>
      <div
        className={`header_links ${
          menuOpen ? "translate-x-0" : "translate-x-[-150%]"
        } max-h-screen overflow-y-auto flex flex-col absolute top-16 right-0 left-0 pb-16 transition duration-300 delay-400 ease-in bg-blue-800 text-white lg:hidden small_screen_navbar`}
      >
        <div className="h-full flex flex-col gap-8 items-start p-8 text-2xl border-b border-gray-300">
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <div className="flex gap-12">
              {smallNavLink.map((link) => (
                <NavLink
                  key={link.id}
                  onClick={() => handleSmNavLink(link.id)}
                  className={`${
                    smNavLink === link.id ? "text-yellow-400" : ""
                  }`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div>
              {smallNavLink.map((link, index) => (
                <>
                  {smNavLink === link.id && (
                    <img key={index} src={link.image} alt={link.name} />
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Link className="smNavbarLinksHover">SNEAKERS</Link>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/comet-men"
                className="flex gap-4 items-center smNavbarLinksHover"
              >
                <img
                  src="src/assets/navbar-shoes-icon.webp"
                  className="h-2.5"
                  alt="shoes_img"
                />
                COMET X
              </Link>
              <Link
                to="/aeon-men"
                className="flex gap-4 items-center smNavbarLinksHover"
              >
                <img
                  src="src/assets/navbar-shoes-icon.webp"
                  className="h-2.5"
                  alt="shoes_img"
                />
                AEON
              </Link>
            </div>
            <Link to="/slides" className="smNavbarLinksHover">
              SLIDES
            </Link>
            <Link to="/drops" className="smNavbarLinksHover">
              DROPS
            </Link>
            <Link className="smNavbarLinksHover">GIFT CARD</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 text-sm border-b border-gray-300">
          <Link to="/our-story" className="smNavbarLinksHover">
            Our Story
          </Link>
          <Link className="smNavbarLinksHover">Become A Menber</Link>
          <Link className="smNavbarLinksHover">FAQ</Link>
          <Link className="smNavbarLinksHover">Returns And Exchanges</Link>
          <Link className="smNavbarLinksHover">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-8 p-8 text-xl">
          <Link className="flex gap-4 items-center smNavbarLinksHover">
            <i class="fa-regular fa-user"></i>
            LOG IN
          </Link>
          <Link className="flex gap-4 items-center smNavbarLinksHover">
            <i class="fa-brands fa-instagram"></i>
            INSTAGRAM
          </Link>
        </div>
      </div>
    </>
  );
}

export default SmallScreenNavbarLinks;
