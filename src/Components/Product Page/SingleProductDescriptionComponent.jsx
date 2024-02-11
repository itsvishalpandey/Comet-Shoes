import React from "react";

function SingleProductDescriptionComponent({ comfort }) {
  return (
    <>
      <div
        className={`${
          comfort.status
            ? "md:flex-row max-md:flex-col"
            : "md:flex-row-reverse max-md:flex-col"
        } flex gap-8 py-16 bg-white sticky top-0 -z-10`}
      >
        <div className="w-full md:w-3/5">
          <div className="w-full md:h-[600px] image_container">
            <img
              src={comfort.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <div
            className={`${
              comfort.status
                ? "lg:items-start lg:text-left lg:pr-12"
                : "lg:items-end lg:text-right lg:pl-12"
            } flex flex-col gap-4 text-lg font-medium
              image_desc_container`}
          >
            <h6>{comfort.quality}</h6>
            <h3 className="text-3xl">{comfort.application}</h3>
            <p className="font-normal">{comfort.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductDescriptionComponent;

{
  /* <div className="flex gap-8 sticky top-8 bg-green-200">
  <div className="w-3/5">
    <div className="w-full h-[450px] image_container">
      <img src={comfort.image} className="w-full h-full object-cover" alt="" />
    </div>
  </div>

  <div className="w-2/5 h-full">
    <div className="flex flex-col gap-5 text-lg font-medium image_desc_container">
      <h6>{comfort.quality}</h6>
      <h3 className="text-3xl">{comfort.application}</h3>
      <p className="font-normal">{comfort.description}</p>
    </div>
  </div>
</div> */
}
