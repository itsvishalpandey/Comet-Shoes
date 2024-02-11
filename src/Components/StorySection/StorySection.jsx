import React from "react";
import { Link } from "react-router-dom";

function StorySection() {
  return (
    <>
      <section className="w-full h-full p-6 md:h-[80vh] md:px-14 lg:h-[100vh] story_section">
        <div className="h-full flex flex-col gap-6 md:gap-8 lg:gap-24 md:flex-row story_container">
          <div className="flex items-center justify-center w-full h-full order-2 md:w-1/2 md:order-1 ">
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="text-2xl font-bold lg:text-4xl">OUR STORY</div>
              <p className="lg:text-lg">
                Our universe is bound by rules. It is full of conformity and
                obedience. Stars, Planets, Moons - all following the same
                motions, time after time. A universe of monotony. But, very
                often, something comes along to disrupt all this dull and
                repetitive harmony - a Comet. It sets off on its path - focused,
                unstoppable. And most importantly, hard to ignore.
              </p>
              <p className="lg:text-lg">
                Why? Because it is out of the ordinary, a rule breaker on the
                grandest stage - fearless and unapologetic - in its path for
                liberation.
              </p>
              <h6 className="font-semibold lg:text-xl">
                It is Never Shy, Never Sorry.
              </h6>
              <Link className="underline font-semibold lg:text-lg">
                Read More
              </Link>
            </div>
          </div>
          <div className="w-full h-full order-1 md:w-1/2 md:order-2">
            <img
              src="src/assets/our-story-large.webp"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default StorySection;
