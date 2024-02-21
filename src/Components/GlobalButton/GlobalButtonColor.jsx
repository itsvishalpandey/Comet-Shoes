import React from "react";
import { Link } from "react-router-dom";

function GlobalButtonColor({ globalButtonContent, navigate, colors }) {
  return (
    <Link
      to={navigate}
      className={`px-8 py-2.5 text-[12px] font-medium md:px-10 md:text-lg lg:px-12 lg:py-3 bg-${colors}-500 text-white border-2 border-black whitespace-nowrap`}
    >
      {globalButtonContent}
    </Link>
  );
}

export default GlobalButtonColor;
