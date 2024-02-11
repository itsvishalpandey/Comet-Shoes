import React from "react";
import NavbarDropdown from "./NavbarDropdown";

function NavbarDropdownMen({ navLinkClicked }) {
  const sneakerInputMen = [
    {
      id: 1,
      name: "COMET X",
      smImage: "src/assets/Sneaker_icon.webp",
      image: "src/assets/lateral-view_2_3-min_400x.webp",
      navigate: "/comet-men",
    },
    {
      id: 2,
      name: "AEON",
      smImage: "src/assets/Sneaker_icon.webp",
      image: "src/assets/navigation_ratio_men_2_400x.webp",
      navigate: "/aeon-men",
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
        sneakerInput={sneakerInputMen}
        slideInput={slideInput}
      />
    </>
  );
}

export default NavbarDropdownMen;
