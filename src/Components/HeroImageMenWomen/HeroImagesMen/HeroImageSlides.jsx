import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageSlides() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_men_slides_large.webp",
    imageSmall: "src/assets/hero_images_men_slides_small.webp",
  };
  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageSlides;
