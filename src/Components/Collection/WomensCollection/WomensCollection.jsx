// MensCollection.jsx
import React, { useState } from "react";
import SingleProductCard from "../../CometCarousel/SingleProductCard";
import { TotalShoes } from "../../TotalShoesProducts/TotalShoesDetails";
import FilterSidebar from "../MensCollection/FilterSidebar";

function WomensCollection() {
  const TotalShoesProducts = TotalShoes;

  const uniqueCategories = [
    "view all",
    ...new Set(TotalShoesProducts.map((images) => images.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("view all");
  const [selectedFilters, setSelectedFilters] = useState({
    size: [],
    category: [],
    availability: [],
  });

  const showProducts =
    selectedCategory === "view all"
      ? TotalShoesProducts
      : TotalShoesProducts.filter(
          (images) => images.category === selectedCategory
        );

  const filteredProducts = showProducts.filter((product) => {
    return (
      (!selectedFilters.size.length ||
        selectedFilters.size.includes(product.size)) &&
      (!selectedFilters.category.length ||
        selectedFilters.category.includes(product.category)) &&
      (!selectedFilters.availability.length ||
        selectedFilters.availability.includes(product.availability))
    );
  });

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
  };

  const handleRemoveFilters = (filterType, value) => {
    const updatedFilters = { ...selectedFilters };

    const index = updatedFilters[filterType].indexOf(value);

    if (index != -1) {
      updatedFilters[filterType].splice(index, 1);
    }

    setSelectedFilters(updatedFilters);
  };

  return (
    <>
      <div className="w-full h-full py-8">
        <div className="text-3xl font-bold pb-8 px-4 uppercase lg:px-12">
          <h1>women / sneakers</h1>
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
            <FilterSidebar applyFilters={applyFilters} />
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold uppercase px-4 md:text-md lg:px-12">
            {Object.entries(selectedFilters).map(
              ([filterType, filterValues]) =>
                filterValues.length > 0 &&
                filterValues.map((value) => (
                  <div
                    onClick={() => handleRemoveFilters(filterType, value)}
                    className="flex items-center gap-3 bg-yellow-300 border hover:border-black px-3 py-1.5 rounded-full cursor-pointer"
                  >
                    <div key={value} className="">
                      {filterType}: {value}
                    </div>
                    <div>
                      <i className="fa-solid fa-x fa-xs font-bold"></i>
                    </div>
                  </div>
                ))
            )}
          </div>

          <div className="h-full w-full flex flex-wrap">
            {filteredProducts.map((images, index) => (
              <SingleProductCard key={index} images={images} id={images.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WomensCollection;
