import React, { useState } from "react";
import FilterSize from "./FilterSidebarContent";
import GlobalButton from "../../GlobalButton/GlobalButton";
import { TotalShoes } from "../../TotalShoesProducts/TotalShoesDetails";

function FilterSidebar({ applyFilters }) {
  const totalProductCount = TotalShoes;

  const filterOptions = [
    {
      id: 1,
      type: "size (uk)",
      options: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      type: "category",
      options: ["aeon", "comet x", "slides", "drops"],
    },
    {
      id: 3,
      type: "availability",
      options: ["in stock", "out of stock"],
    },
  ];

  const [isMainOpen, setIsMainOpen] = useState(false);
  const handleFilterIcon = () => {
    setIsMainOpen(!isMainOpen);
  };

  const [eachFilterContent, setEachFilterContent] = useState(null);
  const handleEachFilter = (name) => {
    setEachFilterContent((prev) => (prev === name ? null : name));
  };

  const [storeFilters, setStoreFilters] = useState({});

  const handleApplyFilters = () => {
    console.log("Selected Filters:", storeFilters);
    setIsMainOpen(!isMainOpen);
    setEachFilterContent(!eachFilterContent);
    applyFilters(storeFilters);
  };

  const handleMainCancel = (e) => {
    e.stopPropagation();
    setIsMainOpen(!isMainOpen);
    setEachFilterContent(!eachFilterContent);
  };

  return (
    <>
      <section className="">
        <div
          onClick={handleFilterIcon}
          className="flex items-center gap-3 text-gray-500 smNavbarLinksHover"
        >
          <i className="fa-solid fa-sliders fa-lg"></i>
          <button className="text-lg">Filter</button>
        </div>
        <div
          className={`${
            isMainOpen ? "translate-x-[0%] " : "translate-x-[100%]"
          } h-screen flex flex-col gap-4 p-8 bg-white black fixed top-0 right-0 w-[75%] sm:w-[50%] md:w-[40%] lg:w-[25%] transition duration-300 delay-400 ease-in z-50`}
        >
          <div className="flex justify-between items-center">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">FILTER</h1>
              <p className="text-sm pt-1 text-gray-500">
                {totalProductCount.length} Products
              </p>
            </div>
            <div className="text-end cursor-pointer">
              <i
                className="fa-solid fa-x fa-lg"
                onClick={(e) => handleMainCancel(e)}
              ></i>
            </div>
          </div>
          <div className="h-[2px] bg-gray-200"></div>

          <div className="h-full flex flex-col gap-4 text-gray-700 uppercase relative">
            <div className="h-full flex flex-col gap-3 flex-between">
              {filterOptions.map((filter) => (
                <React.Fragment key={filter.id}>
                  <div
                    onClick={() => handleEachFilter(filter.type)}
                    className="w-full flex items-center justify-between smNavbarLinksHover cursor-pointer"
                  >
                    <h1 className="">{filter.type}</h1>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                  <FilterSize
                    filter={filter}
                    eachFilterContent={eachFilterContent}
                    handleEachFilter={handleEachFilter}
                    handleApplyFilters={handleApplyFilters}
                    setStoreFilters={setStoreFilters}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="w-full flex gap-2 justify-center items-center uppercase">
              <button
                className="px-8 py-2.5 text-[12px] font-medium md:text-lg lg:px-4 lg:py-3 whitespace-nowrap underline underline-red-200 uppercase"
                onClick={() => setStoreFilters({})}
              >
                remove all
              </button>
              <div onClick={handleApplyFilters}>
                <GlobalButton globalButtonContent="apply" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterSidebar;
