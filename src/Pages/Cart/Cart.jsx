import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../../Store/ProductSlice";
import GlobalButton from "../../Components/GlobalButton/GlobalButton";

function Cart() {
  const showStoreItems = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  const handleIncrement = (items) => {
    dispatch(addProduct(items));
  };

  const handleDecrement = (items) => {
    dispatch(removeProduct(items));
  };

  return (
    <>
      {showStoreItems.length > 0 ? (
        showStoreItems.map((items) => (
          <div className="w-full flex gap-4 px-4 py-4 justify-between border border-black">
            <div className="w-1/3">
              <div className="w-full h-[150px]">
                <img src={items.image} className="w-full h-full" alt="" />
              </div>
            </div>
            <div className="w-1/3">
              <div className="w-full flex flex-col gap-2 items-start">
                <h6>{items.name}</h6>
                <p>Size: {items.size}</p>
                <p>id: {items.id}</p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="h-full flex flex-col items-end justify-between">
                <h6>Rs. {items.price * items.quantity}</h6>
                <div className="flex gap-4 p-1 border border-black">
                  <button
                    className="px-2"
                    onClick={() => handleDecrement(items)}
                  >
                    -
                  </button>
                  <span>{items.quantity}</span>
                  <button
                    className="px-2"
                    onClick={() => handleIncrement(items)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full profile_user flex flex-col items-center justify-center gap-12 text-center overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col gap-6">
            <h6 className="font-bold text-2xl">YOUR CART IS EMPTY</h6>
            <GlobalButton
              globalButtonContent="CONTINUE SHOPPING"
              navigate="/collection"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>HAVE AN ACCOUNT?</p>
            <h1 className="text-lg">
              <Link className="underline">LOG IN</Link> TO CHECK OUT FASTER.
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
