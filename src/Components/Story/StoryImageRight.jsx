import React from "react";

function StoryImageRight() {
  return (
    <>
      <div className="lg:px-20 py-14">
        <div className="flex flex-col px-8 gap-14 lg:flex-row">
          <div className="w-full flex items-center order-2 lg:w-1/2">
            <div className="w-full flex flex-col gap-6 text-justify text-md leading-6 md:leading-10 md:text-lg lg:text-xl lg:pr-20 lg:gap-8">
              <h1 className="text-lg font-bold md:text-2xl lg:text-4xl ">
                About the founders
              </h1>
              <span>
                We have done the rounds in the corporate world. Years of
                hustling, meeting deadlines, and achieving corporate milestones.
                Valuable experiences indeed, but they never really got us going.
                Both of us got sucked in by the excitement of returning to India
                from Chicago and Boston to start something new. After taking the
                conventional path for years, we decided to subvert expectations
                and place our bets on our
                <b> passion: sneakers.</b>
              </span>
              <span>
                Many told us not to. Many still do. And many will continue to.
                But we both know this space brings a different energy out of us
                - a fire that we only dreamed of during our early days. Our
                passion now makes us obsess over the tiniest details. Always
                pushes us to go the extra mile. Allows us to take on challenges
                head-on with a lot of excitement to discover what lies on the
                other side.
              </span>
              <span>
                For us, Comet is a brand born straight out of infinite dreams
                and boundless ideas. It’s an idea born solely out of our
                passion. And we’re certain that this zeal is what will help us
                create the sneaker brand that India has long waited for.
              </span>
              <span>
                Join us and become part of this journey. Become Never Shy, Never
                Sorry. We cannot be more excited.
              </span>
              <span>- Utkarsh & Dishant</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:order-2">
            <img
              src="src/assets/comet_founder_image.webp"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryImageRight;
