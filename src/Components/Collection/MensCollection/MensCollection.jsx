// MensCollection.jsx
import React, { useState } from "react";
import SingleProductCard from "../../CometCarousel/SingleProductCard";
import { TotalShoes } from "../../TotalShoesProducts/TotalShoesDetails";
import FilterSidebar from "./FilterSidebar";

function MensCollection() {
  const TotalShoesProducts = TotalShoes;

  const uniqueCategories = [
    "view all",
    ...new Set(TotalShoesProducts.map((images) => images.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("view all");

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
          <h1>men / sneakers</h1>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between items-start gap-4 px-4 md:flex-row lg:px-12">
            <div className="flex gap-8 items-center">
              {uniqueCategories.map((category) => (
                <div
                  key={category}
                  className={`${
                    selectedCategory === category
                      ? "text-black"
                      : "text-gray-500"
                  } cursor-pointer font-medium uppercase`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
            <FilterSidebar />
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium uppercase px-4 md:flex-row md:text-md lg:px-12">
            <div className="flex flex-wrap gap-4 whitespace-nowrap">
              <span className="border border-black px-4 py-1 rounded-full">
                size: size
              </span>
            </div>
          </div>

          <div className="h-full w-full flex flex-wrap">
            {showProducts.map((images, index) => (
              <SingleProductCard key={index} images={images} id={images.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MensCollection;
