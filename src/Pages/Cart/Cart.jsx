import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../../Store/ProductSlice";
import GlobalButton from "../../Components/GlobalButton/GlobalButton";

function Cart() {
  const { items, totalprice } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleIncrement = (items) => {
    dispatch(addProduct(items));
  };

  const handleDecrement = (items) => {
    dispatch(removeProduct(items));
  };

  return (
    <>
      {items.length > 0 ? (
        <div className="h-full relative overflow-hidden">
          <div className="h-[75%] flex flex-col gap-4 pb-2 overflow-y-scroll cart_itemList">
            {items.map((cartItem, index) => (
              <div
                key={index}
                className="w-full flex gap-4 p-4 justify-between border border-black"
              >
                <div className="w-1/3">
                  <div className="w-full h-[130px]">
                    <img
                      src={cartItem.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="w-full flex flex-col gap-2 items-start">
                    <h6>{cartItem.name}</h6>
                    <p>Size: {cartItem.size}</p>
                    <p>id: {cartItem.id}</p>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="h-full flex flex-col items-end justify-between">
                    <h6>Rs. {cartItem.price * cartItem.quantity}</h6>
                    <div className="flex items-center gap-4 border border-black">
                      <button
                        className="px-3 py-1 bg-gray-200"
                        onClick={() => handleDecrement(cartItem)}
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        className="px-3 py-1 bg-gray-200"
                        onClick={() => handleIncrement(cartItem)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[25%] bg-white absolute bottom-0 uppercase pt-2">
            <div className="flex flex-col items-baseline gap-4">
              <div
                className="w-full flex justify-between text-md
               font-semibold"
              >
                <h6>shipping:</h6>
                <h6 className="text-gray-500">free shipping</h6>
              </div>
              <div className="w-full flex justify-between font-bold">
                <h6 className="text-xl">total:</h6>
                <h6 className="text-2xl">rs. {totalprice} </h6>
              </div>
              <div className="w-full">
                <button className="w-full py-2.5 text-[12px] font-medium md:text-lg lg:py-3 bg-yellow-300 whitespace-nowrap uppercase">
                  check out
                </button>
              </div>
            </div>
          </div>
        </div>
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
