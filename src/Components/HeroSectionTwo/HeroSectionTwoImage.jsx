import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeroSectionTwoImage() {
  const navigate = useNavigate();

  const handleHeroTwoImage = () => {
    navigate("/slides");
  };

  return (
    <>
      <div className="w-full h-[115vh]">
        <div
          onClick={handleHeroTwoImage}
          className="h-full w-full cursor-pointer"
        >
          <img
            src="src/assets/hero_slides.webp"
            className="w-full h-full max-md:hidden"
            alt=""
          />
          <img
            src="src/assets/hero_slides_mobile.webp"
            className="w-full h-full md:hidden"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default HeroSectionTwoImage;
