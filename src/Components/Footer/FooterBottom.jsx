import React from "react";
import { Link } from "react-router-dom";

function FooterBottom() {
  return (
    <>
      <div className="w-full h-full bg-yellow-300 border-t border-black">
        <div className="flex flex-col gap-14 font-bold py-14 px-8 lg:gap-20 lg:flex-row lg:px-20">
          <div className="flex flex-col items-start gap-14 lg:gap-20 justify-between lg:w-1/2 left">
            <div className="flex flex-col gap-12 footer_social">
              <h1 className="text-2xl">SOCIAL</h1>
              <div className="flex gap-8">
                <i class="fa-brands fa-instagram fa-xl"></i>
                <i class="fa-brands fa-linkedin-in fa-xl"></i>
              </div>
            </div>
            <div className="flex flex-col gap-8 footer_social">
              <h1 className="text-xl">NEED HELP</h1>
              <div className="flex flex-wrap gap-8 text-sm lg:text-[16px] underline">
                <Link className="pr-4 border-r-2 border-black">HOME</Link>
                <Link className="pr-4 border-r-2 border-black">CONTACT US</Link>
                <Link className="pr-4 border-r-2 border-black">
                  BECOME A MEMBER
                </Link>
                <Link className="pr-4 border-r-2 border-black">MY ACCOUNT</Link>
                <Link className="pr-4 border-r-2 border-black">
                  RETURN AND EXCHANGE PORTAL
                </Link>
                <Link className="pr-4 border-r-2 border-black">T&C</Link>
                <Link className="pr-4 border-r-2 border-black">
                  PRIVACY POLICY
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-12 footer_social pb-6">
              <h1 className="text-2xl">100% SECURE PAYMENTS</h1>
              <div className="flex gap-8">
                <i class="fa-brands fa-cc-visa fa-xl"></i>
                <i class="fa-brands fa-cc-mastercard fa-xl"></i>
                <i class="fa-brands fa-cc-apple-pay fa-xl"></i>
                <i class="fa-brands fa-cc-amazon-pay fa-xl"></i>
                <i class="fa-brands fa-paypal fa-xl"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-14 lg:gap-20 justify-between lg:w-1/2 lg:pl-8 left">
            <div className="flex gap-8 pt-6">
              <div className="flex flex-col gap-6 items-start lg:items-center">
                <i class="fa-solid fa-truck fa-2xl"></i>
                <p>Free Shipping</p>
              </div>
              <div className="flex flex-col gap-6 items-start lg:items-center">
                <i class="fa-solid fa-wallet fa-2xl"></i>
                <p>Cash on Delivery</p>
              </div>
              <div className="flex flex-col gap-6 items-start lg:items-center">
                <i class="fa-brands fa-stack-exchange fa-2xl"></i>
                <p>7 Day Return Policy</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl">REACH US</h1>
              <div className="flex flex-col gap-4 font-normal">
                <div>
                  <h6>For Marketing/Partnerships, contact us at</h6>
                  <h6 className="underline">partnerships@wearcomet.com</h6>
                </div>
                <div>
                  <h6>Interested in being part of our team? Get in touch at</h6>
                  <h6 className="underline">careers@wearcomet.com</h6>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-2xl">GET IN TOUCH</h1>
              <div className="flex flex-col gap-4">
                <p>
                  Second Floor, Padmavathi Complex, 80 Feet Road, 8th Block,
                  Koramangala, Bengaluru, Karnataka, 560095
                </p>
                <div className="flex items-center gap-2">
                  <i class="fa-solid fa-envelope"></i>
                  <h6>hello@wearcomet.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-center font-semibold pb-10 px-14 lg:py-12 hover:underline">
          © 2024, Grails Marketing Private Limited. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
