import React from "react";
import Productcomponent from "../../Components/Productcomponent/Productcomponent";
import { iproduct1, iproduct2, iproduct3, iproduct4, iproduct5, iproduct6, iproduct7, iproduct8 } from "../../Utility/Sources";

const Product = () => {
  return (
    <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Featured Products</span></h2>
        <div class="row px-xl-5">

            <Productcomponent image={iproduct1}/>
            <Productcomponent image={iproduct2}/>
            <Productcomponent image={iproduct3}/>
            <Productcomponent image={iproduct4}/>
            <Productcomponent image={iproduct5}/>
            <Productcomponent image={iproduct6}/>
            <Productcomponent image={iproduct7}/>
            <Productcomponent image={iproduct8}/>
        </div>
      </div>
  );
};

export default Product;
