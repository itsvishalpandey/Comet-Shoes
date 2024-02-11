import React, { useRef } from "react";

function TestimonialCarouselComponent() {
  const carouselRef = useRef(null);

  const handleTestimonialLeft = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft -= containerWidth;
    }
  };

  const handleTestimonialRight = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft += containerWidth;
    }
  };

  const testimonialCarouselImages = [
    {
      id: 1,
      image: "src/assets/Siddhant_A.webp",
      shoesImage: "src/assets/Siddhant_A_shoes.webp",
      name: "Siddhant A.",
      expert: "Investment Analyst",
      review: "crazy style and comfort",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic culpa similique inventore maxime, tempore consequatur rem tenetur facere at pariatur voluptates placeat ut non.",
    },
    {
      id: 2,
      image: "src/assets/Nishant_T.jpg",
      shoesImage: "src/assets/Nishant_T_shoes.webp",
      name: "Nishant T.",
      expert: "Hospitality Expert",
      review: "statement maker!",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic culpa similique inventore maxime, tempore consequatur rem tenetur facere at pariatur voluptates placeat ut non.",
    },
    {
      id: 3,
      image: "src/assets/Vijay_R.webp",
      shoesImage: "src/assets/Vijay_R_shoes.webp",
      name: "Vijay R.",
      expert: "Content Creater",
      review: "x lows for life!",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic culpa similique inventore maxime, tempore consequatur rem tenetur facere at pariatur voluptates placeat ut non.",
    },
  ];

  return (
    <>
      <div className="pt-8 pl-8 text-2xl font-semibold uppercase md:text-3xl lg:pl-0 testimonial_carousel_header">
        <h1>what're they saying?</h1>
      </div>

      <div
        ref={carouselRef}
        className="w-full h-full flex overflow-x-auto scroll-smooth relative  testimonial_carousel_container"
      >
        {testimonialCarouselImages.map((images, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col gap-8 p-8 shrink-0 cursor-pointer relative lg:flex-row lg:items-center lg:gap-20 lg:px-0 lg:py-12 testimonial_carousel_card"
          >
            <img
              src={images.image}
              className="w-[90%] h-[65vh] md:h-[100vh] lg:w-1/2 object-fill testimonial_card_image"
              alt=""
            />

            <div className="w-full h-full flex flex-col lg:w-1/2 lg:pr-12 lg:gap-12">
              <div className="flex flex-col gap-6 py-4 px-8 border border-black shadow-lg bg-white testimonial_card_details">
                <div className="flex items-center justify-between lg:order-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={images.image}
                      className="w-12 h-12 object-cover rounded-full md:w-14 md:h-14"
                      alt={images.name}
                    />
                    <div className="flex flex-col gap-0.5">
                      <h6 className="text-md font-semibold md:text-lg whitespace-nowrap">
                        {images.name}
                      </h6>
                      <p className="text-sm md:text-md">{images.expert}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold uppercase md:text-2xl">
                    {images.review}
                  </h1>
                </div>
                <div>
                  <p>{images.description}</p>
                </div>
              </div>
              <div className="max-lg:hidden">
                <img src={images.shoesImage} className="w-1/2" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial_btns flex flex-col items-start gap-8 absolute top-[30%] right-4 md:right-10 lg:flex-row lg:top-auto bottom-16 lg:right-40">
        <button
          onClick={(e) => handleTestimonialLeft(e)}
          className="bg-[#d9d8d8] px-2.5 py-1 rounded-full"
        >
          <i class="fa-solid fa-angle-left fa-lg"></i>
        </button>
        <button
          onClick={(e) => handleTestimonialRight(e)}
          className="bg-[#d9d8d8] px-2.5 py-1 rounded-full"
        >
          <i class="fa-solid fa-angle-right fa-lg"></i>
        </button>
      </div>
    </>
  );
}

export default TestimonialCarouselComponent;
