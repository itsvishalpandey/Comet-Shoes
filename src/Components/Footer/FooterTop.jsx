import React from "react";

function FooterTop() {
  return (
    <>
      <div className="w-full bg-yellow-300 overflow-hidden">
        <div className="flex flex-col gap-8 py-14 lg:px-20">
          <div className="flex gap-8 pl-8 footer_top_images">
            <img
              src="src/assets/footer_top_one.webp"
              className="w-8 h-7"
              alt=""
            />
            <img
              src="src/assets/footer_top_two.webp"
              className="w-8 h-7"
              alt=""
            />
            <img
              src="src/assets/footer_top_three.webp"
              className="w-8 h-7"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 items-start font-bold text-4xl md:flex-row md:items-center md:text-5xl footer_top_text">
            <h1 className="w-full md:w-fit bg-red-400 pl-8 py-3 -rotate-2 whitespace-nowrap md:px-8">
              GOOD SHOES
            </h1>
            <h1 className="pl-8 md:pl-0">TAKE YOU TO GOOD PLACES</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;
