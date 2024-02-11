import React, { useState } from "react";
import SingleProductDescriptionComponent from "./SingleProductDescriptionComponent";

function SingleProductDescription() {
  const comfort = {
    image: "src/assets/ALL_DAY_EVERY_DAY.webp",
    quality: "ENGINEERED FOR COMFORT",
    application: "ALL DAY, EVERY DAY",
    description:
      "From your morning stroll to your late-night exploits, Comet Aeons boast a foam midsole and are crafted to wrap your feet in optimal comfort, no matter what the hour is.",
    status: true,
  };
  const effortless = {
    image: "src/assets/FEATHER-LIGHT_FINESSE.webp",
    quality: "WEIGHTLESS AND EFFORTLESS",
    application: "FEATHER-LIGHT FINESSE",
    description:
      "The airy fit and agility of Comet Aeons lets you be on your toes in style and float from one place to another.",
    status: false,
  };

  const blissfull = {
    image: "src/assets/BREATHES_AND_LETS_YOU_BREATHE.webp",
    quality: "MEANT FOR THE CITY TERRAIN",
    application: "⁠WAFFLE REVOLUTION",
    description:
      "The waffle outsole is aesthetic, yes. It is also what absorbs pressure evenly of all shapes and sizes to give you utmost stability.",
    status: true,
  };

  const terrain = {
    image: "src/assets/WAFFLE_REVOLUTION.jpg",
    quality: "BLISSFUL IN EVERY STEP",
    application: "BREATHES AND LETS YOU BREATHE",
    description:
      "The nylon upper construction keeps your stride cool, quite literally. The sneakers fit like second skin yet let you breathe.",
    status: false,
  };

  const balls = {
    image: "src/assets/STURDY._DURABLE._SECURE.jpg",
    quality: `AND THEY’VE GOT BALLS TOO!`,
    application: "STURDY. DURABLE. SECURE.",
    description:
      "The foam midsole combining with rubber outsole, have got some bones to get you through the day. Your sneaker can get through pretty much everything durably!",
    status: true,
  };

  return (
    <>
      <div className="flex flex-col px-4 gap-4 relative md:px-8 lg:px-12">
        <SingleProductDescriptionComponent comfort={comfort} />
        <SingleProductDescriptionComponent comfort={effortless} />
        <SingleProductDescriptionComponent comfort={blissfull} />
        <SingleProductDescriptionComponent comfort={terrain} />
        <SingleProductDescriptionComponent comfort={balls} />
      </div>
    </>
  );
}

export default SingleProductDescription;
