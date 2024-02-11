import React, { useRef } from "react";
import TestimonialCarouselComponent from "./TestimonialCarouselComponent";

function TestimonialCarousel() {
  return (
    <>
      <div className="w-full h-full select-none relative lg:px-16 testimonial_carousel bg-[url(src/assets/testimonial_bg.png)] bg-center bg-cover">
        <TestimonialCarouselComponent />
      </div>
    </>
  );
}

export default TestimonialCarousel;
