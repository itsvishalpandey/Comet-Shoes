import React from "react";

function HeroImageComponentMW({ heroImageComponentMW }) {
  return (
    <>
      <div className="w-full h-[40vh] lg:h-[60vh]">
        <img
          src={heroImageComponentMW.imageLarge}
          className="w-full h-full max-md:hidden"
          alt=""
        />
        <img
          src={heroImageComponentMW.imageSmall}
          className="w-full h-full md:hidden"
          alt=""
        />
      </div>
    </>
  );
}

export default HeroImageComponentMW;
