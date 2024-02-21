import React from "react";
import GlobalButtonColor from "../../Components/GlobalButton/GlobalButtonColor";
import CometCarousel from "../../Components/CometCarousel/CometCarousel";

function Drops() {
  return (
    <>
      <div className="">
        <div className="w-full h-full">
          <div className="w-full h-[115vh]">
            <img
              src="src/assets/hero_image_drops_large.jpg"
              className="w-full h-full object-cover max-md:hidden"
              alt=""
            />
            <img
              src="src/assets/hero_image_drops_small.webp"
              className="w-full h-full object-cover md:hidden"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full ">
          <div className="w-full flex flex-col gap-10 p-8 lg:flex-row md:p-12 lg:px-20 lg:gap-0">
            <div className="w-full lg:w-2/5">
              <img
                src="src/assets/drop_image.webp"
                className="w-full h-full object-cover max-lg:hidden"
                alt=""
              />

              <img
                src="src/assets/drop_image_three.webp"
                className="w-full h-[350px] object-contain lg:hidden"
                alt=""
              />
            </div>
            <div className="w-full lg:w-3/5">
              <div className="h-full flex flex-col items-start justify-center gap-4 lg:px-20 md:gap-8 lg:gap-10">
                <div className="uppercase text-xl md:text-2xl lg:text-4xl font-bold">
                  <h1>Shoes Details</h1>
                </div>
                <div className="flex flex-col gap-6 text-md text-justify md:text-lg">
                  <p>
                    When art and individuality converge, the world transcends
                    the ordinary. In a herd clamouring for conformity, this
                    limited edition, first-of-a-kind sneaker, in collaboration
                    with Santanu Hazarika, celebrates the beauty of standing
                    out. This drop is a tribute to those who heed their distinct
                    voice and allow wonders to happen on their unique canvas of
                    self-expression. Santanu Hazarika is one such artist, and
                    together, we created this piece of art to remind you to
                    always embrace your uniqueness.
                  </p>
                  <p>
                    Let this sneaker urge you to take each step being uniquely
                    you. As long as you break free from the noise and do it all
                    unapologetically, you will walk ahead leaving an indelible
                    mark with every stride.
                  </p>
                </div>
                <div className="max-lg:hidden">
                  <GlobalButtonColor
                    globalButtonContent="Explore"
                    navigate="/drops"
                    colors="green"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full ">
          <div className="w-full flex flex-col gap-10 p-8 lg:flex-row md:p-12 lg:px-20 lg:gap-0">
            <div className="w-full lg:w-2/5">
              <div className="h-full w-full">
                <img
                  src="src/assets/drop_image_two.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="w-full h-full flex items-end gap-4 lg:px-20 md:gap-8 lg:gap-10 max-lg:hidden">
                <img
                  src="src/assets/drop_image_three.webp"
                  className="w-full h-[350px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <GlobalButtonColor
                  colors={"green"}
                  globalButtonContent="Explore"
                  navigate="/drops"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 py-8 past_drops">
        <div className="text-3xl font-bold px-4 uppercase lg:px-12">
          <h1>Past Drops</h1>
        </div>
        <CometCarousel />
      </div>

      <div className="flex flex-col gap-8 py-8 featured_collection">
        <div className="text-3xl font-bold px-4 uppercase lg:px-12">
          <h1>Featured Collection</h1>
        </div>
        <CometCarousel />
      </div>
    </>
  );
}

export default Drops;
