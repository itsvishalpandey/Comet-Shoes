import React from "react";
import { Link } from "react-router-dom";

function GlobalButton({ globalButtonContent, navigate }) {
  return (
    <Link
      to={navigate}
      className="px-8 py-2.5 text-[12px] font-medium md:px-10 md:text-lg lg:px-12 lg:py-3 bg-yellow-300 whitespace-nowrap"
    >
      {globalButtonContent}
    </Link>
  );
}

export default GlobalButton;
