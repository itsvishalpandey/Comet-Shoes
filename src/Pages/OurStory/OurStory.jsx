import React from "react";
import HeroImageStory from "../../Components/Story/HeroImageStory";
import StoryImageRight from "../../Components/Story/StoryImageRight";
import StoryImageLeft from "../../Components/Story/storyImageLeft";

function OurStory() {
  return (
    <>
      <div className="h-full w-full bg-black text-white">
        <HeroImageStory />
        <StoryImageLeft />
        <StoryImageRight />
      </div>
    </>
  );
}

export default OurStory;
