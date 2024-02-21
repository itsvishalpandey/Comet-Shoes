import React from "react";
import GlobalButton from "../../GlobalButton/GlobalButton";

function FilterSidebarContent({ filter, eachFilterContent, handleEachFilter }) {
  return (
    <>
      <div
        className={` ${
          eachFilterContent === filter.type
            ? "translate-x-0"
            : "translate-x-[150%]"
        }
        } w-full h-full flex flex-col gap-4 bg-white black absolute top-0 right-0 transition duration-300 delay-400 ease-in z-50`}
      >
        <div
          onClick={handleEachFilter}
          className="flex gap-3 items-center cursor-pointer"
        >
          <i class="fa-solid fa-arrow-left-long"></i>
          <h1 className="text-md font-bold">{filter.type}</h1>
        </div>

        <div className="h-full flex flex-col gap-4 text-gray-700 uppercase relative">
          <ul className="h-full flex flex-col gap-3">
            {filter.options.map((option) => (
              <li key={option}>
                <label htmlFor="" className="flex gap-3 text-md">
                  <input type="checkbox" className="w-4" />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>

          <div className="w-full flex gap-2 justify-center items-center uppercase">
            <button className="px-8 py-2.5 text-[12px] font-medium md:text-lg lg:px-4 lg:py-3 whitespace-nowrap underline underline-red-200 uppercase">
              clear all
            </button>
            <GlobalButton globalButtonContent="apply" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebarContent;
