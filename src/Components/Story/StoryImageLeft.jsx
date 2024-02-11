import React from "react";

function StoryImageLeft() {
  return (
    <>
      <div className="lg:px-20 py-14">
        <div className="flex flex-col gap-20">
          <div className="flex items-center px-12">
            <div className="max-md:hidden">
              <img
                src="src/assets/our-story-hero-image-shoes.webp"
                className="md:w-[250px] lg:w-[400px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-8 md:pl-20 lg:pl-40">
              <div className="text-2xl lg:text-4xl font-semibold">
                <span>What is Never Shy, Never Sorry?</span>
              </div>
              <div className="flex flex-col gap-4 text-sm lg:text-lg">
                <div className="flex items-center gap-4">
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                  <span>It’s a noise canceller of doubts and self doubts</span>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                  <span>It’s an antidote to conformism and comfort</span>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                  <span>
                    It’s about trying new things, failing at them and trying
                    more
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <i class="fa-solid fa-arrow-right fa-lg"></i>
                  <span>
                    It’s a license to follow your heart, your passions.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center md:px-20 lg:px-28">
            <div className="w-full h-full text-xl bg-red-400 px-10 py-8 lg:text-3xl">
              Never Shy, Never Sorry is about always wearing your heart on your
              sleeve. Or on your feet.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryImageLeft;
