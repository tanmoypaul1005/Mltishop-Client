import React from "react";

function Categorycomponents(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <a className="text-decoration-none" href="">
        <div className="cat-item d-flex align-items-center mb-4">
          <div className="overflow-hidden" style={{width: "100px", height: "100px"}}>
            <img className="img-fluid" src={props.image}alt="" />
          </div>
          <div className="flex-fill pl-3">
            <h6>{props.name}</h6>
            <small className="text-body">100 Products</small>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Categorycomponents;
