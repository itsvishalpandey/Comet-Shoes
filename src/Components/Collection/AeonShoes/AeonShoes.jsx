import React from "react";
import SingleProductCard from "../../CometCarousel/SingleProductCard";
import { TotalShoes } from "../../TotalShoesProducts/TotalShoesDetails";

function AeonShoes() {
  const TotalShoesProducts = TotalShoes;

  return (
    <>
      <div className="w-full h-full py-8">
        <div className="text-3xl font-bold pb-8 px-4 uppercase lg:px-12">
          <h1>AEON</h1>
        </div>

        <div className="h-full w-full flex flex-wrap">
          {TotalShoesProducts.map((images, index) => (
            <SingleProductCard images={images} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AeonShoes;
