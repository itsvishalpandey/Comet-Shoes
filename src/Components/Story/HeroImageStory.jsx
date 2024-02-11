import React from "react";

function HeroImageStory() {
  return (
    <>
      <div className="w-full h-full lg:p-20">
        <div className="w-full h-[100vh]">
          <div className="w-full h-full">
            <img
              src="src/assets/story_image_large.webp"
              className="w-full h-full max-md:hidden"
              alt=""
            />
            <img
              src="src/assets/story_image_small.webp"
              className="w-full h-full md:hidden"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-8 py-14 text-xl text-justify md:text-3xl lg:text-4xl lg:leading-10 lg:gap-10 lg:px-24">
          <span>
            Our universe is bound by rules.It is full of conformity and
            obedience. Stars, Planets, Moons - all following the same motions,
            time after time. A universe of monotony. But, very often, something
            comes along to disrupt all this dull and repetitive harmony - a
            Comet. It sets off on its path - focused, unstoppable. And most
            importantly, hard to ignore.
          </span>
          <span>
            Why? Because it is out of the ordinary, a rule breaker on the
            grandest stage - fearless and unapologetic - in its path for
            liberation.
          </span>
          <span>It is</span>

          <span className="text-8xl uppercase text-center">
            never shy, never sorry
          </span>
        </div>
      </div>
    </>
  );
}

export default HeroImageStory;
