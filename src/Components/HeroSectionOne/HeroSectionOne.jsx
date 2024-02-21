import React from "react";
import HeroSectionComponent from "./HeroSectionComponent";

function HeroSectionOne() {
  const introAeon = {
    imageLarge: "src/assets/homepage_banner_large.jpg",
    imageSmall: "src/assets/homepage_banner_small.webp",
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
