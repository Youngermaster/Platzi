import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <p>This is the {productId}'s page</p>
    </div>
  );
};

export default ProductItem;
