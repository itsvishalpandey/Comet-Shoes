import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/ProductSlice";

function SingleProductOverview({ products }) {
  const productImages = [
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
    {
      smallImage: "src/assets/blue-white_small.webp",
    },
  ];

  // To show the all images when button is clicked
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // To show the details when button is clicked
  const [productDetail, setProductDetail] = useState(false);
  const toggleProductDetail = () => {
    setProductDetail(!productDetail);
  };

  // To show the add to cart button when size is selected
  const [sizeActive, setSizeActive] = useState(0);
  const handleSize = (size) => {
    setSizeActive((prev) => (prev === size ? 0 : size));
  };

  // To add product in cart

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id: products.id,
        image: products.image,
        name: products.name,
        price: products.price,
        size: sizeActive,
      })
    );
    alert("Item added");
  };

  return (
    <>
      <div className="product_page bg-white text-black">
        <div className="flex flex-col md:flex-row md:py-8">
          <div className="flex md:flex-col md:w-3/5 product_left max-md:overflow-x-auto">
            {products.singleImg.map((product, index) => (
              <div
                key={index}
                className="w-full h-[550px] md:h-[450px] lg:h-[650px] left_image max-md:shrink-0"
              >
                <img
                  src={product.img}
                  alt="product_image"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5 product_right">
            <div className="md:sticky md:top-8">
              <div className="flex flex-col gap-5 px-6 py-8 md:pt-0 md:px-8 lg:px-10 lg:gap-6">
                {/* Product name and price */}
                <div className="flex justify-between items-center font-medium">
                  <h1 className="text-lg">{products.name}</h1>
                  <h1 className="text-md">Rs. {products.price}</h1>
                </div>

                <div className="h-[1px] w-full bg-gray-400"></div>

                {/* Product color */}

                <div className="flex flex-col gap-2 font-medium">
                  <h1 className="text-sm lg:text-md">COLOR</h1>
                  <div className="flex flex-wrap gap-4">
                    {productImages.map((product, index) => (
                      <div
                        key={product.id}
                        className={`overflow-hidden h-14 w-16 lg:w-24 lg:h-20 ${
                          !showMore && index > 3 ? "hidden" : ""
                        }`}
                      >
                        <img
                          src={product.smallImage}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    {productImages.length > 3 && (
                      <button
                        className="text-gray-800 text-[12px] underline"
                        onClick={toggleShowMore}
                      >
                        {showMore ? "Show Less" : "+Show More"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Product Size */}

                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="flex justify-between text-sm font-medium lg:text-md">
                    <h1>SIZE(UK):</h1>
                    <h1>
                      SIZE GUIDE
                      <span className="bg-gray-200 rounded-full px-2 ml-2">
                        ?
                      </span>
                    </h1>
                  </div>

                  <div className="h-[1px] w-full bg-gray-400"></div>

                  <div className="flex flex-wrap gap-6 font-medium lg:py-4">
                    {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((size, index) => (
                      <div
                        key={index}
                        className={`px-3 py-1 border hover:border-black cursor-pointer ${
                          sizeActive === size ? "bg-gray-300" : ""
                        }`}
                        onClick={() => handleSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prodcut Coupen and Add to cart */}

                <div className="flex flex-col gap-4 font-medium">
                  <div
                    className={`${
                      sizeActive ? "" : "hidden"
                    } flex items-top gap-3 p-3 bg-[#f3f3f3] lg:px-8 lg:py-6 lg:gap-5 md:items-center`}
                  >
                    <img
                      src="src/assets/scale-icon.webp"
                      className="h-6 w-6"
                      alt="scale-icon"
                    />

                    <p className="text-[12px]">
                      In case you are between sizes , we recommend going one
                      size higher. E.g. if you wear a UK 6.5, you may want to
                      consider choosing a UK 7.
                    </p>
                  </div>

                  <div className="flex items-top gap-3 p-3 bg-[#f3f3f3] lg:px-8 lg:py-6 lg:gap-5 md:items-center">
                    <div>
                      <img
                        src="src/assets/mouse-icon.webp"
                        className="h-6 w-6 mt-1"
                        alt="mouse-icon"
                      />
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <h5 className="text-blue-600 text-md">APPLY FLAT400</h5>
                      <p className="text-[12px]">
                        Apply FLAT400 at checkout to avail a 400 off !
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className={`${
                      sizeActive ? "" : "cursor-not-allowed opacity-50"
                    } w-full px-8 py-5 lg:py-6 bg-yellow-400`}
                  >
                    ADD TO CART
                  </button>
                </div>

                {/* Prodcut Details */}

                <div className="flex flex-col gap-2 mt-4">
                  <div
                    className="flex justify-between items-center font-medium cursor-pointer"
                    onClick={toggleProductDetail}
                  >
                    <h1 className="text-sm lg:text-lg">PRODUCT DETAILS</h1>
                    {productDetail ? (
                      <i class="fa-solid fa-angle-up"></i>
                    ) : (
                      <i class="fa-solid fa-angle-down"></i>
                    )}
                  </div>
                  <div>
                    {productDetail && (
                      <div>
                        The understated elegance of BUTTERNUT is what makes it
                        our best bet. Shades of soft beige, greys, and white
                        come together to create a classic blend that syncs
                        together in harmony. This pair of muted neutrals is our
                        tribute to versatility and timelessness in the chaos of
                        the urban landscape. <br />
                        <br /> The colorblock palette, paired with sharp
                        aesthetics, lends it a flair compared to none. The upper
                        exterior in nylon backed with mesh underlays helps you
                        keep cool, comfy, and nimble at the same time. Every
                        stride is sweat-free once you slide your feet into the
                        weightless embrace of Aeons. <br />
                        <br /> - All-day comfort <br /> - Featherlight
                        weightlessness <br /> - Breathable with cutting-edge
                        tech <br />
                        <br /> Aeons are not only about cushy comfort but just
                        as much about durability. Meant for all kinds of terrain
                        in and out of the city, the Aeon outsole is a Waffle
                        Revolution. The unique waffle construction draws
                        inspiration from superior runners and trainers and
                        absorbs all kinds of external pressure to give you the
                        utmost comfort. So step into them for a snug fit and
                        stay on your toes tirelessly all day, every day.
                      </div>
                    )}
                  </div>

                  <div className="h-[1px] w-full bg-gray-400 mt-2"></div>
                </div>

                {/* Product Return Policy */}

                <div className="flex flex-col gap-10 lg:gap-6">
                  <h1 className="text-lg font-medium">SHIPPING & RETURNS</h1>
                  <div className="w-full flex justify-between gap-4 text-sm">
                    <div className="flex gap-2.5 items-center lg:gap-3">
                      <i class="fa-solid fa-truck fa-2xl"></i>

                      <p>Free Shipping</p>
                    </div>
                    <div className="flex gap-2.5 items-center lg:gap-3">
                      <i class="fa-brands fa-stack-exchange fa-2xl"></i>

                      <p>7 Day Return Policy</p>
                    </div>
                    <div className="flex gap-2.5 items-center lg:gap-3">
                      <i class="fa-solid fa-wallet fa-2xl"></i>
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductOverview;
