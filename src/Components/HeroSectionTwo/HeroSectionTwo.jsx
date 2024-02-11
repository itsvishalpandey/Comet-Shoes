import React from "react";
import HeroSectionComponent from "../HeroSectionOne/HeroSectionComponent";
import HeroSectionTwoImage from "./HeroSectionTwoImage";

function HeroSectionTwo() {
  const introCometX = {
    imageLarge: "src/assets/hero_comet_x.webp",
    imageSmall: "src/assets/hero_comet_x_mobile.webp",
    header: "INTRODUCING COMET X",
    text: "LIMITLESS PASSION",
    buttons: [
      {
        name: "SHOP MEN",
        navigate: "/comet-men",
      },
      {
        name: "SHOP WOMEN",
        navigate: "/comet-women",
      },
    ],
  };

  return (
    <>
      <div className="w-full ">
        <div className="sticky top-0 -z-10 heroSection_two">
          <HeroSectionComponent heroComponent={introCometX} />
        </div>
        <div className="heroSection_three">
          <HeroSectionTwoImage />
        </div>
      </div>
    </>
  );
}

export default HeroSectionTwo;
