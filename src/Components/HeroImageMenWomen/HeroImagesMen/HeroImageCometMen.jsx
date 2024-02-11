import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageCometMen() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_men_comet_large.webp",
    imageSmall: "src/assets/hero_images_men_comet_small.webp",
  };

  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageCometMen;
