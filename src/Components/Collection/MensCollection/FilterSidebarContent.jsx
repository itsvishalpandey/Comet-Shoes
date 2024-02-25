// FilterSidebarContent.jsx
import React from "react";
import GlobalButton from "../../GlobalButton/GlobalButton";

function FilterSidebarContent({
  filter,
  handleEachFilterContent,
  handleEachFilter,

  handleApplyFilters,
  storeFilters,
  setStoreFilters,
}) {
  const handleApply = () => {
    handleEachFilter(null);
    handleApplyFilters();
  };

  const handleClear = () => {
    setStoreFilters((prev) => ({
      ...prev,
      [filter.type]: [],
    }));
  };

  const handleSelect = (option) => {
    setStoreFilters((prev) => {
      const updatedFilter = { ...prev, [filter.type]: [...prev[filter.type]] };

      const index = updatedFilter[filter.type].indexOf(option);
      if (index !== -1) {
        updatedFilter[filter.type].splice(index, 1);
      } else {
        updatedFilter[filter.type].push(option);
      }

      return updatedFilter;
    });
  };

  return (
    <>
      <div
        className={`${
          handleEachFilterContent === filter.type
            ? "translate-x-0"
            : "translate-x-[150%]"
        } w-full h-full flex flex-col gap-4 bg-white black absolute top-0 right-0 transition duration-300 delay-400 ease-in z-50`}
      >
        <div
          onClick={() => handleEachFilter(null)}
          className="flex gap-3 items-center cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
          <h1 className="text-md font-bold">{filter.type}</h1>
        </div>

        <div className="h-full flex flex-col gap-4 text-gray-700 uppercase relative">
          <ul className="h-full flex flex-col gap-3">
            {filter.options.map((option) => (
              <li key={option}>
                <label
                  htmlFor=""
                  className="flex gap-3 text-md"
                  onClick={() => handleSelect(option)}
                >
                  <input
                    type="checkbox"
                    onChange={() => {}}
                    checked={storeFilters[filter.type]?.includes(option)}
                    className="w-4"
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>

          <div className="w-full flex gap-2 justify-center items-center uppercase">
            <button
              className="px-8 py-2.5 text-[12px] font-medium md:text-lg lg:px-4 lg:py-3 whitespace-nowrap underline underline-red-200 uppercase"
              onClick={handleClear}
            >
              clear all
            </button>

            <div onClick={handleApply}>
              <GlobalButton globalButtonContent="apply" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebarContent;
