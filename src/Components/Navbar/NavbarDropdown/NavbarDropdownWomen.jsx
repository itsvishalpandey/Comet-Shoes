import React from "react";
import NavbarDropdown from "./NavbarDropdown";

function NavbarDropdownWomen({ navLinkClicked }) {
  const sneakerInputWomen = [
    {
      id: 1,
      name: "COMET X",
      smImage: "src/assets/Sneaker_icon.webp",
      image: "src/assets/lateral-view_2_3-min_400x.webp",
      navigate: "/comet-women",
    },
    {
      id: 2,
      name: "AEON",
      smImage: "src/assets/Sneaker_icon.webp",
      image: "src/assets/navigation_ratio_men_2_400x.webp",
      navigate: "/aeon-women",
    },
  ];

  const slideInput = [
    {
      id: 3,
      name: "SLIDE",
      smImage: "src/assets/Slide_icon.png",
      image: "src/assets/Slides.webp",
      navigate: "/slides",
    },
  ];
  return (
    <>
      <NavbarDropdown
        navLinkClicked={navLinkClicked}
        sneakerInput={sneakerInputWomen}
        slideInput={slideInput}
      />
    </>
  );
}

export default NavbarDropdownWomen;
