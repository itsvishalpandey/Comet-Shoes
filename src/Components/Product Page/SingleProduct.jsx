import React from "react";
import SingleProductOverview from "./SingleProductOverview";
import SingleProductDescription from "./SingleProductDescription";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  const location = useLocation();
  const { productDetails } = location.state || {};
  return (
    <>
      <SingleProductOverview products={productDetails.images} />
      <SingleProductDescription />
    </>
  );
}

export default SingleProduct;
