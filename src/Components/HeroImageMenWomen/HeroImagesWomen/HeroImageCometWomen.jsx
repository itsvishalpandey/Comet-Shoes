import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageCometWomen() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_comet_women_large.webp",
    imageSmall: "src/assets/hero_images_comet_women_small.webp",
  };

  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageCometWomen;
