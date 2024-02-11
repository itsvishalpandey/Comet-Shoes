import React from "react";
import WomensCollection from "./WomensCollection";
import HeroImageWomensCollection from "../../HeroImageMenWomen/HeroImagesWomen/HeroImageWomensCollection";
import TestimonialCarousel from "../../TestimonialCarousel/TestimonialCarousel";

function ForWomens() {
  return (
    <>
      <HeroImageWomensCollection />
      <WomensCollection />
      <TestimonialCarousel />
    </>
  );
}

export default ForWomens;
