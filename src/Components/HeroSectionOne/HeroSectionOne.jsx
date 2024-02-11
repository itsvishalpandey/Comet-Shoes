import React from "react";
import HeroSectionComponent from "./HeroSectionComponent";
import { useSelector } from "react-redux";

function HeroSectionOne() {
  const introAeon = {
    imageLarge: "src/assets/hero_aeon.webp",
    imageSmall: "src/assets/hero_aeon_mobile.webp",
    header: "INTRODUCING AEON",
    text: "ALL DAY, EVERYDAY",
    buttons: [
      {
        name: "SHOP MEN",
        navigate: "/aeon-men",
      },
      {
        name: "SHOP WOMEN",
        navigate: "/aeon-women",
      },
    ],
  };

  return (
    <>
      <HeroSectionComponent heroComponent={introAeon} />
    </>
  );
}

export default HeroSectionOne;
