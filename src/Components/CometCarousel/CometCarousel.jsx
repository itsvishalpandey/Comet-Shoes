import React from "react";
import CometCarouselComponent from "./CometCarouselComponent";
import { TotalShoes } from "../TotalShoesProducts/TotalShoesDetails";

function CometCarousel() {
  const TotalShoesProducts = TotalShoes;

  return (
    <>
      <div className="w-full h-full lg:h-[75vh] select-none relative comet_carousel">
        <CometCarouselComponent cometCarouselImages={TotalShoesProducts} />
      </div>
    </>
  );
}

export default CometCarousel;
