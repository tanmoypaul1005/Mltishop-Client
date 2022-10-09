import React from "react";
import Categorycomponents from "../../Components/Categorycomponents/Categorycomponents";
import { icat1, icat2, icat3, icat4 } from "../../Utility/Sources";

const Category = () => {
  return (
    <div>
      <div class="container-fluid pt-5">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span class="bg-secondary pr-3">Categories</span>
        </h2>
        <div class="row px-xl-5 pb-3">
          <Categorycomponents name="Category Name" image={icat1} />
          <Categorycomponents name="Category Name" image={icat2} />
          <Categorycomponents name="Category Name" image={icat3} />
          <Categorycomponents name="Category Name" image={icat4} />
          <Categorycomponents name="Category Name" image={icat3} />
          <Categorycomponents name="Category Name" image={icat1} />
          <Categorycomponents name="Category Name" image={icat4} />
          <Categorycomponents name="Category Name" image={icat2} />
          <Categorycomponents name="Category Name" image={icat1} />
          <Categorycomponents name="Category Name" image={icat4} />
          <Categorycomponents name="Category Name" image={icat2} />
          <Categorycomponents name="Category Name" image={icat3} />
        </div>
      </div>
    </div>
  );
};

export default Category;
