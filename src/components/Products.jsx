import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "will be updated soon enough to be available in the next month of the year and will be updated soon enough to be available in the next month",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "will be updated soon enough to be available in the next month of the year and will be updated soon enough to be available in the next month",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "will be updated soon enough to be available in the next month of the year and will be updated soon enough to be available in the next month",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "will be updated soon enough to be available in the next month of the year and will be updated soon enough to be available in the next month",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-20">
        {products.map((val, index)=> <Product key={index} val={val} />)}
    </div>
  );
}

export default Products;
