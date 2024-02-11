import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageAeonMen() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_men_large.webp",
    imageSmall: "src/assets/hero_images_men_mobile.webp",
  };

  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageAeonMen;
