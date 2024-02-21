import React, { useRef, useState } from "react";
import GlobalButton from "../GlobalButton/GlobalButton";
import SingleProductCard from "./SingleProductCard";

function CometCarouselComponent({ TotalShoesProducts }) {
  const carouselRef = useRef(null);

  const handleCarouselLeft = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 385;
    }
  };
  const handleCarouselRight = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 385;
    }
  };

  const carouselButtons = [
    {
      name: "SHOP MEN",
      navigate: "/men-collection",
    },
    {
      name: "SHOP WOMEN",
      navigate: "/women-collection",
    },
  ];

  return (
    <>
      <div
        ref={carouselRef}
        className="flex h-full w-full max-lg:flex-wrap lg:overflow-x-auto scroll-smooth comet_carousel_container"
      >
        {TotalShoesProducts.slice(0, 5).map((images) => (
          <SingleProductCard images={images} id={images.id} />
        ))}

        <div className="w-full flex gap-4 px-20 py-10 items-center justify-center lg:w-[380px] lg:flex-col lg:gap-12">
          {carouselButtons.map((button, index) => (
            <GlobalButton
              key={index}
              globalButtonContent={button.name}
              navigate={button.navigate}
            />
          ))}
        </div>
      </div>
      <div className="comet_carousel_btns max-lg:hidden">
        <button
          onClick={(e) => handleCarouselLeft(e)}
          className="bg-[#d9d8d8] px-3 py-2 rounded-full absolute top-[50%] left-4"
        >
          <i class="fa-solid fa-angle-left fa-xl"></i>
        </button>
        <button
          onClick={(e) => handleCarouselRight(e)}
          className="bg-[#d9d8d8] px-3 py-2 rounded-full absolute top-[50%] right-4"
        >
          <i class="fa-solid fa-angle-right fa-xl"></i>
        </button>
      </div>
    </>
  );
}

export default CometCarouselComponent;
