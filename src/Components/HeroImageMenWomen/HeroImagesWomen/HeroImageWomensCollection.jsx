import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageWomensCollection() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_women_collection_large.webp",
    imageSmall: "src/assets/hero_images_women_collection_small.webp",
  };
  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageWomensCollection;
