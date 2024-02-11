import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageMensCollection() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_men_collection_large.webp",
    imageSmall: "src/assets/hero_images_men_collection_small.webp",
  };
  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageMensCollection;
