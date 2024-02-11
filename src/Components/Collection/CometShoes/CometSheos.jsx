import React, { useState } from "react";
import SingleProductCard from "../../CometCarousel/SingleProductCard";
import { TotalShoes } from "../../TotalShoesProducts/TotalShoesDetails";

function CometSheos() {
  const TotalShoesProducts = TotalShoes;

  const uniqueCatogeries = [
    "view all",
    ...new Set(TotalShoesProducts.map((images) => images.category)),
  ];

  const [selectedCategory, setSelecedCategory] = useState("view all");

  const showProducts =
    selectedCategory === "view all"
      ? TotalShoesProducts
      : TotalShoesProducts.filter(
          (images) => images.category === selectedCategory
        );

  return (
    <>
      <div className="w-full h-full py-8">
        <div className="text-3xl font-bold pb-8 px-4 uppercase lg:px-12">
          <h1>COMET X</h1>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-8 items-center px-4 lg:px-12">
            {uniqueCatogeries.map((category) => (
              <div
                className={`${
                  selectedCategory === category ? "text-black" : "text-gray-500"
                } cursor-pointer font-medium uppercase`}
                onClick={() => setSelecedCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="h-full w-full flex flex-co flex-wrap">
            {showProducts.map((images, index) => (
              <SingleProductCard images={images} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CometSheos;
