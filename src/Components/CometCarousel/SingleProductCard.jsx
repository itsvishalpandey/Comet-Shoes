import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/ProductSlice";
import { useNavigate } from "react-router-dom";

function SingleProductCard({ images, id }) {
  // To show the add to card button only when size is selected
  const [sizeActive, setSizeActive] = useState(0);
  const handleQuickAddSize = (size) => {
    setSizeActive((prev) => (prev === size ? 0 : size));
  };

  // To show the add to cart when click plus icon on card
  const [showQuickAdd, setShowQuickAdd] = useState(null);
  const handleQuickAdd = (id) => {
    setShowQuickAdd((prev) => (prev === id ? null : id));
  };

  // To save the product in store
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id: images.id,
        image: images.image,
        name: images.name,
        price: images.price,
        size: sizeActive,
      })
    );
    alert("Item added");
  };

  // To navigate on card detail page
  const navigate = useNavigate();
  const handleCardDetailsPage = () => {
    navigate("/single-product", {
      state: {
        productDetails: { images },
      },
    });
  };

  return (
    <>
      <div
        key={id}
        className="w-1/2 h-[450px] flex shrink-0 cursor-pointer relative md:h-full lg:w-[25%] comet_carousel_card"
      >
        <div onClick={handleCardDetailsPage} className="h-full w-full">
          <img
            src={images.image}
            className="w-full h-full object-fill carousel_image"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1 absolute bottom-6 left-4 md:gap-2 md:left-8 carousel_details">
          <h1 className="text-md md:text-lg">{images.name}</h1>
          <h2 className="text-sm md:text-md">Rs. {images.price}</h2>
        </div>

        <button
          onClick={(e) => handleQuickAdd(images.id)}
          className="bg-[#d9d8d8] px-2 py-1 rounded-full absolute bottom-6 right-4 md:right-8"
        >
          <i class="fa-solid fa-plus"></i>
        </button>

        {showQuickAdd === images.id && (
          <div className="flex flex-col gap-2 p-3 quick_add absolute bottom-6 left-4 right-4 bg-white">
            <div className="flex justify-end">
              <button
                onClick={(e) => handleQuickAdd(e)}
                className="bg-[#d9d8d8] px-2 py-1 rounded-full"
              >
                <i class="fa-solid fa-x"></i>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <i class="fa-solid fa-bag-shopping"></i> QUICK ADD
            </div>
            <div className="text-sm">
              <h1>SIZE</h1>
            </div>

            <div className="flex flex-wrap gap-3 font-medium py-2">
              {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((size, index) => (
                <div
                  key={index}
                  className={`p-1.5 border hover:border-black cursor-pointer ${
                    sizeActive === size ? "bg-gray-300" : ""
                  }`}
                  onClick={() => handleQuickAddSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
            <button
              className={`${
                sizeActive ? "" : "cursor-not-allowed opacity-50"
              } w-full px-8 py-2 bg-yellow-400`}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleProductCard;
