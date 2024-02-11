import React from "react";
import HeroSectionOne from "../../Components/HeroSectionOne/HeroSectionOne";
import CometCarousel from "../../Components/CometCarousel/CometCarousel";
import HeroSectionTwo from "../../Components/HeroSectionTwo/HeroSectionTwo";
import StorySection from "../../Components/StorySection/StorySection";
import HeroImageGift from "../../Components/HeroImageGift/HeroImageGift";
import TestimonialCarousel from "../../Components/TestimonialCarousel/TestimonialCarousel";

function Home() {
  return (
    <>
      <HeroSectionOne />
      <CometCarousel />
      <HeroSectionTwo />
      <StorySection />
      <HeroImageGift />
      <TestimonialCarousel />
    </>
  );
}

export default Home;
