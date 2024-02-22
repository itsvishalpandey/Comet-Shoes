import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallScreenNavbarLinks from "./SmallScreenNavbarLinks";
import LargeScreenNavbarLinks from "./LargeScreenNavbarLinks";
import Cart from "../../Pages/Cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCart = () => {
    setCartOpen(!cartOpen);
    setProfileOpen(false);
  };

  const handleProfileIcon = () => {
    setProfileOpen(!profileOpen);
    setCartOpen(false);
  };

  // To count the number of products in the cart
  const totalProductInCart = useSelector(
    (state) => state.products.totalproducts
  );

  return (
    <>
      <header className="sticky top-0 right-0 left-0 shadow-lg bg-white z-50">
        <div className="h-16 sticky flex justify-between items-center px-4 py-4 font-medium md:px-8 lg:px-12">
          <div
            className="header_menu cursor-pointer lg:hidden"
            onClick={handleMenu}
          >
            {menuOpen ? (
              <i class="fa-solid fa-x fa-2x"></i>
            ) : (
              <i class="fa-solid fa-bars fa-2x"></i>
            )}
          </div>

          <div className="header_left">
            <Link to="/" className="header_logo">
              <img
                src="src/assets/logo.avif"
                className="h-7 w-full"
                alt="header_logo"
              />
            </Link>
          </div>
          <div className="header_right flex justify-between items-center gap-12 text-md lg:gap-12">
            {/* Large Screen Links */}

            <LargeScreenNavbarLinks />

            {/* Small Screen Links */}

            <SmallScreenNavbarLinks menuOpen={menuOpen} />

            <div className="w-full header_icons flex gap-6 text-sm lg:gap-12">
              <div className="profile_icon">
                <div
                  className="cursor-pointer profile_cart_icon"
                  onClick={handleProfileIcon}
                >
                  <i class="fa-regular fa-user fa-xl"></i>
                </div>
                <div
                  className={`${
                    profileOpen ? "" : "hidden"
                  } profileIcon_content flex flex-col gap-4 shadow-md p-6 bg-white text-gray-600 w-[55%] absolute top-16 left-auto right-[20px] md:w-[30%] lg:w-[20%] lg:left-auto lg:right-[20px]`}
                >
                  <div className="profile_user flex flex-col items-start gap-2.5">
                    <h6 className="text-black font-bold">Welcome</h6>
                    <p>To access account and manage orders</p>
                    <Link className="px-2 py-1.5 bg-yellow-400 text-black rounded-sm">
                      Login / Signup
                    </Link>
                  </div>
                  <div className="h-0.5 w-full bg-gray-200"></div>
                  <div className="profile_links flex flex-col gap-2.5">
                    <Link>Become a member</Link>
                    <Link>Returns and Exchange</Link>
                    <Link>FAQ</Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col cart_icon">
                <div
                  className="relative cursor-pointer profile_cart_icon"
                  onClick={handleCart}
                >
                  <i class="fa-solid fa-cart-shopping fa-xl"></i>
                  {totalProductInCart < 1 ? (
                    ""
                  ) : (
                    <span className="h-full absolute -top-4 -right-3">
                      {totalProductInCart}
                    </span>
                  )}
                </div>
                <div
                  className={`${
                    cartOpen ? "translate-x-[0%] " : "translate-x-[100%]"
                  } w-[80%] h-[100vh] flex flex-col gap-8 shadow-md p-8 bg-white black fixed top-0 right-0 md:w-[60%] lg:w-[35%] transition duration-300 delay-400 ease-in`}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">
                      <h1>CART</h1>
                    </div>
                    <div className="text-end cursor-pointer">
                      {cartOpen && (
                        <i class="fa-solid fa-x fa-lg" onClick={handleCart}></i>
                      )}
                    </div>
                  </div>

                  {/* To Display Cart */}
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

{
  /* ******** */
}
{
  /* ******** */
}
{
  /* ******** */
}

// For Navabr
// const [scrollTop, setScrollTop] = useState(0);
// const [showNavbar, setshowNavbar] = useState(true);

// useEffect(() => {
//   const onScroll = () => {
//     if (window.scrollY > scrollTop) {
//       setshowNavbar(false);
//     } else {
//       setshowNavbar(true);
//     }
//     setScrollTop(window.scrollY);
//   };

//   window.addEventListener("scroll", onScroll);

//   return () => {
//     window.removeEventListener("scroll", onScroll);
//   };
// }, [scrollTop]);

{
  /* **** */
}
// For header html
// <header
//         className={`${
//           showNavbar
//             ? "sticky top-0 translate-y-0 transition-transform duration-400 ease"
//             : "translate-y-[-100%]"
//         } shadow-lg bg-white z-50`}
//       ></header>
