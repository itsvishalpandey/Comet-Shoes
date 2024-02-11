import React from "react";
import GlobalButton from "../GlobalButton/GlobalButton";

function HeroSectionComponent({ heroComponent }) {
  return (
    <>
      <div className="w-full h-[115vh] relative overflow-hidden">
        <div className="w-full h-full hero_one_image">
          <img
            src={heroComponent.imageLarge}
            className="w-full h-full object-cover max-md:hidden"
            alt=""
          />
          <img
            src={heroComponent.imageSmall}
            className="w-full h-full object-cover md:hidden"
            alt=""
          />
        </div>
        <div className="w-full h-2/6 flex items-center justify-center absolute top-0 left-0 right-0 md:w-full md:h-full md:justify-start">
          <div className="flex flex-col items-center text-center gap-2 md:gap-4 md:px-12 lg:px-24 whitespace-nowrap">
            <h3 className="text-sm font-semibold md:text-xl md:font-medium lg:text-2xl hero_heading">
              {heroComponent.header}
            </h3>

            <h1 className="text-2xl font-bold md:text-4xl md:font-semibold lg:text-5xl hero_text">
              {heroComponent.text}
            </h1>

            <div className="flex items-center gap-4 pt-4 lg:gap-12 lg:pt-6 hero_btns">
              {heroComponent.buttons.map((button, index) => (
                <GlobalButton
                  key={index}
                  globalButtonContent={button.name}
                  navigate={button.navigate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionComponent;
