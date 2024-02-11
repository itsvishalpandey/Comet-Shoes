import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlobalButton from "../../GlobalButton/GlobalButton";

function NavbarDropdown({ navLinkClicked, sneakerInput, slideInput }) {
  const [blurImage, setBlurImage] = useState(null);
  return (
    <>
      <div
        className={`${
          navLinkClicked ? "absolute top-16 left-0 right-0" : "hidden"
        } bg-white border-t border-gray-200 py-8 px-12 flex gap-8`}
      >
        <div className="w-4/5 flex gap-8">
          <div className="flex flex-col gap-12 font-medium">
            <h1 className="text-lg">Sneakers</h1>
            <div className="flex gap-8 font-sm">
              {sneakerInput.map((shoes) => (
                <div key={shoes.id} className="flex flex-col gap-6 navbar_card">
                  <div className="flex gap-4">
                    <img src={shoes.smImage} alt={shoes.name} className="h-5" />
                    <span>{shoes.name}</span>
                  </div>
                  <div
                    className="relative navbar_cardImg"
                    onMouseEnter={() => setBlurImage(shoes.id)}
                    onMouseLeave={() => setBlurImage(null)}
                  >
                    <img
                      src={shoes.image}
                      alt={shoes.name}
                      className={`w-[400px] h-auto ${
                        blurImage === shoes.id ? "blur-sm" : ""
                      }`}
                    />
                    <div className="h-full absolute top-0 left-0 right-0 items-center justify-center hidden navbar_cardBtn">
                      <GlobalButton
                        globalButtonContent={`SHOP ${shoes.name}`}
                        navigate={shoes.navigate}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-12 font-medium">
            <h1 className="text-lg">Slides</h1>
            <div className="flex gap-8 font-sm">
              {slideInput.map((shoes) => (
                <div key={shoes.id} className="flex flex-col gap-6 navbar_card">
                  <div className="flex gap-4">
                    <img src={shoes.smImage} alt={shoes.name} className="h-5" />
                    <span>{shoes.name}</span>
                  </div>
                  <div
                    className="relative navbar_cardImg"
                    onMouseEnter={() => setBlurImage(shoes.id)}
                    onMouseLeave={() => setBlurImage(null)}
                  >
                    <img
                      src={shoes.image}
                      alt={shoes.name}
                      className={`w-[400px] h-auto ${
                        blurImage === shoes.id ? "blur-sm" : ""
                      }`}
                    />
                    <div className="h-full absolute top-0 left-0 right-0 items-center justify-center hidden navbar_cardBtn">
                      <GlobalButton
                        globalButtonContent={`SHOP ${shoes.name}`}
                        navigate={shoes.navigate}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="f-full w-[1px] bg-black"></div>
        <div className="w-1/5">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <Link className="smNavbarLinksHover" to="/collection">
              Shop All
            </Link>
            <Link className="smNavbarLinksHover" to="/drops">
              Drops
            </Link>
            <Link className="smNavbarLinksHover">Gift Card</Link>
            <Link className="smNavbarLinksHover">Accessories</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDropdown;
