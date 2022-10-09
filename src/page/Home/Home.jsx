import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Featured from "../../Components/Featured/Featured";
import Offer from "../../Components/Offer/Offer";
import Vendor from "../../Components/Vendor/Vendor";
import Category from "../Category/Category";
import Product from "../Product/Product";

function Home() {
  return (
    <div>
      <Carousel />
      <Featured />
      <Category />
      <Product />
      <Offer />
      <Vendor />
    </div>
  );
}

export default Home;
