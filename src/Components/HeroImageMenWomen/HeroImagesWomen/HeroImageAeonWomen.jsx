import React from "react";
import HeroImageComponentMW from "../HeroImageComponentMW";

function HeroImageAeonWomen() {
  const heroImage = {
    imageLarge: "src/assets/hero_images_aeon_women_large.webp",
    imageSmall: "src/assets/hero_images_aeon_women_mobile.webp",
  };

  return (
    <>
      <HeroImageComponentMW heroImageComponentMW={heroImage} />
    </>
  );
}

export default HeroImageAeonWomen;
